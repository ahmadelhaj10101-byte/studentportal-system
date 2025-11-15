import { useTranslation } from '../hooks/useTranslation'

// وظيفة: صفحة من نحن - تحتوي على وصف النظام والرؤية والرسالة
function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* بانر الصفحة */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* وصف النظام */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t('about.description')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('about.descriptionText')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.descriptionText2')}
              </p>
            </div>

            {/* الرسالة */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t('about.mission')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>

            {/* الرؤية */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t('about.vision')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('about.visionText')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.visionText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم القيم */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('about.values')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('about.accuracy')}
              </h3>
              <p className="text-gray-600">
                {t('about.accuracyDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('about.speed')}
              </h3>
              <p className="text-gray-600">
                {t('about.speedDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {t('about.security')}
              </h3>
              <p className="text-gray-600">
                {t('about.securityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
