import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: بطاقة عرض معلومات الطالب - تستخدم لعرض ملخص بيانات الطالب
// props: student - كائن يحتوي على بيانات الطالب
function StudentCard({ student }) {
  const { t, language } = useTranslation()

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* اسم الطالب */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {language === 'ar' ? student.name : student.nameEn}
        </h3>
        
        {/* التخصص */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">{t('services.major')}:</span>{' '}
          {language === 'ar' ? student.major : student.majorEn}
        </p>
        
        {/* المعدل التراكمي */}
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-semibold mr-2">{t('services.gpa')}:</span>
          <span className={`text-lg font-bold ${
            student.gpa >= 3.5 ? 'text-green-600' : 
            student.gpa >= 2.5 ? 'text-yellow-600' : 
            'text-red-600'
          }`}>
            {student.gpa.toFixed(2)}
          </span>
        </div>
        
        {/* عدد المواد */}
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">{t('services.coursesCount')}:</span> {student.courses.length}
        </p>
        
        {/* زر عرض الملف الشخصي */}
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

export default StudentCard
