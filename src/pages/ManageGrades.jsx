import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { students as initialStudents } from '../data/students'

// وظيفة: صفحة إدارة الدرجات - تحديث درجات الطلاب
function ManageGrades() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  const [selectedStudent, setSelectedStudent] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [newGrade, setNewGrade] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  const handleUpdateGrade = () => {
    if (!selectedStudent || !selectedCourse || !newGrade) {
      alert(t('admin.fillAllFields'))
      return
    }

    setStudents(students.map(student => {
      if (student.id === parseInt(selectedStudent)) {
        return {
          ...student,
          courses: student.courses.map(course =>
            course.code === selectedCourse
              ? { ...course, grade: newGrade }
              : course
          )
        }
      }
      return student
    }))

    // إعادة حساب المعدل التراكمي
    const student = students.find(s => s.id === parseInt(selectedStudent))
    if (student) {
      const updatedStudent = {
        ...student,
        courses: student.courses.map(c =>
          c.code === selectedCourse ? { ...c, grade: newGrade } : c
        )
      }
      
      // حساب المعدل التراكمي
      const totalPoints = updatedStudent.courses.reduce((sum, c) => {
        const gradePoints = {
          'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
          'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0
        }
        return sum + (gradePoints[c.grade] || 0) * c.credits
      }, 0)
      const totalCredits = updatedStudent.courses.reduce((sum, c) => sum + c.credits, 0)
      updatedStudent.gpa = totalCredits > 0 ? totalPoints / totalCredits : 0

      const updated = students.map(s =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
      setStudents(updated)
      localStorage.setItem('students', JSON.stringify(updated))
    }
    alert(t('admin.gradeUpdated'))
    setNewGrade('')
    setSelectedCourse('')
  }

  const selectedStudentData = students.find(s => s.id === parseInt(selectedStudent))

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('admin.manageGrades')}
        </h1>

        {/* نموذج تحديث الدرجة */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {t('admin.updateGrade')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('admin.selectStudent')}
              </label>
              <select
                value={selectedStudent}
                onChange={(e) => {
                  setSelectedStudent(e.target.value)
                  setSelectedCourse('')
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('admin.selectStudent')}</option>
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {language === 'ar' ? s.name : s.nameEn}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('admin.selectCourse')}
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                disabled={!selectedStudent}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              >
                <option value="">{t('admin.selectCourse')}</option>
                {selectedStudentData?.courses.map((course, index) => (
                  <option key={index} value={course.code}>
                    {course.code} - {language === 'ar' ? course.name : course.nameEn}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('services.grade')}
              </label>
              <select
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('admin.selectGrade')}</option>
                <option value="A">A (4.0)</option>
                <option value="A-">A- (3.7)</option>
                <option value="B+">B+ (3.3)</option>
                <option value="B">B (3.0)</option>
                <option value="B-">B- (2.7)</option>
                <option value="C+">C+ (2.3)</option>
                <option value="C">C (2.0)</option>
                <option value="C-">C- (1.7)</option>
                <option value="D">D (1.0)</option>
                <option value="F">F (0.0)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleUpdateGrade}
                className="w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {t('admin.update')}
              </button>
            </div>
          </div>
        </div>

        {/* عرض جميع الطلاب ودرجاتهم */}
        <div className="space-y-6">
          {students.map(student => (
            <div key={student.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {language === 'ar' ? student.name : student.nameEn}
                  </h3>
                  <p className="text-gray-600">
                    {t('services.gpa')}: <span className="font-bold">{student.gpa.toFixed(2)}</span>
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-right">{t('services.courseCode')}</th>
                      <th className="px-4 py-2 text-right">{t('services.courseName')}</th>
                      <th className="px-4 py-2 text-right">{t('services.grade')}</th>
                      <th className="px-4 py-2 text-right">{t('services.credits')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.courses.map((course, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{course.code}</td>
                        <td className="px-4 py-2">
                          {language === 'ar' ? course.name : course.nameEn}
                        </td>
                        <td className={`px-4 py-2 font-bold ${
                          course.grade === 'A' || course.grade === 'A-' ? 'text-green-600' :
                          course.grade === 'B+' || course.grade === 'B' ? 'text-blue-600' :
                          course.grade === 'B-' || course.grade === 'C+' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {course.grade}
                        </td>
                        <td className="px-4 py-2">{course.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageGrades

