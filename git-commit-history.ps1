# سكريبت PowerShell لإنشاء سجل Commits للمشروع
# استخدم: .\git-commit-history.ps1

# إعداد Git (إذا لم يكن معرّفاً)
git config user.name "Your Name" 2>$null
git config user.email "your.email@example.com" 2>$null

# تهيئة المستودع (إذا لم يكن معرّفاً)
if (-not (Test-Path .git)) {
    git init
}

# إضافة Remote
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
} else {
    git remote set-url origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
}

Write-Host "🚀 بدء إنشاء سجل Commits..." -ForegroundColor Green

# Commit 1: إعداد المشروع الأساسي
Write-Host "📦 Commit 1: إعداد المشروع الأساسي..." -ForegroundColor Yellow
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore
git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

- إضافة package.json مع جميع التبعيات
- إعداد vite.config.js
- إعداد Tailwind CSS و PostCSS
- إضافة index.html الأساسي
- إضافة .gitignore"

# Commit 2: إنشاء الهيكل الأساسي للتطبيق
Write-Host "📦 Commit 2: إنشاء الهيكل الأساسي..." -ForegroundColor Yellow
git add src/main.jsx src/App.jsx src/index.css
git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

- إضافة App.jsx مع React Router
- إضافة main.jsx كنقطة دخول
- إضافة index.css مع Tailwind
- إعداد التوجيه الأساسي للصفحات"

# Commit 3: إضافة مكونات التنقل
Write-Host "📦 Commit 3: إضافة مكونات التنقل..." -ForegroundColor Yellow
git add src/components/Navbar.jsx src/components/Footer.jsx
git commit -m "feat: إضافة مكونات التنقل

- إضافة Navbar.jsx مع قائمة متجاوبة
- إضافة Footer.jsx مع معلومات الاتصال
- إضافة دعم التنقل النشط
- إضافة قائمة محمولة للأجهزة الصغيرة"

# Commit 4: إضافة بيانات الطلاب ومكون البطاقة
Write-Host "📦 Commit 4: إضافة بيانات الطلاب..." -ForegroundColor Yellow
git add src/data/students.js src/components/StudentCard.jsx
git commit -m "feat: إضافة بيانات الطلاب ومكون البطاقة

- إنشاء students.js مع 10 طلاب وهميين
- إضافة StudentCard.jsx لعرض معلومات الطالب
- إضافة تصميم متجاوب للبطاقات"

# Commit 5: تنفيذ الصفحات الأساسية
Write-Host "📦 Commit 5: تنفيذ الصفحات الأساسية..." -ForegroundColor Yellow
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx
git commit -m "feat: تنفيذ الصفحات الأساسية

- إضافة HomePage.jsx مع بانر جذاب
- إضافة AboutPage.jsx مع وصف النظام
- إضافة ServicesPage.jsx مع تبويبات
- إضافة ContactPage.jsx مع نموذج اتصال"

# Commit 6: إضافة صفحة الملف الشخصي الديناميكية
Write-Host "📦 Commit 6: إضافة صفحة الملف الشخصي..." -ForegroundColor Yellow
git add src/pages/StudentProfile.jsx
git commit -m "feat: إضافة صفحة الملف الشخصي الديناميكية

- إضافة StudentProfile.jsx
- استخدام useParams لجلب معرف الطالب
- إضافة عرض تفصيلي للطالب
- إضافة جدول المواد مع الدرجات
- إضافة معالجة حالة الطالب غير الموجود"

# Commit 7: إضافة نظام متعدد اللغات
Write-Host "📦 Commit 7: إضافة نظام متعدد اللغات..." -ForegroundColor Yellow
git add src/contexts/LanguageContext.jsx src/hooks/useTranslation.js src/locales/ar.js src/locales/en.js src/components/LanguageSwitcher.jsx
git commit -m "feat: إضافة نظام متعدد اللغات (عربي/إنجليزي)

- إنشاء LanguageContext لإدارة اللغة
- إضافة useTranslation hook
- إضافة ملفات الترجمة (ar.js, en.js)
- إضافة LanguageSwitcher component
- دعم RTL/LTR تلقائي"

# Commit 8: تحديث جميع الصفحات لدعم i18n
Write-Host "📦 Commit 8: تحديث الصفحات لدعم i18n..." -ForegroundColor Yellow
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx src/pages/StudentProfile.jsx src/components/StudentCard.jsx src/components/Footer.jsx
git commit -m "refactor: تحديث جميع الصفحات والمكونات لدعم i18n

- تحديث جميع الصفحات لاستخدام useTranslation
- تحديث المكونات لدعم الترجمة
- إضافة بيانات ثنائية اللغة للطلاب"

# Commit 9: إضافة صفحات جديدة
Write-Host "📦 Commit 9: إضافة صفحات جديدة..." -ForegroundColor Yellow
git add src/pages/Dashboard.jsx src/pages/CoursesPage.jsx src/pages/CalendarPage.jsx src/pages/AnnouncementsPage.jsx src/pages/EventsPage.jsx src/pages/LibraryPage.jsx src/pages/SettingsPage.jsx src/pages/StatisticsPage.jsx
git commit -m "feat: إضافة صفحات جديدة مع ميزات متقدمة

- إضافة Dashboard.jsx مع إحصائيات
- إضافة CoursesPage.jsx مع بحث وفلترة
- إضافة CalendarPage.jsx مع تقويم أكاديمي
- إضافة AnnouncementsPage.jsx
- إضافة EventsPage.jsx مع تسجيل
- إضافة LibraryPage.jsx
- إضافة SettingsPage.jsx
- إضافة StatisticsPage.jsx"

# Commit 10: إضافة بيانات موسعة
Write-Host "📦 Commit 10: إضافة بيانات موسعة..." -ForegroundColor Yellow
git add src/data/announcements.js src/data/events.js src/data/library.js
git commit -m "feat: إضافة بيانات وهمية موسعة

- إضافة announcements.js مع 5 إعلانات
- إضافة events.js مع 6 فعاليات
- إضافة library.js مع 8 موارد تعليمية
- جميع البيانات تدعم ثنائية اللغة"

# Commit 11: إضافة نظام المصادقة
Write-Host "📦 Commit 11: إضافة نظام المصادقة..." -ForegroundColor Yellow
git add src/contexts/AuthContext.jsx src/components/ProtectedRoute.jsx
git commit -m "feat: إضافة نظام المصادقة

- إنشاء AuthContext لإدارة المصادقة
- إضافة ProtectedRoute لحماية المسارات
- دعم تسجيل دخول Admin و Teacher و Student
- حفظ حالة المستخدم في localStorage"

# Commit 12: تحديث صفحة تسجيل الدخول
Write-Host "📦 Commit 12: تحديث صفحة تسجيل الدخول..." -ForegroundColor Yellow
git add src/pages/LoginPage.jsx
git commit -m "feat: تحديث صفحة تسجيل الدخول

- دعم تسجيل دخول متعدد الأدوار
- توجيه تلقائي حسب الدور
- معالجة الأخطاء"

# Commit 13: إضافة صفحات إدارة المدير
Write-Host "📦 Commit 13: إضافة صفحات إدارة المدير..." -ForegroundColor Yellow
git add src/pages/AdminDashboard.jsx src/pages/ManageStudents.jsx src/pages/ManageCourses.jsx src/pages/ManageGrades.jsx
git commit -m "feat: إضافة صفحات إدارة المدير

- إضافة AdminDashboard.jsx
- إضافة ManageStudents.jsx (CRUD كامل)
- إضافة ManageCourses.jsx
- إضافة ManageGrades.jsx مع إعادة حساب المعدل
- حفظ البيانات في localStorage"

# Commit 14: إضافة لوحة تحكم الطالب
Write-Host "📦 Commit 14: إضافة لوحة تحكم الطالب..." -ForegroundColor Yellow
git add src/pages/StudentDashboard.jsx
git commit -m "feat: إضافة لوحة تحكم الطالب

- إضافة StudentDashboard.jsx
- عرض الملف الشخصي للطالب
- عرض جميع المواد والدرجات
- عرض المعدل التراكمي والإحصائيات
- رابط للملف الشخصي الكامل"

# Commit 15: تحديث Navbar و Footer
Write-Host "📦 Commit 15: تحديث Navbar و Footer..." -ForegroundColor Yellow
git add src/components/Navbar.jsx src/components/Footer.jsx
git commit -m "refactor: تحديث Navbar و Footer

- إضافة رابط لوحة الإدارة للمدير
- إضافة رابط لوحة الطالب للطلاب
- إضافة زر تسجيل الخروج
- تحديث Footer لدعم i18n"

# Commit 16: تحديث App.jsx مع جميع المسارات
Write-Host "📦 Commit 16: تحديث App.jsx..." -ForegroundColor Yellow
git add src/App.jsx
git commit -m "feat: تحديث App.jsx مع جميع المسارات

- إضافة مسارات الصفحات الجديدة
- إضافة مسارات محمية للمدير
- إضافة مسار لوحة تحكم الطالب
- إضافة AuthProvider و LanguageProvider"

# Commit 17: إضافة التوثيق
Write-Host "📦 Commit 17: إضافة التوثيق..." -ForegroundColor Yellow
if (Test-Path README.md) {
    git add README.md DEPLOYMENT.md GIT_COMMIT_PLAN.md PROJECT_STRUCTURE.md 2>$null
    git commit -m "docs: إضافة التوثيق الكامل

- إضافة README.md شامل
- إضافة DEPLOYMENT.md لدليل النشر
- إضافة GIT_COMMIT_PLAN.md
- إضافة PROJECT_STRUCTURE.md"
}

# Commit 18: تحديثات نهائية
Write-Host "📦 Commit 18: تحديثات نهائية..." -ForegroundColor Yellow
git add .
git commit -m "chore: تحديثات نهائية وتحسينات

- إضافة كلمات مرور للطلاب
- تحسين حفظ البيانات في localStorage
- تحديث جميع الصفحات لقراءة البيانات المحدثة
- إصلاحات وتحسينات عامة"

Write-Host "`n✅ تم إنشاء جميع الـ Commits بنجاح!" -ForegroundColor Green
Write-Host "📤 الآن يمكنك رفع التغييرات إلى GitHub:" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White

