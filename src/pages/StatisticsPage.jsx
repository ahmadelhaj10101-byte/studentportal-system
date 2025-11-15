import { useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { students } from '../data/students'
import { Link } from 'react-router-dom'

// وظيفة: صفحة الإحصائيات - عرض إحصائيات مفصلة عن الطلاب والمواد
function StatisticsPage() {
  const { t, language } = useTranslation()

  // إحصائيات الطلاب
  const stats = useMemo(() => {
    const totalStudents = students.length
    const totalCourses = new Set(students.flatMap(s => s.courses.map(c => c.code))).size
    const averageGPA = students.reduce((sum, s) => sum + s.gpa, 0) / students.length
    
    // توزيع المعدل التراكمي
    const gpaDistribution = {
      excellent: students.filter(s => s.gpa >= 3.5).length,
      good: students.filter(s => s.gpa >= 2.5 && s.gpa < 3.5).length,
      average: students.filter(s => s.gpa < 2.5).length
    }

    // أفضل الطلاب
    const topStudents = [...students]
      .sort((a, b) => b.gpa - a.gpa)
      .slice(0, 5)

    // توزيع حسب التخصص
    const byMajor = {}
    students.forEach(student => {
      const major = language === 'ar' ? student.major : student.majorEn
      byMajor[major] = (byMajor[major] || 0) + 1
    })

    // توزيع حسب السنة
    const byYear = {}
    students.forEach(student => {
      const year = language === 'ar' ? student.year : student.yearEn
      byYear[year] = (byYear[year] || 0) + 1
    })

    // أكثر المواد شعبية
    const courseCounts = {}
    students.forEach(student => {
      student.courses.forEach(course => {
        courseCounts[course.code] = (courseCounts[course.code] || 0) + 1
      })
    })
    const topCourses = Object.entries(courseCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)

    return {
      totalStudents,
      totalCourses,
      averageGPA: averageGPA.toFixed(2),
      gpaDistribution,
      topStudents,
      byMajor,
      byYear,
      topCourses
    }
  }, [language])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('statistics.title')}
        </h1>

        {/* إحصائيات عامة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              {t('statistics.studentsStats')}
            </h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalStudents}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              {t('statistics.coursesStats')}
            </h3>
            <p className="text-3xl font-bold text-green-600">{stats.totalCourses}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              {t('dashboard.averageGPA')}
            </h3>
            <p className="text-3xl font-bold text-purple-600">{stats.averageGPA}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* توزيع المعدل التراكمي */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('statistics.gpaDistribution')}
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">ممتاز (3.5+)</span>
                  <span className="font-semibold text-green-600">{stats.gpaDistribution.excellent}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(stats.gpaDistribution.excellent / stats.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">جيد (2.5-3.5)</span>
                  <span className="font-semibold text-yellow-600">{stats.gpaDistribution.good}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: `${(stats.gpaDistribution.good / stats.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">متوسط (&lt;2.5)</span>
                  <span className="font-semibold text-red-600">{stats.gpaDistribution.average}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${(stats.gpaDistribution.average / stats.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* أفضل الطلاب */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('statistics.topStudents')}
            </h2>
            <div className="space-y-3">
              {stats.topStudents.map((student, index) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                    <div>
                      <Link
                        to={`/student/${student.id}`}
                        className="font-semibold text-gray-800 hover:text-blue-600"
                      >
                        {language === 'ar' ? student.name : student.nameEn}
                      </Link>
                      <p className="text-sm text-gray-600">
                        {language === 'ar' ? student.major : student.majorEn}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* توزيع حسب التخصص */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('statistics.byMajor')}
            </h2>
            <div className="space-y-3">
              {Object.entries(stats.byMajor).map(([major, count]) => (
                <div key={major} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-800">{major}</span>
                  <span className="text-lg font-bold text-blue-600">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* أكثر المواد شعبية */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('statistics.topCourses')}
            </h2>
            <div className="space-y-3">
              {stats.topCourses.map(([code, count], index) => (
                <div key={code} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                    <span className="font-semibold text-gray-800">{code}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">{count} {t('services.studentsCount')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsPage

