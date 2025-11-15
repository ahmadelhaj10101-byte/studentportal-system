import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import StudentProfile from './pages/StudentProfile'
import Dashboard from './pages/Dashboard'
import CoursesPage from './pages/CoursesPage'
import CalendarPage from './pages/CalendarPage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import EventsPage from './pages/EventsPage'
import LibraryPage from './pages/LibraryPage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'
import StatisticsPage from './pages/StatisticsPage'
import AdminDashboard from './pages/AdminDashboard'
import ManageStudents from './pages/ManageStudents'
import ManageCourses from './pages/ManageCourses'
import ManageGrades from './pages/ManageGrades'
import StudentDashboard from './pages/StudentDashboard'

// وظيفة: المكون الرئيسي للتطبيق - إعداد التوجيه والهيكل العام
function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            {/* شريط التنقل العلوي */}
            <Navbar />
            
            {/* المحتوى الرئيسي - يتغير حسب المسار */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/student/:id" element={<StudentProfile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                
                {/* مسارات محمية - تحتاج تسجيل دخول */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/students"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <ManageStudents />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/courses"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <ManageCourses />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/grades"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <ManageGrades />
                    </ProtectedRoute>
                  }
                />
                
                {/* مسار لوحة تحكم الطالب */}
                <Route
                  path="/student/dashboard"
                  element={
                    <ProtectedRoute>
                      <StudentDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            
            {/* التذييل */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App


