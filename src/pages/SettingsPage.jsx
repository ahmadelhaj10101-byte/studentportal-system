import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useLanguage } from '../contexts/LanguageContext'

// وظيفة: صفحة الإعدادات - إعدادات اللغة والمظهر والإشعارات
function SettingsPage() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const [theme, setTheme] = useState('light')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    // محاكاة حفظ الإعدادات
    localStorage.setItem('theme', theme)
    localStorage.setItem('emailNotifications', emailNotifications)
    localStorage.setItem('smsNotifications', smsNotifications)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('settings.title')}
        </h1>

        {saved && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {t('settings.saved')}
          </div>
        )}

        <div className="space-y-6">
          {/* إعدادات اللغة */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('settings.language')}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* إعدادات المظهر */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('settings.theme')}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setTheme('light')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  theme === 'light'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('settings.light')}
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('settings.dark')}
              </button>
            </div>
          </div>

          {/* إعدادات الإشعارات */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('settings.notifications')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">
                    {t('settings.emailNotifications')}
                  </p>
                  <p className="text-sm text-gray-600">
                    تلقي إشعارات عبر البريد الإلكتروني
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">
                    {t('settings.smsNotifications')}
                  </p>
                  <p className="text-sm text-gray-600">
                    تلقي إشعارات عبر الرسائل النصية
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsNotifications}
                    onChange={(e) => setSmsNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* زر الحفظ */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {t('settings.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage

