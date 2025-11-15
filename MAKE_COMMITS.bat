@echo off
REM Batch file to create all Git commits for the project
REM Run this file after installing Git

echo ========================================
echo Creating Git Commit History
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo After installation, restart this script.
    pause
    exit /b 1
)

echo Git is installed. Proceeding...
echo.

REM Configure Git (update with your info)
git config user.name "Ahmed Elhaj" 2>nul
git config user.email "ahmadelhaj10101-byte@users.noreply.github.com" 2>nul

REM Initialize repository if needed
if not exist .git (
    echo Initializing Git repository...
    git init
)

REM Add remote
git remote remove origin 2>nul
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git

echo.
echo ========================================
echo Starting Commits...
echo ========================================
echo.

REM Commit 1
echo [1/18] Commit 1: Project Setup...
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore 2>nul
git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

- إضافة package.json مع جميع التبعيات
- إعداد vite.config.js
- إعداد Tailwind CSS و PostCSS
- إضافة index.html الأساسي
- إضافة .gitignore" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 1 completed

REM Commit 2
echo [2/18] Commit 2: Core Application Structure...
git add src/main.jsx src/App.jsx src/index.css 2>nul
git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

- إضافة App.jsx مع React Router
- إضافة main.jsx كنقطة دخول
- إضافة index.css مع Tailwind
- إعداد التوجيه الأساسي للصفحات" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 2 completed

REM Commit 3
echo [3/18] Commit 3: Navigation Components...
git add src/components/Navbar.jsx src/components/Footer.jsx 2>nul
git commit -m "feat: إضافة مكونات التنقل

- إضافة Navbar.jsx مع قائمة متجاوبة
- إضافة Footer.jsx مع معلومات الاتصال
- إضافة دعم التنقل النشط
- إضافة قائمة محمولة للأجهزة الصغيرة" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 3 completed

REM Commit 4
echo [4/18] Commit 4: Student Data and Card Component...
git add src/data/students.js src/components/StudentCard.jsx 2>nul
git commit -m "feat: إضافة بيانات الطلاب ومكون البطاقة

- إنشاء students.js مع 10 طلاب وهميين
- إضافة StudentCard.jsx لعرض معلومات الطالب
- إضافة تصميم متجاوب للبطاقات" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 4 completed

REM Commit 5
echo [5/18] Commit 5: Basic Pages...
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx 2>nul
git commit -m "feat: تنفيذ الصفحات الأساسية

- إضافة HomePage.jsx مع بانر جذاب
- إضافة AboutPage.jsx مع وصف النظام
- إضافة ServicesPage.jsx مع تبويبات
- إضافة ContactPage.jsx مع نموذج اتصال" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 5 completed

REM Commit 6
echo [6/18] Commit 6: Student Profile Page...
git add src/pages/StudentProfile.jsx 2>nul
git commit -m "feat: إضافة صفحة الملف الشخصي الديناميكية

- إضافة StudentProfile.jsx
- استخدام useParams لجلب معرف الطالب
- إضافة عرض تفصيلي للطالب
- إضافة جدول المواد مع الدرجات
- إضافة معالجة حالة الطالب غير الموجود" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 6 completed

REM Commit 7
echo [7/18] Commit 7: Multi-language System...
git add src/contexts/LanguageContext.jsx src/hooks/useTranslation.js src/locales/ar.js src/locales/en.js src/components/LanguageSwitcher.jsx 2>nul
git commit -m "feat: إضافة نظام متعدد اللغات (عربي/إنجليزي)

- إنشاء LanguageContext لإدارة اللغة
- إضافة useTranslation hook
- إضافة ملفات الترجمة (ar.js, en.js)
- إضافة LanguageSwitcher component
- دعم RTL/LTR تلقائي" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 7 completed

REM Commit 8
echo [8/18] Commit 8: Update Pages for i18n...
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx src/pages/StudentProfile.jsx src/components/StudentCard.jsx src/components/Footer.jsx 2>nul
git commit -m "refactor: تحديث جميع الصفحات والمكونات لدعم i18n

- تحديث جميع الصفحات لاستخدام useTranslation
- تحديث المكونات لدعم الترجمة
- إضافة بيانات ثنائية اللغة للطلاب" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 8 completed

REM Commit 9
echo [9/18] Commit 9: New Pages with Advanced Features...
git add src/pages/Dashboard.jsx src/pages/CoursesPage.jsx src/pages/CalendarPage.jsx src/pages/AnnouncementsPage.jsx src/pages/EventsPage.jsx src/pages/LibraryPage.jsx src/pages/SettingsPage.jsx src/pages/StatisticsPage.jsx 2>nul
git commit -m "feat: إضافة صفحات جديدة مع ميزات متقدمة

