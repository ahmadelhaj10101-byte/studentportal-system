import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { events } from '../data/events'

// وظيفة: صفحة الفعاليات - عرض جميع الفعاليات مع إمكانية التسجيل
function EventsPage() {
  const { t, language } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [registeredEvents, setRegisteredEvents] = useState(new Set())

  const toggleRegistration = (eventId) => {
    const newRegistered = new Set(registeredEvents)
    if (newRegistered.has(eventId)) {
      newRegistered.delete(eventId)
    } else {
      newRegistered.add(eventId)
    }
    setRegisteredEvents(newRegistered)
  }

  const filteredEvents = events.filter(event => {
    if (filter === 'upcoming') return event.status === 'upcoming'
    if (filter === 'past') return event.status === 'past'
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {t('events.title')}
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('events.all')}
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('events.upcoming')}
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'past' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('events.past')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isRegistered = registeredEvents.has(event.id)
            const isFull = event.registered >= event.capacity
            
            return (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {language === 'ar' ? event.title : event.titleEn}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === 'ar' ? event.description : event.descriptionEn}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold mr-2">📅</span>
                    {event.date} - {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold mr-2">📍</span>
                    {language === 'ar' ? event.location : event.locationEn}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold mr-2">👥</span>
                    {event.registered} / {event.capacity} {t('events.attendees')}
                  </div>
                </div>

                <button
                  onClick={() => toggleRegistration(event.id)}
                  disabled={isFull && !isRegistered}
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    isRegistered
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : isFull
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isRegistered ? t('events.registered') : isFull ? t('events.full') : t('events.register')}
                </button>
              </div>
            )
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('events.noEvents')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsPage

