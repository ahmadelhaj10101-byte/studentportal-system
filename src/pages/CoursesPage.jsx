import { useState, useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { students } from '../data/students'

// وظيفة: صفحة المواد الدراسية - عرض جميع المواد مع إمكانية البحث والفلترة
function CoursesPage() {
  const { t, language } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMajor, setSelectedMajor] = useState('all')

  // جمع جميع المواد من جميع الطلاب
  const allCourses = useMemo(() => {
    const coursesMap = new Map()
    students.forEach(student => {
      student.courses.forEach(course => {
        if (!coursesMap.has(course.code)) {
          coursesMap.set(course.code, {
            ...course,
            students: [],
            majors: new Set()
          })
        }
        coursesMap.get(course.code).students.push({
          id: student.id,
          name: language === 'ar' ? student.name : student.nameEn
        })
        coursesMap.get(course.code).majors.add(
          language === 'ar' ? student.major : student.majorEn
        )
      })
    })
    return Array.from(coursesMap.values()).map(course => ({
      ...course,
      majors: Array.from(course.majors)
    }))
  }, [language])

  // الحصول على جميع التخصصات
  const majors = useMemo(() => {
    const majorsSet = new Set()
    students.forEach(student => {
      majorsSet.add(language === 'ar' ? student.major : student.majorEn)
    })
    return Array.from(majorsSet)
  }, [language])

  // فلترة المواد
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = 
        (language === 'ar' ? course.name : course.nameEn)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesMajor = 
        selectedMajor === 'all' || 
        course.majors.includes(selectedMajor)
      
      return matchesSearch && matchesMajor
    })
  }, [allCourses, searchTerm, selectedMajor, language])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('courses.title')}
        </h1>

        {/* البحث والفلترة */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('common.search')}
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('courses.searchPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('courses.filterByMajor')}
              </label>
              <select
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{t('courses.allMajors')}</option>
                {majors.map((major, index) => (
                  <option key={index} value={major}>{major}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* قائمة المواد */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {language === 'ar' ? course.name : course.nameEn}
                  </h3>
                  <p className="text-gray-600">{course.code}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.credits} {t('services.credits')}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{t('courses.instructor')}:</span>{' '}
                  {language === 'ar' ? course.instructor : course.instructorEn}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{t('courses.enrolledStudents')}:</span>{' '}
                  {course.students.length}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.majors.map((major, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {major}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.noData')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage

