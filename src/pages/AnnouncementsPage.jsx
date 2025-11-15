import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { announcements } from '../data/announcements'

// وظيفة: صفحة الإعلانات - عرض جميع الإعلانات مع إمكانية التوسيع
function AnnouncementsPage() {
  const { t, language } = useTranslation()
  const [expandedIds, setExpandedIds] = useState(new Set())

  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedIds)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedIds(newExpanded)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('announcements.title')}
        </h1>

        <div className="space-y-6">
          {announcements.map((announcement) => {
            const isExpanded = expandedIds.has(announcement.id)
            const isImportant = announcement.type === 'important'
            
            return (
              <div
                key={announcement.id}
                className={`bg-white rounded-lg shadow-lg p-6 ${
                  isImportant ? 'border-l-4 border-red-500' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {language === 'ar' ? announcement.title : announcement.titleEn}
                      </h2>
                      {isImportant && (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {t('announcements.important')}
                        </span>
                      )}
                      {!isImportant && (
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {t('announcements.general')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>
                        {t('announcements.date')}: {announcement.date}
                      </span>
                      <span>
                        {t('announcements.author')}: {language === 'ar' ? announcement.author : announcement.authorEn}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-700">
                  {isExpanded ? (
                    <div>
                      <p className="mb-4">
                        {language === 'ar' ? announcement.content : announcement.contentEn}
                      </p>
                      <button
                        onClick={() => toggleExpand(announcement.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        {t('announcements.readLess')}
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-4 line-clamp-2">
                        {language === 'ar' ? announcement.content : announcement.contentEn}
                      </p>
                      <button
                        onClick={() => toggleExpand(announcement.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        {t('announcements.readMore')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {announcements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('announcements.noAnnouncements')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnnouncementsPage

