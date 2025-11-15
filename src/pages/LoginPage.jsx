import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

// وظيفة: صفحة تسجيل الدخول - نموذج تسجيل الدخول
function LoginPage() {
  const { t } = useTranslation()
  const { login, loading } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    const result = await login(formData.email, formData.password)
    
    if (result.success) {
      // توجيه حسب الدور
      if (result.user.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (result.user.role === 'student') {
        navigate('/student/dashboard')
      } else {
        navigate('/dashboard')
      }
    } else {
      setError(result.error || t('login.invalidCredentials'))
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {t('login.title')}
          </h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                {t('login.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="admin@university.edu"
              />
              <p className="text-xs text-gray-500 mt-1">
                Admin: admin@university.edu / admin123<br />
                Student: Use your student email / password
              </p>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                {t('login.password')}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-gray-700">{t('login.rememberMe')}</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                {t('login.forgotPassword')}
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? t('common.loading') : t('login.login')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
