import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { students as initialStudents } from '../data/students'

// وظيفة: صفحة إدارة المواد - إضافة وتعديل وحذف المواد
function ManageCourses() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  const [allCourses, setAllCourses] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState('')
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    nameEn: '',
    grade: '',
    credits: '',
    instructor: '',
    instructorEn: ''
  })

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // جمع جميع المواد من جميع الطلاب
    const coursesMap = new Map()
    students.forEach(student => {
      student.courses.forEach(course => {
        const key = course.code
        if (!coursesMap.has(key)) {
          coursesMap.set(key, {
            ...course,
            students: []
          })
        }
        coursesMap.get(key).students.push(student.id)
      })
    })
    setAllCourses(Array.from(coursesMap.values()))
  }, [students])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!selectedStudent) {
      alert(t('admin.selectStudent'))
      return
    }

    const student = students.find(s => s.id === parseInt(selectedStudent))
    if (!student) return

    const courseData = {
      code: formData.code,
      name: formData.name,
      nameEn: formData.nameEn,
      grade: formData.grade,
      credits: parseInt(formData.credits),
      instructor: formData.instructor,
      instructorEn: formData.instructorEn
    }

    if (editingCourse) {
      // تحديث مادة موجودة
      const updatedCourses = student.courses.map(c =>
        c.code === editingCourse.code ? courseData : c
      )
      const updated = students.map(s =>
        s.id === student.id ? { ...s, courses: updatedCourses } : s
      )
      setStudents(updated)
      localStorage.setItem('students', JSON.stringify(updated))
    } else {
      // إضافة مادة جديدة
      const updated = students.map(s =>
        s.id === student.id ? { ...s, courses: [...s.courses, courseData] } : s
      )
      setStudents(updated)
      localStorage.setItem('students', JSON.stringify(updated))
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      code: '',
      name: '',
      nameEn: '',
      grade: '',
      credits: '',
      instructor: '',
      instructorEn: ''
    })
    setEditingCourse(null)
    setSelectedStudent('')
    setShowForm(false)
  }

  const handleEdit = (course) => {
    setEditingCourse(course)
    setFormData({
      code: course.code,
      name: course.name,
      nameEn: course.nameEn,
      grade: course.grade,
      credits: course.credits.toString(),
      instructor: course.instructor || '',
      instructorEn: course.instructorEn || ''
    })
    setShowForm(true)
  }

  const handleDelete = (courseCode, studentId) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      const updated = students.map(s =>
        s.id === studentId
          ? { ...s, courses: s.courses.filter(c => c.code !== courseCode) }
          : s
      )
      setStudents(updated)
      localStorage.setItem('students', JSON.stringify(updated))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {t('admin.manageCourses')}
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {showForm ? t('common.cancel') : t('admin.addCourse')}
          </button>
        </div>

        {/* نموذج إضافة/تعديل */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {editingCourse ? t('admin.editCourse') : t('admin.addCourse')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('admin.selectStudent')}
                </label>
                <select
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  required
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('services.courseCode')}
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('services.credits')}
                  </label>
                  <input
                    type="number"
                    name="credits"
                    value={formData.credits}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('services.courseName')} (AR)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('services.courseName')} (EN)
                  </label>
                  <input
                    type="text"
                    name="nameEn"
                    value={formData.nameEn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('services.grade')}
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('admin.selectGrade')}</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('courses.instructor')} (AR)
                  </label>
                  <input
                    type="text"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  {editingCourse ? t('common.save') : t('admin.add')}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  {t('common.cancel')}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* قائمة المواد حسب الطلاب */}
        <div className="space-y-6">
          {students.map(student => (
            <div key={student.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? student.name : student.nameEn}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-right">{t('services.courseCode')}</th>
                      <th className="px-4 py-2 text-right">{t('services.courseName')}</th>
                      <th className="px-4 py-2 text-right">{t('services.grade')}</th>
                      <th className="px-4 py-2 text-right">{t('services.credits')}</th>
                      <th className="px-4 py-2 text-right">{t('common.actions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.courses.map((course, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{course.code}</td>
                        <td className="px-4 py-2">
                          {language === 'ar' ? course.name : course.nameEn}
                        </td>
                        <td className="px-4 py-2">{course.grade}</td>
                        <td className="px-4 py-2">{course.credits}</td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(course)}
                              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                            >
                              {t('common.edit')}
                            </button>
                            <button
                              onClick={() => handleDelete(course.code, student.id)}
                              className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                            >
                              {t('common.delete')}
                            </button>
                          </div>
                        </td>
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

export default ManageCourses

