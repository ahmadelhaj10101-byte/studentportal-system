import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'

// وظيفة: صفحة الاتصال - نموذج الاتصال ومعلومات الحرم الجامعي
function ContactPage() {
  const { t } = useTranslation()
  // حالات: تتبع قيم نموذج الاتصال
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // حالة: تتبع حالة إرسال النموذج
  const [isSubmitted, setIsSubmitted] = useState(false)

  // دالة: تحديث قيمة حقل في النموذج
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // دالة: معالجة إرسال النموذج (بدون خادم - فقط محاكاة)
  const handleSubmit = (e) => {
    e.preventDefault()
    // محاكاة إرسال النموذج
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // إعادة تعيين النموذج بعد 3 ثوان
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* عنوان الصفحة */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {t('contact.title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* نموذج الاتصال */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('contact.sendMessage')}
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {t('contact.successMessage')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.enterName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.enterEmail')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.enterSubject')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.enterMessage')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>

          {/* معلومات الحرم الجامعي */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('contact.campusInfo')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="ml-2">📍</span>
                  {t('contact.address')}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t('contact.addressText')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="ml-2">📞</span>
                  {t('contact.phone')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.mainPhone')}: +966 12 345 6789<br />
                  {t('contact.fax')}: +966 12 345 6790
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="ml-2">✉️</span>
                  {t('contact.email')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.generalEmail')}: info@university.edu<br />
                  {t('contact.supportEmail')}: support@university.edu
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="ml-2">🕐</span>
                  {t('contact.workingHours')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.weekdays')}: 8:00 ص - 5:00 م<br />
                  {t('contact.weekend')}: {t('contact.closed')}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {t('contact.socialMedia')}
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
                    Twitter
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
