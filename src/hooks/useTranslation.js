import { useLanguage } from '../contexts/LanguageContext'
import { ar } from '../locales/ar'
import { en } from '../locales/en'

// وظيفة: hook للترجمة - يحصل على النص المترجم حسب اللغة الحالية
export function useTranslation() {
  const { language } = useLanguage()
  
  // اختيار ملف الترجمة المناسب
  const translations = language === 'ar' ? ar : en

  // دالة: الحصول على النص المترجم من مسار متداخل (مثل 'nav.home')
  const t = (key) => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }
    
    return value || key
  }

  return { t, language }
}

