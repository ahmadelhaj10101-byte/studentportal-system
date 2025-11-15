import { useState, useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { libraryResources } from '../data/library'

// وظيفة: صفحة المكتبة الرقمية - عرض الموارد التعليمية
function LibraryPage() {
  const { t, language } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  // الحصول على الفئات والأنواع
  const categories = useMemo(() => {
    const cats = new Set(libraryResources.map(r => r.category))
    return Array.from(cats)
  }, [])

  const types = useMemo(() => {
    const typesSet = new Set(libraryResources.map(r => r.type))
    return Array.from(typesSet)
  }, [])

  // فلترة الموارد
  const filteredResources = useMemo(() => {
    return libraryResources.filter(resource => {
      const matchesSearch = 
        (language === 'ar' ? resource.title : resource.titleEn)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (language === 'ar' ? resource.author : resource.authorEn)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
      const matchesType = selectedType === 'all' || resource.type === selectedType
      
      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchTerm, selectedCategory, selectedType, language])

  const getTypeIcon = (type) => {
    switch(type) {
      case 'book': return '📚'
      case 'article': return '📄'
      case 'video': return '🎥'
      case 'document': return '📑'
      default: return '📖'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('library.title')}
        </h1>

        {/* البحث والفلترة */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('library.searchResources')}
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('common.search')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('library.categories')}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{t('library.allCategories')}</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('library.type')}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{t('common.all')}</option>
                <option value="book">{t('library.books')}</option>
                <option value="article">{t('library.articles')}</option>
                <option value="video">{t('library.videos')}</option>
                <option value="document">{t('library.documents')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* قائمة الموارد */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{getTypeIcon(resource.type)}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {language === 'ar' ? resource.title : resource.titleEn}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('library.author')}: {language === 'ar' ? resource.author : resource.authorEn}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {language === 'ar' ? resource.description : resource.descriptionEn}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>{t('library.publishedDate')}: {resource.publishedDate}</span>
                <span>⭐ {resource.rating}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {resource.downloads} {t('library.download')}
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">
                    {t('library.view')}
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold">
                    {t('library.download')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('library.noResources')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LibraryPage

