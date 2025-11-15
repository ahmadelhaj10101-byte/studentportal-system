import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// وظيفة: مكون حماية المسار - يمنع الوصول للصفحات المحمية بدون تسجيل الدخول
function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, isAdmin } = useAuth()

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute

