import { useLanguage } from '../contexts/LanguageContext'

// وظيفة: مبدل اللغة - يسمح للمستخدم بالتبديل بين العربية والإنجليزية
function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-1 rounded-md text-sm font-semibold transition ${
          language === 'ar'
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-semibold transition ${
          language === 'en'
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  )
}

export default LanguageSwitcher

