import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useAuth } from '../contexts/AuthContext'
import { students } from '../data/students'
import { Link } from 'react-router-dom'

// وظيفة: لوحة تحكم المدير - عرض إحصائيات وإدارة النظام
function AdminDashboard() {
  const { t, language } = useTranslation()
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t('admin.dashboard')}
          </h1>
          <p className="text-gray-600">
            {t('admin.welcome')}, {language === 'ar' ? user?.name : user?.nameEn}
          </p>
        </div>

        {/* بطاقات الإدارة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            to="/admin/students"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t('admin.manageStudents')}
            </h3>
            <p className="text-gray-600">
              {students.length} {t('admin.students')}
            </p>
          </Link>

          <Link
            to="/admin/courses"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t('admin.manageCourses')}
            </h3>
            <p className="text-gray-600">
              {t('admin.addEditCourses')}
            </p>
          </Link>

          <Link
            to="/admin/grades"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t('admin.manageGrades')}
            </h3>
            <p className="text-gray-600">
              {t('admin.addEditGrades')}
            </p>
          </Link>
        </div>

        {/* إحصائيات سريعة */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('admin.quickStats')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-600">{t('dashboard.totalStudents')}</p>
              <p className="text-3xl font-bold text-blue-600">{students.length}</p>
            </div>
            <div>
              <p className="text-gray-600">{t('dashboard.totalCourses')}</p>
              <p className="text-3xl font-bold text-green-600">
                {new Set(students.flatMap(s => s.courses.map(c => c.code))).size}
              </p>
            </div>
            <div>
              <p className="text-gray-600">{t('dashboard.averageGPA')}</p>
              <p className="text-3xl font-bold text-purple-600">
                {(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

