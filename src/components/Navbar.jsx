import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useAuth } from '../contexts/AuthContext'
import LanguageSwitcher from './LanguageSwitcher'

// وظيفة: شريط التنقل العلوي - يحتوي على روابط الصفحات
function Navbar() {
  const { t, language } = useTranslation()
  const { user, logout, isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()
  // حالة: تتبع المسار الحالي لتحديد الرابط النشط
  const location = useLocation()
  
  // حالة: التحكم في فتح/إغلاق القائمة على الأجهزة المحمولة
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // دالة: التحقق من أن الرابط نشط
  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMenuOpen(false)
  }

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/dashboard', key: 'nav.dashboard' },
    { path: '/about', key: 'nav.about' },
    { path: '/services', key: 'nav.services' },
    { path: '/courses', key: 'nav.courses' },
    { path: '/calendar', key: 'nav.calendar' },
    { path: '/announcements', key: 'nav.announcements' },
    { path: '/events', key: 'nav.events' },
    { path: '/library', key: 'nav.library' },
    { path: '/statistics', key: 'nav.statistics' },
    { path: '/contact', key: 'nav.contact' },
    { path: '/settings', key: 'nav.settings' }
  ]

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* الشعار */}
          <Link to="/" className="text-2xl font-bold hover:text-blue-200">
            Student Portal
          </Link>

          {/* قائمة التنقل للأجهزة الكبيرة */}
          <div className="hidden lg:flex items-center space-x-2 space-x-reverse">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition text-sm ${
                  isActive(item.path) 
                    ? 'bg-blue-700 font-semibold' 
                    : 'hover:bg-blue-500'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            {isAdmin() && (
              <Link
                to="/admin/dashboard"
                className={`px-3 py-2 rounded-md transition text-sm ${
                  isActive('/admin/dashboard') 
                    ? 'bg-purple-700 font-semibold' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {t('nav.admin')}
              </Link>
            )}
            {isStudent() && (
              <Link
                to="/student/dashboard"
                className={`px-3 py-2 rounded-md transition text-sm ${
                  isActive('/student/dashboard') 
                    ? 'bg-green-700 font-semibold' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {t('nav.myDashboard')}
              </Link>
            )}
            <LanguageSwitcher />
            {isAuthenticated() ? (
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {language === 'ar' ? user?.name : user?.nameEn}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-sm font-semibold"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-md bg-green-600 hover:bg-green-700 transition text-sm font-semibold"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>

          {/* زر القائمة للأجهزة المحمولة */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* قائمة التنقل للأجهزة المحمولة */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md transition ${
                  isActive(item.path) 
                    ? 'bg-blue-700 font-semibold' 
                    : 'hover:bg-blue-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            {isAdmin() && (
              <Link
                to="/admin/dashboard"
                className={`block px-3 py-2 rounded-md transition ${
                  isActive('/admin/dashboard') 
                    ? 'bg-purple-700 font-semibold' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.admin')}
              </Link>
            )}
            {isStudent() && (
              <Link
                to="/student/dashboard"
                className={`block px-3 py-2 rounded-md transition ${
                  isActive('/student/dashboard') 
                    ? 'bg-green-700 font-semibold' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.myDashboard')}
              </Link>
            )}
            {isAuthenticated() ? (
              <div className="px-3 py-2">
                <p className="text-sm mb-2">
                  {language === 'ar' ? user?.name : user?.nameEn}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 transition font-semibold"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md bg-green-600 hover:bg-green-700 transition font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.login')}
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
