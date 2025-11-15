# Student Portal System
## Project Report

---

**University:** Lebanese University  
**Course:** Web Development / Software Engineering  
**Project Type:** Frontend React Application  
**Date:** January 2025  
**Author:** Ahmed Elhaj

---

## Abstract

This project presents a comprehensive Student Portal System built as a frontend-only React application. The system provides a complete interface for managing student information, courses, grades, and academic records. The application features a bilingual interface (Arabic and English) with full RTL/LTR support, role-based authentication (Admin and Student), and a responsive design using Tailwind CSS.

The system implements a mock data architecture using localStorage for data persistence, eliminating the need for a backend server or database. Key features include student profile management, course registration, grade tracking, GPA calculation, announcements, events calendar, library resources, and administrative controls for managing students, courses, and grades.

The application demonstrates modern React development practices including Context API for state management, React Router for navigation, custom hooks for reusable logic, and component-based architecture. The system is fully responsive and provides an intuitive user experience across desktop, tablet, and mobile devices.

---

## System Design

### Architecture Overview

The Student Portal System follows a component-based architecture with clear separation of concerns:

```
student-portal/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── StudentCard.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── StudentProfile.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── ManageStudents.jsx
│   │   ├── ManageCourses.jsx
│   │   ├── ManageGrades.jsx
│   │   └── [Other pages...]
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── LanguageContext.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useTranslation.js
│   ├── locales/             # Translation files
│   │   ├── ar.js
│   │   └── en.js
│   ├── data/                # Mock data
│   │   ├── students.js
│   │   ├── announcements.js
│   │   ├── events.js
│   │   └── library.js
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

### Component Hierarchy

```
App
├── LanguageProvider
│   └── AuthProvider
│       └── Router
│           ├── Navbar
│           ├── Routes
│           │   ├── HomePage
│           │   ├── AboutPage
│           │   ├── ServicesPage
│           │   ├── ContactPage
│           │   ├── StudentProfile
│           │   ├── StudentDashboard (Protected)
│           │   ├── AdminDashboard (Protected)
│           │   ├── ManageStudents (Protected)
│           │   ├── ManageCourses (Protected)
│           │   └── ManageGrades (Protected)
│           └── Footer
```

### Data Flow

1. **Authentication Flow:**
   - User enters credentials in LoginPage
   - AuthContext validates against mockUsers or students data
   - On success, user data stored in localStorage and AuthContext state
   - Protected routes check authentication status via ProtectedRoute component

2. **Language Management:**
   - LanguageContext manages current language (ar/en)
   - useTranslation hook provides translation function
   - Document direction (RTL/LTR) updated automatically
   - Language preference persisted in localStorage

3. **Data Management:**
   - Initial data loaded from static files (students.js, etc.)
   - All CRUD operations update localStorage
   - Components read from localStorage on mount
   - GPA automatically recalculated when grades change

### Key Design Patterns

1. **Context API Pattern:** Used for global state (authentication, language)
2. **Custom Hooks Pattern:** useTranslation for reusable translation logic
3. **Protected Route Pattern:** Wrapper component for authentication/authorization
4. **Mock Data Pattern:** localStorage as persistent storage simulation
5. **Component Composition:** Small, reusable components

---

## Technologies Used

### Core Technologies

1. **React 18.x**
   - Modern React with functional components and hooks
   - Context API for state management
   - React Router v6 for navigation

2. **Vite**
   - Fast build tool and development server
   - Hot Module Replacement (HMR)
   - Optimized production builds

3. **Tailwind CSS 3.x**
   - Utility-first CSS framework
   - Responsive design utilities
   - Custom configuration for RTL support

4. **React Router DOM 6.x**
   - Client-side routing
   - Dynamic routes with useParams
   - Protected route implementation

### Development Tools

- **PostCSS:** CSS processing
- **Autoprefixer:** CSS vendor prefixing
- **ESLint:** Code linting (if configured)

### Key Libraries

- **React Context API:** Global state management
- **localStorage API:** Data persistence
- **React Hooks:** useState, useEffect, useContext, useParams, useNavigate

### Design Principles

- **Responsive Design:** Mobile-first approach
- **Accessibility:** Semantic HTML, ARIA labels
- **Internationalization:** Full Arabic/English support
- **User Experience:** Intuitive navigation, clear feedback

---

## Code Snippets

### 1. Authentication Context (AuthContext.jsx)

```javascript
// وظيفة: سياق المصادقة - إدارة حالة تسجيل الدخول
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = async (email, password) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // التحقق من المستخدمين (Admin/Teacher)
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    )
    
    if (foundUser) {
      const userData = { ...foundUser }
      delete userData.password
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
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
        role: 'student'
      }
      setUser(studentData)
      localStorage.setItem('user', JSON.stringify(studentData))
      return { success: true, user: studentData }
    }
    
    return { success: false, error: 'Invalid email or password' }
  }

  const isAdmin = () => user && user.role === 'admin'
  const isStudent = () => user && user.role === 'student'

  return (
    <AuthContext.Provider value={{
      user, login, logout, isAuthenticated, isAdmin, isStudent, loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
```

### 2. Language Context (LanguageContext.jsx)

```javascript
// وظيفة: سياق اللغة - لإدارة اللغة الحالية واتجاه النص
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language')
    return savedLang || 'ar'
  })

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'ar' ? 'en' : 'ar'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

### 3. Translation Hook (useTranslation.js)

```javascript
// وظيفة: هوك مخصص للترجمة - يوفر وظيفة الترجمة واللغة الحالية
export function useTranslation() {
  const { language, setLanguage } = useContext(LanguageContext)

  const t = (key) => {
    const translations = language === 'ar' ? ar : en
    const keys = key.split('.')
    let result = translations

    for (let i = 0; i < keys.length; i++) {
      if (result && typeof result === 'object' && keys[i] in result) {
        result = result[keys[i]]
      } else {
        return key
      }
    }
    return result
  }

  return { t, language, setLanguage }
}
```

### 4. Protected Route Component (ProtectedRoute.jsx)

```javascript
// وظيفة: مكون لحماية المسارات - يتطلب تسجيل الدخول
function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  const { t } = useTranslation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">{t('common.loading')}</p>
      </div>
    )
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  if (adminOnly && !isAdmin()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            {t('common.accessDenied')}
          </h2>
          <p className="text-gray-700 mb-6">
            {t('common.adminAccessRequired')}
          </p>
          <Navigate to="/dashboard" replace />
        </div>
      </div>
    )
  }

  return children
}
```

### 5. Dynamic Student Profile (StudentProfile.jsx)

```javascript
// وظيفة: صفحة الملف الشخصي للطالب - جلب بيانات الطالب بواسطة useParams
function StudentProfile() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  const student = students.find(s => s.id === parseInt(id))

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('profile.studentNotFound')}
          </h1>
          <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            {t('profile.backToStudents')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Student profile content */}
    </div>
  )
}
```

### 6. GPA Calculation (ManageGrades.jsx)

```javascript
// دالة: حساب المعدل التراكمي بناءً على الدرجات
const calculateGPA = (courses) => {
  if (!courses || courses.length === 0) return 0
  
  const gradePoints = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'F': 0.0
  }
  
  let totalPoints = 0
  let totalCredits = 0
  
  courses.forEach(course => {
    const points = gradePoints[course.grade] || 0
    totalPoints += points * course.credits
    totalCredits += course.credits
  })
  
  return totalCredits > 0 ? totalPoints / totalCredits : 0
}

// استخدام الدالة عند تحديث الدرجات
const handleGradeUpdate = (studentId, courseCode, newGrade) => {
  const updatedStudents = students.map(student => {
    if (student.id === studentId) {
      const updatedCourses = student.courses.map(course =>
        course.code === courseCode
          ? { ...course, grade: newGrade }
          : course
      )
      const newGPA = calculateGPA(updatedCourses)
      return {
        ...student,
        courses: updatedCourses,
        gpa: newGPA
      }
    }
    return student
  })
  
  setStudents(updatedStudents)
  localStorage.setItem('students', JSON.stringify(updatedStudents))
}
```

### 7. App.jsx - Main Routing

```javascript
// وظيفة: المكون الرئيسي للتطبيق - إعداد التوجيه والهيكل العام
function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/student/:id" element={<StudentProfile />} />
                
                {/* Protected Routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/student/dashboard"
                  element={
                    <ProtectedRoute>
                      <StudentDashboard />
                    </ProtectedRoute>
                  }
                />
                {/* More routes... */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  )
}
```

### 8. Student Card Component (StudentCard.jsx)

```javascript
// وظيفة: بطاقة عرض معلومات الطالب - تستخدم لعرض ملخص بيانات الطالب
function StudentCard({ student }) {
  const { t, language } = useTranslation()
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {language === 'ar' ? student.name : student.nameEn}
        </h3>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">{t('services.major')}:</span> 
          {language === 'ar' ? student.major : student.majorEn}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-semibold mr-2">
            {t('services.gpa')}:
          </span>
          <span className={`text-lg font-bold ${
            student.gpa >= 3.5 ? 'text-green-600' :
            student.gpa >= 2.5 ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {student.gpa.toFixed(2)}
          </span>
        </div>
        <Link
          to={`/student/${student.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
        >
          {t('services.viewProfile')}
        </Link>
      </div>
    </div>
  )
}
```

---

## Features Summary

### User Features
- ✅ Bilingual interface (Arabic/English)
- ✅ Student profile viewing
- ✅ Course and grade tracking
- ✅ GPA calculation and display
- ✅ Responsive design
- ✅ Student dashboard

### Admin Features
- ✅ Student management (CRUD)
- ✅ Course management (CRUD)
- ✅ Grade management with auto GPA calculation
- ✅ Admin dashboard with statistics
- ✅ Protected admin routes

### Technical Features
- ✅ React Context API for state management
- ✅ React Router for navigation
- ✅ localStorage for data persistence
- ✅ Custom hooks for reusable logic
- ✅ Protected routes for authentication
- ✅ RTL/LTR support

---

## Conclusion

The Student Portal System successfully demonstrates a complete frontend application using modern React development practices. The system provides a robust, user-friendly interface for managing student academic information with full bilingual support and responsive design. The use of localStorage for data persistence allows the application to function without a backend, making it ideal for demonstration and educational purposes.

The modular architecture and component-based design ensure maintainability and scalability. Future enhancements could include integration with a real backend API, additional features like course registration, fee management, and enhanced reporting capabilities.

---

**End of Report**

