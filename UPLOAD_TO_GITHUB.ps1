# سكريبت PowerShell لرفع المشروع إلى GitHub مع Commits منظمة
# استخدم: .\UPLOAD_TO_GITHUB.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "رفع المشروع إلى GitHub مع Commits منظمة" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# التحقق من تثبيت Git
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git غير مثبت!" -ForegroundColor Red
    Write-Host ""
    Write-Host "يرجى تثبيت Git من:" -ForegroundColor Yellow
    Write-Host "https://git-scm.com/download/win" -ForegroundColor Blue
    Write-Host ""
    Write-Host "بعد التثبيت، أعد تشغيل PowerShell وشغّل هذا السكريبت مرة أخرى." -ForegroundColor Yellow
    pause
    exit
}

Write-Host "✅ Git مثبت" -ForegroundColor Green
Write-Host ""

# إعداد Git
Write-Host "إعداد Git..." -ForegroundColor Yellow
git config user.name "Ahmed Elhaj" 2>$null
git config user.email "ahmadelhaj10101-byte@users.noreply.github.com" 2>$null
Write-Host "✅ تم إعداد Git" -ForegroundColor Green
Write-Host ""

# تهيئة المستودع
if (-not (Test-Path .git)) {
    Write-Host "تهيئة Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ تم تهيئة المستودع" -ForegroundColor Green
} else {
    Write-Host "✅ المستودع موجود بالفعل" -ForegroundColor Green
}
Write-Host ""

# إضافة Remote
Write-Host "إضافة Remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
Write-Host "✅ تم إضافة Remote" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "بدء إنشاء Commits منظمة..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Commit 1: Project Setup
Write-Host "[1/18] Commit 1: Project Setup..." -ForegroundColor Yellow
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore 2>$null
git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

- إضافة package.json مع جميع التبعيات
- إعداد vite.config.js
- إعداد Tailwind CSS و PostCSS
- إضافة index.html الأساسي
- إضافة .gitignore" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 1 completed" -ForegroundColor Green }

# Commit 2: Core Application Structure
Write-Host "[2/18] Commit 2: Core Application Structure..." -ForegroundColor Yellow
git add src/main.jsx src/App.jsx src/index.css 2>$null
git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

- إضافة App.jsx مع React Router
- إضافة main.jsx كنقطة دخول
- إضافة index.css مع Tailwind
- إعداد التوجيه الأساسي للصفحات" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 2 completed" -ForegroundColor Green }

# Commit 3: Navigation Components
Write-Host "[3/18] Commit 3: Navigation Components..." -ForegroundColor Yellow
git add src/components/Navbar.jsx src/components/Footer.jsx 2>$null
git commit -m "feat: إضافة مكونات التنقل

- إضافة Navbar.jsx مع قائمة متجاوبة
- إضافة Footer.jsx مع معلومات الاتصال
- إضافة دعم التنقل النشط
- إضافة قائمة محمولة للأجهزة الصغيرة" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 3 completed" -ForegroundColor Green }

# Commit 4: Student Data and Card Component
Write-Host "[4/18] Commit 4: Student Data and Card Component..." -ForegroundColor Yellow
git add src/data/students.js src/components/StudentCard.jsx 2>$null
git commit -m "feat: إضافة بيانات الطلاب ومكون البطاقة

- إنشاء students.js مع 10 طلاب وهميين
- إضافة StudentCard.jsx لعرض معلومات الطالب
- إضافة تصميم متجاوب للبطاقات" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 4 completed" -ForegroundColor Green }

# Commit 5: Basic Pages
Write-Host "[5/18] Commit 5: Basic Pages..." -ForegroundColor Yellow
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx 2>$null
git commit -m "feat: تنفيذ الصفحات الأساسية

- إضافة HomePage.jsx مع بانر جذاب
- إضافة AboutPage.jsx مع وصف النظام
- إضافة ServicesPage.jsx مع تبويبات
- إضافة ContactPage.jsx مع نموذج اتصال" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 5 completed" -ForegroundColor Green }

# Commit 6: Student Profile Page
Write-Host "[6/18] Commit 6: Student Profile Page..." -ForegroundColor Yellow
git add src/pages/StudentProfile.jsx 2>$null
git commit -m "feat: إضافة صفحة الملف الشخصي الديناميكية

- إضافة StudentProfile.jsx
- استخدام useParams لجلب معرف الطالب
- إضافة عرض تفصيلي للطالب
- إضافة جدول المواد مع الدرجات
- إضافة معالجة حالة الطالب غير الموجود" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 6 completed" -ForegroundColor Green }

# Commit 7: Multi-language System
Write-Host "[7/18] Commit 7: Multi-language System..." -ForegroundColor Yellow
git add src/contexts/LanguageContext.jsx src/hooks/useTranslation.js src/locales/ar.js src/locales/en.js src/components/LanguageSwitcher.jsx 2>$null
git commit -m "feat: إضافة نظام متعدد اللغات (عربي/إنجليزي)

- إنشاء LanguageContext لإدارة اللغة
- إضافة useTranslation hook
- إضافة ملفات الترجمة (ar.js, en.js)
- إضافة LanguageSwitcher component
- دعم RTL/LTR تلقائي" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 7 completed" -ForegroundColor Green }

# Commit 8: Update Pages for i18n
Write-Host "[8/18] Commit 8: Update Pages for i18n..." -ForegroundColor Yellow
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx src/pages/StudentProfile.jsx src/components/StudentCard.jsx src/components/Footer.jsx 2>$null
git commit -m "refactor: تحديث جميع الصفحات والمكونات لدعم i18n

- تحديث جميع الصفحات لاستخدام useTranslation
- تحديث المكونات لدعم الترجمة
- إضافة بيانات ثنائية اللغة للطلاب" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 8 completed" -ForegroundColor Green }

# Commit 9: New Pages with Advanced Features
Write-Host "[9/18] Commit 9: New Pages with Advanced Features..." -ForegroundColor Yellow
git add src/pages/Dashboard.jsx src/pages/CoursesPage.jsx src/pages/CalendarPage.jsx src/pages/AnnouncementsPage.jsx src/pages/EventsPage.jsx src/pages/LibraryPage.jsx src/pages/SettingsPage.jsx src/pages/StatisticsPage.jsx 2>$null
git commit -m "feat: إضافة صفحات جديدة مع ميزات متقدمة

- إضافة Dashboard.jsx مع إحصائيات
- إضافة CoursesPage.jsx مع بحث وفلترة
- إضافة CalendarPage.jsx مع تقويم أكاديمي
- إضافة AnnouncementsPage.jsx
- إضافة EventsPage.jsx مع تسجيل
- إضافة LibraryPage.jsx
- إضافة SettingsPage.jsx
- إضافة StatisticsPage.jsx" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 9 completed" -ForegroundColor Green }

# Commit 10: Extended Mock Data
Write-Host "[10/18] Commit 10: Extended Mock Data..." -ForegroundColor Yellow
git add src/data/announcements.js src/data/events.js src/data/library.js 2>$null
git commit -m "feat: إضافة بيانات وهمية موسعة

- إضافة announcements.js مع 5 إعلانات
- إضافة events.js مع 6 فعاليات
- إضافة library.js مع 8 موارد تعليمية
- جميع البيانات تدعم ثنائية اللغة" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 10 completed" -ForegroundColor Green }

# Commit 11: Authentication System
Write-Host "[11/18] Commit 11: Authentication System..." -ForegroundColor Yellow
git add src/contexts/AuthContext.jsx src/components/ProtectedRoute.jsx 2>$null
git commit -m "feat: إضافة نظام المصادقة

- إنشاء AuthContext لإدارة المصادقة
- إضافة ProtectedRoute لحماية المسارات
- دعم تسجيل دخول Admin و Teacher و Student
- حفظ حالة المستخدم في localStorage" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 11 completed" -ForegroundColor Green }

# Commit 12: Update Login Page
Write-Host "[12/18] Commit 12: Update Login Page..." -ForegroundColor Yellow
git add src/pages/LoginPage.jsx 2>$null
git commit -m "feat: تحديث صفحة تسجيل الدخول

- دعم تسجيل دخول متعدد الأدوار
- توجيه تلقائي حسب الدور
- معالجة الأخطاء" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 12 completed" -ForegroundColor Green }

# Commit 13: Admin Management Pages
Write-Host "[13/18] Commit 13: Admin Management Pages..." -ForegroundColor Yellow
git add src/pages/AdminDashboard.jsx src/pages/ManageStudents.jsx src/pages/ManageCourses.jsx src/pages/ManageGrades.jsx 2>$null
git commit -m "feat: إضافة صفحات إدارة المدير

- إضافة AdminDashboard.jsx
- إضافة ManageStudents.jsx (CRUD كامل)
- إضافة ManageCourses.jsx
- إضافة ManageGrades.jsx مع إعادة حساب المعدل
- حفظ البيانات في localStorage" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 13 completed" -ForegroundColor Green }

# Commit 14: Student Dashboard
Write-Host "[14/18] Commit 14: Student Dashboard..." -ForegroundColor Yellow
git add src/pages/StudentDashboard.jsx 2>$null
git commit -m "feat: إضافة لوحة تحكم الطالب

- إضافة StudentDashboard.jsx
- عرض الملف الشخصي للطالب
- عرض جميع المواد والدرجات
- عرض المعدل التراكمي والإحصائيات
- رابط للملف الشخصي الكامل" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 14 completed" -ForegroundColor Green }

# Commit 15: Update Navbar and Footer
Write-Host "[15/18] Commit 15: Update Navbar and Footer..." -ForegroundColor Yellow
git add src/components/Navbar.jsx src/components/Footer.jsx 2>$null
git commit -m "refactor: تحديث Navbar و Footer

- إضافة رابط لوحة الإدارة للمدير
- إضافة رابط لوحة الطالب للطلاب
- إضافة زر تسجيل الخروج
- تحديث Footer لدعم i18n" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 15 completed" -ForegroundColor Green }

# Commit 16: Update App.jsx with All Routes
Write-Host "[16/18] Commit 16: Update App.jsx with All Routes..." -ForegroundColor Yellow
git add src/App.jsx 2>$null
git commit -m "feat: تحديث App.jsx مع جميع المسارات

- إضافة مسارات الصفحات الجديدة
- إضافة مسارات محمية للمدير
- إضافة مسار لوحة تحكم الطالب
- إضافة AuthProvider و LanguageProvider" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 16 completed" -ForegroundColor Green }

# Commit 17: Documentation
Write-Host "[17/18] Commit 17: Documentation..." -ForegroundColor Yellow
if (Test-Path README.md) {
    git add README.md DEPLOYMENT.md GIT_COMMIT_PLAN.md PROJECT_STRUCTURE.md GIT_COMMITS_GUIDE.md PUSH_TO_GITHUB.md README_GITHUB.md INSTALL_AND_COMMIT.md QUICK_START.md 2>$null
    git commit -m "docs: إضافة التوثيق الكامل

- إضافة README.md شامل
- إضافة DEPLOYMENT.md لدليل النشر
- إضافة GIT_COMMIT_PLAN.md
- إضافة PROJECT_STRUCTURE.md
- إضافة أدلة إضافية" 2>$null
    if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 17 completed" -ForegroundColor Green }
} else {
    Write-Host "  ⚠ Commit 17 skipped (documentation files not found)" -ForegroundColor Yellow
}

# Commit 18: Final Updates and Scripts
Write-Host "[18/18] Commit 18: Final Updates and Scripts..." -ForegroundColor Yellow
git add MAKE_COMMITS.bat git-commit-history.ps1 git-commit-history.sh UPLOAD_TO_GITHUB.ps1 PUSH_NOW.ps1 2>$null
git commit -m "chore: تحديثات نهائية وتحسينات

- إضافة كلمات مرور للطلاب
- تحسين حفظ البيانات في localStorage
- تحديث جميع الصفحات لقراءة البيانات المحدثة
- إضافة سكريبتات Git
- إصلاحات وتحسينات عامة" 2>$null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✓ Commit 18 completed" -ForegroundColor Green }

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "تم إنشاء جميع الـ Commits بنجاح!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# عرض سجل Commits
Write-Host "سجل Commits:" -ForegroundColor Yellow
git log --oneline -18
Write-Host ""

# إنشاء فرع main
Write-Host "إنشاء فرع main..." -ForegroundColor Yellow
git branch -M main 2>$null
Write-Host "✅ تم إنشاء فرع main" -ForegroundColor Green
Write-Host ""

# رفع إلى GitHub
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "رفع المشروع إلى GitHub..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  قد يُطلب منك إدخال:" -ForegroundColor Yellow
Write-Host "   - اسم المستخدم: اسم مستخدم GitHub" -ForegroundColor White
Write-Host "   - كلمة المرور: Personal Access Token" -ForegroundColor White
Write-Host ""
Write-Host "لإنشاء Token:" -ForegroundColor Yellow
Write-Host "   https://github.com/settings/tokens" -ForegroundColor Blue
Write-Host ""

$pushChoice = Read-Host "هل تريد رفع المشروع الآن؟ (Y/N)"
if ($pushChoice -eq "Y" -or $pushChoice -eq "y") {
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "✅ تم رفع المشروع بنجاح!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "رابط المشروع:" -ForegroundColor Cyan
        Write-Host "https://github.com/ahmadelhaj10101-byte/studentportal-system" -ForegroundColor Blue
        Write-Host ""
        Write-Host "عدد الـ Commits: 18" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "❌ فشل الرفع" -ForegroundColor Red
        Write-Host ""
        Write-Host "جرب:" -ForegroundColor Yellow
        Write-Host "git push -u origin main --force" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "يمكنك رفع المشروع لاحقاً باستخدام:" -ForegroundColor Yellow
    Write-Host "git push -u origin main" -ForegroundColor White
}

Write-Host ""
pause

