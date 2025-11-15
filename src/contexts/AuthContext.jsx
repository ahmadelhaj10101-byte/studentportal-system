import { createContext, useContext, useState, useEffect } from 'react'
import { students as initialStudents } from '../data/students'

// وظيفة: سياق المصادقة - إدارة حالة تسجيل الدخول
const AuthContext = createContext()

// بيانات المستخدمين الوهمية (Admin & Teacher)
const mockUsers = [
  {
    id: 1,
    email: 'admin@university.edu',
    password: 'admin123',
    name: 'مدير النظام',
    nameEn: 'System Admin',
    role: 'admin'
  },
  {
    id: 2,
    email: 'teacher@university.edu',
    password: 'teacher123',
    name: 'مدرس',
    nameEn: 'Teacher',
    role: 'teacher'
  }
]

// وظيفة: مكون مقدم السياق - يوفر حالة المصادقة والدوال
export function AuthProvider({ children }) {
  // حالة: المستخدم الحالي المسجل دخوله
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // حالة: حالة التحميل
  const [loading, setLoading] = useState(false)

  // دالة: تسجيل الدخول
  const login = async (email, password) => {
    setLoading(true)
    // محاكاة طلب API
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // التحقق من المستخدمين (Admin/Teacher)
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    )
    
    if (foundUser) {
      const userData = { ...foundUser }
      delete userData.password // لا نحفظ كلمة المرور
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      setLoading(false)
      return { success: true, user: userData }
    }
    
    // التحقق من الطلاب
    const savedStudents = localStorage.getItem('students')
    const students = savedStudents ? JSON.parse(savedStudents) : initialStudents
    
    const foundStudent = students.find(
      s => s.email === email && s.password === password
    )
    
    if (foundStudent) {
      const studentData = {
        id: foundStudent.id,
        email: foundStudent.email,
        name: foundStudent.name,
        nameEn: foundStudent.nameEn,
        role: 'student',
        studentId: foundStudent.id
      }
      setUser(studentData)
      localStorage.setItem('user', JSON.stringify(studentData))
      setLoading(false)
      return { success: true, user: studentData }
    }
    
    setLoading(false)
    return { success: false, error: 'Invalid email or password' }
  }

  // دالة: تسجيل الخروج
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // دالة: التحقق من أن المستخدم مسجل دخوله
  const isAuthenticated = () => {
    return user !== null
  }

  // دالة: التحقق من أن المستخدم مدير
  const isAdmin = () => {
    return user && user.role === 'admin'
  }

  // دالة: التحقق من أن المستخدم طالب
  const isStudent = () => {
    return user && user.role === 'student'
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated,
      isAdmin,
      isStudent,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// hook: استخدام سياق المصادقة في المكونات
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
