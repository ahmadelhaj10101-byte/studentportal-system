import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { events } from '../data/events'

// وظيفة: صفحة التقويم الأكاديمي - عرض الأحداث والفعاليات
function CalendarPage() {
  const { t, language } = useTranslation()
  const [viewMode, setViewMode] = useState('month')
  const [selectedDate, setSelectedDate] = useState(new Date())

  // الحصول على الأحداث للتاريخ المحدد
  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0]
    return events.filter(event => event.date === dateStr)
  }

  // توليد أيام الشهر
  const getDaysInMonth = () => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // أيام الشهر السابق
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i)
      days.push({ date, isCurrentMonth: false })
    }
    
    // أيام الشهر الحالي
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      days.push({ date, isCurrentMonth: true })
    }
    
    // أيام الشهر التالي
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day)
      days.push({ date, isCurrentMonth: false })
    }
    
    return days
  }

  const monthNames = language === 'ar' 
    ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dayNames = language === 'ar'
    ? ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const navigateMonth = (direction) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + direction, 1))
  }

  const days = getDaysInMonth()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {t('calendar.title')}
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg ${viewMode === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              {t('calendar.month')}
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg ${viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              {t('calendar.week')}
            </button>
          </div>
        </div>

        {viewMode === 'month' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* رأس التقويم */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => navigateMonth(-1)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                ←
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                →
              </button>
            </div>

            {/* أيام الأسبوع */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day, index) => (
                <div key={index} className="text-center font-semibold text-gray-700 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* الأيام */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const dayEvents = getEventsForDate(day.date)
                const isToday = day.date.toDateString() === new Date().toDateString()
                
                return (
                  <div
                    key={index}
                    className={`min-h-24 p-2 border rounded-lg ${
                      day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                    } ${isToday ? 'border-blue-500 border-2' : 'border-gray-200'}`}
                  >
                    <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                      {day.date.getDate()}
                    </div>
                    {dayEvents.length > 0 && (
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="text-xs bg-blue-100 text-blue-800 px-1 rounded truncate"
                            title={language === 'ar' ? event.title : event.titleEn}
                          >
                            {language === 'ar' ? event.title : event.titleEn}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{dayEvents.length - 2} {t('common.viewMore')}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* قائمة الأحداث القادمة */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('dashboard.upcomingEvents')}
          </h2>
          <div className="space-y-4">
            {events.filter(e => e.status === 'upcoming').slice(0, 5).map((event) => (
              <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">
                  {language === 'ar' ? event.title : event.titleEn}
                </h3>
                <p className="text-sm text-gray-600">
                  {event.date} - {event.time} | {language === 'ar' ? event.location : event.locationEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage

