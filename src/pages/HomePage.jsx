import { Link } from 'react-router-dom'
import { students } from '../data/students'
import StudentCard from '../components/StudentCard'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: الصفحة الرئيسية - تحتوي على بانر وبيانات مميزة
function HomePage() {
  const { t } = useTranslation()
  // جلب أول 3 طلاب للعرض في القسم المميز
  const featuredStudents = students.slice(0, 3)

  return (
    <div>
      {/* بانر الصفحة الرئيسية */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              {t('home.exploreServices')}
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* قسم الطلاب المميزين */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('home.featuredStudents')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {t('home.viewAllStudents')}
            </Link>
          </div>
        </div>
      </section>

      {/* قسم المميزات السريعة */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('home.features')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('home.viewGrades')}
              </h3>
              <p className="text-gray-600">
                {t('home.viewGradesDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('home.manageStudents')}
              </h3>
              <p className="text-gray-600">
                {t('home.manageStudentsDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('home.manageCourses')}
              </h3>
              <p className="text-gray-600">
                {t('home.manageCoursesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
