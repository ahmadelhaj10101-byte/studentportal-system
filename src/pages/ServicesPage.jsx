import { useState, useEffect } from 'react'
import { students as initialStudents } from '../data/students'
import StudentCard from '../components/StudentCard'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: صفحة الخدمات - عرض الطلاب والمواد والدرجات
function ServicesPage() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  // حالة: تتبع التبويب النشط (طلاب، مواد، درجات)
  const [activeTab, setActiveTab] = useState('students')

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  // دالة: جمع جميع المواد من جميع الطلاب
  const getAllCourses = () => {
    const coursesMap = new Map()
    students.forEach(student => {
      student.courses.forEach(course => {
        if (!coursesMap.has(course.code)) {
          coursesMap.set(course.code, {
            ...course,
            students: []
          })
        }
        coursesMap.get(course.code).students.push(
          language === 'ar' ? student.name : student.nameEn
        )
      })
    })
    return Array.from(coursesMap.values())
  }

  const allCourses = getAllCourses()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* عنوان الصفحة */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {t('services.title')}
        </h1>

        {/* التبويبات */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'students'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('services.viewStudents')}
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('services.viewCourses')}
          </button>
          <button
            onClick={() => setActiveTab('grades')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'grades'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('services.viewGrades')}
          </button>
        </div>

        {/* محتوى التبويبات */}
        <div className="mt-8">
          {/* تبويب عرض الطلاب */}
          {activeTab === 'students' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {t('services.studentsList')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            </div>
          )}

          {/* تبويب عرض المواد */}
          {activeTab === 'courses' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {t('services.coursesList')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {language === 'ar' ? course.name : course.nameEn}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{t('services.courseCode')}:</span> {course.code}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{t('services.credits')}:</span> {course.credits}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">{t('services.studentsCount')}:</span> {course.students.length}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* تبويب عرض الدرجات */}
          {activeTab === 'grades' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {t('services.viewGradesByStudent')}
              </h2>
              <div className="space-y-6">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {language === 'ar' ? student.name : student.nameEn}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-right">{t('services.courseCode')}</th>
                            <th className="px-4 py-2 text-right">{t('services.courseName')}</th>
                            <th className="px-4 py-2 text-right">{t('services.grade')}</th>
                            <th className="px-4 py-2 text-right">{t('services.credits')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {student.courses.map((course, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-4 py-2">{course.code}</td>
                              <td className="px-4 py-2">
                                {language === 'ar' ? course.name : course.nameEn}
                              </td>
                              <td className={`px-4 py-2 font-semibold ${
                                course.grade === 'A' || course.grade === 'A-' ? 'text-green-600' :
                                course.grade === 'B+' || course.grade === 'B' ? 'text-blue-600' :
                                course.grade === 'B-' || course.grade === 'C+' ? 'text-yellow-600' :
                                'text-red-600'
                              }`}>
                                {course.grade}
                              </td>
                              <td className="px-4 py-2">{course.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-lg">
                      <span className="font-semibold">{t('services.gpa')}:</span>
                      <span className={`ml-2 font-bold ${
                        student.gpa >= 3.5 ? 'text-green-600' :
                        student.gpa >= 2.5 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {student.gpa.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