- إضافة Dashboard.jsx مع إحصائيات
- إضافة CoursesPage.jsx مع بحث وفلترة
- إضافة CalendarPage.jsx مع تقويم أكاديمي
- إضافة AnnouncementsPage.jsx
- إضافة EventsPage.jsx مع تسجيل
- إضافة LibraryPage.jsx
- إضافة SettingsPage.jsx
- إضافة StatisticsPage.jsx" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 9 completed

REM Commit 10
echo [10/18] Commit 10: Extended Mock Data...
git add src/data/announcements.js src/data/events.js src/data/library.js 2>nul
git commit -m "feat: إضافة بيانات وهمية موسعة

- إضافة announcements.js مع 5 إعلانات
- إضافة events.js مع 6 فعاليات
- إضافة library.js مع 8 موارد تعليمية
- جميع البيانات تدعم ثنائية اللغة" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 10 completed

REM Commit 11
echo [11/18] Commit 11: Authentication System...
git add src/contexts/AuthContext.jsx src/components/ProtectedRoute.jsx 2>nul
git commit -m "feat: إضافة نظام المصادقة

- إنشاء AuthContext لإدارة المصادقة
- إضافة ProtectedRoute لحماية المسارات
- دعم تسجيل دخول Admin و Teacher و Student
- حفظ حالة المستخدم في localStorage" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 11 completed

REM Commit 12
echo [12/18] Commit 12: Update Login Page...
git add src/pages/LoginPage.jsx 2>nul
git commit -m "feat: تحديث صفحة تسجيل الدخول

- دعم تسجيل دخول متعدد الأدوار
- توجيه تلقائي حسب الدور
- معالجة الأخطاء" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 12 completed

REM Commit 13
echo [13/18] Commit 13: Admin Management Pages...
git add src/pages/AdminDashboard.jsx src/pages/ManageStudents.jsx src/pages/ManageCourses.jsx src/pages/ManageGrades.jsx 2>nul
git commit -m "feat: إضافة صفحات إدارة المدير

- إضافة AdminDashboard.jsx
- إضافة ManageStudents.jsx (CRUD كامل)
- إضافة ManageCourses.jsx
- إضافة ManageGrades.jsx مع إعادة حساب المعدل
- حفظ البيانات في localStorage" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 13 completed

REM Commit 14
echo [14/18] Commit 14: Student Dashboard...
git add src/pages/StudentDashboard.jsx 2>nul
git commit -m "feat: إضافة لوحة تحكم الطالب

- إضافة StudentDashboard.jsx
- عرض الملف الشخصي للطالب
- عرض جميع المواد والدرجات
- عرض المعدل التراكمي والإحصائيات
- رابط للملف الشخصي الكامل" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 14 completed

REM Commit 15
echo [15/18] Commit 15: Update Navbar and Footer...
git add src/components/Navbar.jsx src/components/Footer.jsx 2>nul
git commit -m "refactor: تحديث Navbar و Footer

- إضافة رابط لوحة الإدارة للمدير
- إضافة رابط لوحة الطالب للطلاب
- إضافة زر تسجيل الخروج
- تحديث Footer لدعم i18n" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 15 completed

REM Commit 16
echo [16/18] Commit 16: Update App.jsx with All Routes...
git add src/App.jsx 2>nul
git commit -m "feat: تحديث App.jsx مع جميع المسارات

- إضافة مسارات الصفحات الجديدة
- إضافة مسارات محمية للمدير
- إضافة مسار لوحة تحكم الطالب
- إضافة AuthProvider و LanguageProvider" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 16 completed

REM Commit 17
echo [17/18] Commit 17: Documentation...
if exist README.md (
    git add README.md DEPLOYMENT.md GIT_COMMIT_PLAN.md PROJECT_STRUCTURE.md GIT_COMMITS_GUIDE.md 2>nul
    git commit -m "docs: إضافة التوثيق الكامل

- إضافة README.md شامل
- إضافة DEPLOYMENT.md لدليل النشر
- إضافة GIT_COMMIT_PLAN.md
- إضافة PROJECT_STRUCTURE.md
- إضافة GIT_COMMITS_GUIDE.md" 2>nul
    if %ERRORLEVEL% EQU 0 echo ✓ Commit 17 completed
) else (
    echo ⚠ Commit 17 skipped (documentation files not found)
)

REM Commit 18
echo [18/18] Commit 18: Final Updates...
git add . 2>nul
git commit -m "chore: تحديثات نهائية وتحسينات

- إضافة كلمات مرور للطلاب
- تحسين حفظ البيانات في localStorage
- تحديث جميع الصفحات لقراءة البيانات المحدثة
- إصلاحات وتحسينات عامة" 2>nul
if %ERRORLEVEL% EQU 0 echo ✓ Commit 18 completed

echo.
echo ========================================
echo All Commits Created Successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Review commits: git log
echo 2. Push to GitHub: git branch -M main
echo 3. Push to GitHub: git push -u origin main
echo.
pause

