import { useTranslation } from '../hooks/useTranslation'
import { students } from '../data/students'
import { announcements } from '../data/announcements'
import { events } from '../data/events'
import { Link } from 'react-router-dom'

// وظيفة: صفحة لوحة التحكم - تعرض إحصائيات سريعة ونشاطات حديثة
function Dashboard() {
  const { t, language } = useTranslation()

  // حساب الإحصائيات
  const totalStudents = students.length
  const totalCourses = new Set(students.flatMap(s => s.courses.map(c => c.code))).size
  const averageGPA = (students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)
  
  // الفعاليات القادمة (3 فقط)
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3)
  
  // الإعلانات الأخيرة (3 فقط)
  const recentAnnouncements = announcements.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('dashboard.title')}
        </h1>

        {/* الإحصائيات السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">{t('dashboard.totalStudents')}</p>
                <p className="text-3xl font-bold text-blue-600">{totalStudents}</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">{t('dashboard.totalCourses')}</p>
                <p className="text-3xl font-bold text-green-600">{totalCourses}</p>
              </div>
              <div className="text-4xl">📚</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">{t('dashboard.averageGPA')}</p>
                <p className="text-3xl font-bold text-purple-600">{averageGPA}</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* الفعاليات القادمة */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('dashboard.upcomingEvents')}
              </h2>
              <Link
                to="/events"
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                {t('dashboard.viewAll')}
              </Link>
            </div>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-800">
                      {language === 'ar' ? event.title : event.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {event.date} - {event.time}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t('dashboard.noEvents')}</p>
            )}
          </div>

          {/* الإعلانات */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('dashboard.announcements')}
              </h2>
              <Link
                to="/announcements"
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                {t('dashboard.viewAll')}
              </Link>
            </div>
            {recentAnnouncements.length > 0 ? (
              <div className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-800">
                      {language === 'ar' ? announcement.title : announcement.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {announcement.date} - {language === 'ar' ? announcement.author : announcement.authorEn}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t('dashboard.noAnnouncements')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

