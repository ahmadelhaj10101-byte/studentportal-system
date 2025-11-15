import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { students as initialStudents } from '../data/students'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: صفحة الملف الشخصي للطالب - جلب بيانات الطالب بواسطة useParams
function StudentProfile() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  // hook: استخراج معرف الطالب من الرابط
  const { id } = useParams()
  
  // hook: للتنقل بين الصفحات
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  // جلب بيانات الطالب من المصفوفة بناءً على المعرف
  const student = students.find(s => s.id === parseInt(id))

  // إذا لم يتم العثور على الطالب، عرض رسالة خطأ
  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('profile.studentNotFound')}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('profile.notFoundDesc')}
          </p>
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {t('profile.backToStudents')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* زر العودة */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
        >
          <span className="ml-2">←</span>
          {t('profile.back')}
        </button>

        {/* بطاقة الملف الشخصي */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {(language === 'ar' ? student.name : student.nameEn).charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {language === 'ar' ? student.name : student.nameEn}
              </h1>
              <p className="text-xl text-gray-600 mb-1">
                {language === 'ar' ? student.major : student.majorEn}
              </p>
              <p className="text-gray-500">
                {language === 'ar' ? student.year : student.yearEn}
              </p>
            </div>
          </div>

          {/* معلومات الاتصال */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">
                {t('profile.email')}
              </h3>
              <p className="text-gray-800">{student.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">
                {t('profile.phone')}
              </h3>
              <p className="text-gray-800">{student.phone}</p>
            </div>
          </div>

          {/* المعدل التراكمي */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-1">
                  {t('services.gpa')}
                </h3>
                <p className={`text-4xl font-bold ${
                  student.gpa >= 3.5 ? 'text-green-600' :
                  student.gpa >= 2.5 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {student.gpa.toFixed(2)}
                </p>
              </div>
              <div className="text-5xl">
                {student.gpa >= 3.5 ? '⭐' : student.gpa >= 2.5 ? '📊' : '📝'}
              </div>
            </div>
          </div>
        </div>

        {/* جدول المواد */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('profile.registeredCourses')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('profile.courseCode')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('profile.courseName')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('profile.grade')}
                  </th>
                  <th className="px-4 py-3 text-right text-gray-700 font-semibold">
                    {t('profile.credits')}
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
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-semibold">
                  <td colSpan="3" className="px-4 py-3 text-right text-gray-700">
                    {t('services.totalCredits')}:
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {student.courses.reduce((sum, course) => sum + course.credits, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile


