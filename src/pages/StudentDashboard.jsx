import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useAuth } from '../contexts/AuthContext'
import { students as initialStudents } from '../data/students'
import { Link } from 'react-router-dom'

// وظيفة: لوحة تحكم الطالب - عرض ملفه الشخصي ومواده ودرجاته
function StudentDashboard() {
  const { t, language } = useTranslation()
  const { user } = useAuth()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // جلب بيانات الطالب من localStorage أو البيانات الأولية
    const savedStudents = localStorage.getItem('students')
    const students = savedStudents ? JSON.parse(savedStudents) : initialStudents
    
    const foundStudent = students.find(s => s.id === user?.studentId)
    setStudent(foundStudent)
    setLoading(false)
  }, [user])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">{t('common.loading')}</p>
      </div>
    )
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('student.notFound')}
          </h1>
          <p className="text-gray-600">{t('student.notFoundDesc')}</p>
        </div>
      </div>
    )
  }

  // حساب إجمالي الساعات المعتمدة
  const totalCredits = student.courses.reduce((sum, course) => sum + course.credits, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* ترحيب */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t('student.welcome')}, {language === 'ar' ? student.name : student.nameEn}
          </h1>
          <p className="text-gray-600">{t('student.dashboardSubtitle')}</p>
        </div>

        {/* بطاقة الملف الشخصي */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('student.profile')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-1">{t('services.major')}</p>
              <p className="text-lg font-semibold text-gray-800">
                {language === 'ar' ? student.major : student.majorEn}
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">{t('profile.year')}</p>
              <p className="text-lg font-semibold text-gray-800">
                {language === 'ar' ? student.year : student.yearEn}
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">{t('common.email')}</p>
              <p className="text-lg font-semibold text-gray-800">{student.email}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">{t('common.phone')}</p>
              <p className="text-lg font-semibold text-gray-800">{student.phone}</p>
            </div>
          </div>
        </div>

        {/* المعدل التراكمي */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-2">{t('services.gpa')}</p>
              <p className={`text-5xl font-bold ${
                student.gpa >= 3.5 ? 'text-green-300' :
                student.gpa >= 2.5 ? 'text-yellow-300' :
                'text-red-300'
              }`}>
                {student.gpa.toFixed(2)}
              </p>
            </div>
            <div className="text-6xl">
              {student.gpa >= 3.5 ? '⭐' : student.gpa >= 2.5 ? '📊' : '📝'}
            </div>
          </div>
        </div>

        {/* المواد والدرجات */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {t('profile.registeredCourses')}
            </h2>
            <Link
              to={`/student/${student.id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {t('student.viewFullProfile')}
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('services.courseCode')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('services.courseName')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('services.grade')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('services.credits')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('courses.instructor')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {student.courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-gray-800 font-medium">
                      {course.code}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      {language === 'ar' ? course.name : course.nameEn}
                    </td>
                    <td className={`px-4 py-3 font-bold text-lg ${
                      course.grade === 'A' || course.grade === 'A-' ? 'text-green-600' :
                      course.grade === 'B+' || course.grade === 'B' ? 'text-blue-600' :
                      course.grade === 'B-' || course.grade === 'C+' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {course.grade}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      {course.credits}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {language === 'ar' ? course.instructor : course.instructorEn}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-semibold">
                  <td colSpan="3" className="px-4 py-3 text-right text-gray-700">
                    {t('services.totalCredits')}:
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {totalCredits}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-gray-600 mb-1">{t('services.coursesCount')}</p>
            <p className="text-3xl font-bold text-blue-600">{student.courses.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-600 mb-1">{t('services.totalCredits')}</p>
            <p className="text-3xl font-bold text-green-600">{totalCredits}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-gray-600 mb-1">{t('services.gpa')}</p>
            <p className={`text-3xl font-bold ${
              student.gpa >= 3.5 ? 'text-green-600' :
              student.gpa >= 2.5 ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {student.gpa.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard

