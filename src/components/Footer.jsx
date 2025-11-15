import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: التذييل - يحتوي على معلومات الاتصال والروابط السريعة
function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات النظام */}
          <div>
            <h3 className="text-xl font-bold mb-4">Student Portal</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('footer.email')}: info@studentportal.edu</li>
              <li>{t('footer.phone')}: +966 12 345 6789</li>
              <li>{t('footer.address')}: {t('footer.addressText')}</li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Student Portal. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
