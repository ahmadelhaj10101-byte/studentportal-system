import { createContext, useContext, useState, useEffect } from 'react'

// وظيفة: إنشاء سياق اللغة للتحكم في اللغة الحالية
const LanguageContext = createContext()

// وظيفة: مكون مقدم السياق - يوفر اللغة والدالة لتغييرها
export function LanguageProvider({ children }) {
  // حالة: اللغة الحالية (ar أو en)
  const [language, setLanguage] = useState(() => {
    // جلب اللغة المحفوظة من localStorage أو استخدام العربية كافتراضي
    return localStorage.getItem('language') || 'ar'
  })

  // تأثير: حفظ اللغة في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('language', language)
    // تغيير اتجاه الصفحة حسب اللغة
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  // دالة: تغيير اللغة
  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// hook: استخدام سياق اللغة في المكونات
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

