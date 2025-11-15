import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { students as initialStudents } from '../data/students'
import StudentCard from '../components/StudentCard'
import { Link } from 'react-router-dom'

// وظيفة: صفحة إدارة الطلاب - عرض وإضافة وتعديل وحذف الطلاب
function ManageStudents() {
  const { t, language } = useTranslation()
  const [students, setStudents] = useState(initialStudents)
  const [showForm, setShowForm] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    major: '',
    majorEn: '',
    email: '',
    password: 'student123',
    phone: '',
    year: '',
    yearEn: '',
    gpa: '',
    courses: []
  })

  // تحميل الطلاب من localStorage عند التحميل
  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) {
      setStudents(JSON.parse(saved))
    }
  }, [])

  // حفظ الطلاب في localStorage عند التغيير
  const saveStudents = (updatedStudents) => {
    setStudents(updatedStudents)
    localStorage.setItem('students', JSON.stringify(updatedStudents))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingStudent) {
      // تحديث طالب موجود
      const updated = students.map(s => 
        s.id === editingStudent.id 
          ? { ...formData, id: editingStudent.id, gpa: parseFloat(formData.gpa), courses: formData.courses || editingStudent.courses }
          : s
      )
      saveStudents(updated)
    } else {
      // إضافة طالب جديد
      const newStudent = {
        ...formData,
        id: Math.max(...students.map(s => s.id), 0) + 1,
        gpa: parseFloat(formData.gpa),
        courses: formData.courses || []
      }
      saveStudents([...students, newStudent])
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: '',
      nameEn: '',
      major: '',
      majorEn: '',
      email: '',
      password: 'student123',
      phone: '',
      year: '',
      yearEn: '',
      gpa: '',
      courses: []
    })
    setEditingStudent(null)
    setShowForm(false)
  }

  const handleEdit = (student) => {
    setEditingStudent(student)
    setFormData({
      name: student.name,
      nameEn: student.nameEn,
      major: student.major,
      majorEn: student.majorEn,
      email: student.email,
      password: student.password || 'student123',
      phone: student.phone,
      year: student.year,
      yearEn: student.yearEn,
      gpa: student.gpa.toString(),
      courses: student.courses
    })
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      saveStudents(students.filter(s => s.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {t('admin.manageStudents')}
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {showForm ? t('common.cancel') : t('admin.addStudent')}
          </button>
        </div>

        {/* نموذج إضافة/تعديل */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {editingStudent ? t('admin.editStudent') : t('admin.addStudent')}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('common.name')} (AR)
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
                  {t('common.name')} (EN)
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
                  {t('services.major')} (AR)
                </label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('services.major')} (EN)
                </label>
                <input
                  type="text"
                  name="majorEn"
                  value={formData.majorEn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('common.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('login.password')}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="student123"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('common.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('profile.year')} (AR)
                </label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('services.gpa')}
                </label>
                <input
                  type="number"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  min="0"
                  max="4"
                  step="0.01"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  {editingStudent ? t('common.save') : t('admin.add')}
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

        {/* قائمة الطلاب */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div key={student.id} className="relative">
              <StudentCard student={student} />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(student)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  {t('common.edit')}
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  {t('common.delete')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageStudents

