# دليل إنشاء سجل Commits على GitHub

هذا الدليل يوضح كيفية إنشاء سجل commits منظم للمشروع على GitHub.

## 📋 المتطلبات

1. تثبيت Git على النظام
2. حساب GitHub
3. المستودع: https://github.com/ahmadelhaj10101-byte/studentportal-system.git

## 🚀 الخطوات

### الطريقة 1: استخدام السكريبت (موصى بها)

#### على Windows (PowerShell):
```powershell
.\git-commit-history.ps1
```

#### على Linux/Mac:
```bash
bash git-commit-history.sh
```

### الطريقة 2: تنفيذ الأوامر يدوياً

#### 1. تهيئة Git (إذا لم يكن معرّفاً)
```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

#### 2. إضافة Remote
```bash
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
```

#### 3. تنفيذ الـ Commits بالترتيب

**Commit 1: إعداد المشروع الأساسي**
```bash
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore
git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

- إضافة package.json مع جميع التبعيات
- إعداد vite.config.js
- إعداد Tailwind CSS و PostCSS
- إضافة index.html الأساسي
- إضافة .gitignore"
```

**Commit 2: إنشاء الهيكل الأساسي**
```bash
git add src/main.jsx src/App.jsx src/index.css
git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

- إضافة App.jsx مع React Router
- إضافة main.jsx كنقطة دخول
- إضافة index.css مع Tailwind
- إعداد التوجيه الأساسي للصفحات"
```

**Commit 3: إضافة مكونات التنقل**
```bash
git add src/components/Navbar.jsx src/components/Footer.jsx
git commit -m "feat: إضافة مكونات التنقل

- إضافة Navbar.jsx مع قائمة متجاوبة
- إضافة Footer.jsx مع معلومات الاتصال
- إضافة دعم التنقل النشط
- إضافة قائمة محمولة للأجهزة الصغيرة"
```

**Commit 4: إضافة بيانات الطلاب**
```bash
git add src/data/students.js src/components/StudentCard.jsx
git commit -m "feat: إضافة بيانات الطلاب ومكون البطاقة

- إنشاء students.js مع 10 طلاب وهميين
- إضافة StudentCard.jsx لعرض معلومات الطالب
- إضافة تصميم متجاوب للبطاقات"
```

**Commit 5: تنفيذ الصفحات الأساسية**
```bash
git add src/pages/HomePage.jsx src/pages/AboutPage.jsx src/pages/ServicesPage.jsx src/pages/ContactPage.jsx
git commit -m "feat: تنفيذ الصفحات الأساسية

- إضافة HomePage.jsx مع بانر جذاب
- إضافة AboutPage.jsx مع وصف النظام
- إضافة ServicesPage.jsx مع تبويبات
- إضافة ContactPage.jsx مع نموذج اتصال"
```

**Commit 6: إضافة صفحة الملف الشخصي**
```bash
git add src/pages/StudentProfile.jsx
git commit -m "feat: إضافة صفحة الملف الشخصي الديناميكية

- إضافة StudentProfile.jsx
- استخدام useParams لجلب معرف الطالب
- إضافة عرض تفصيلي للطالب
- إضافة جدول المواد مع الدرجات"
```

**Commit 7: إضافة نظام متعدد اللغات**
```bash
git add src/contexts/LanguageContext.jsx src/hooks/useTranslation.js src/locales/ar.js src/locales/en.js src/components/LanguageSwitcher.jsx
git commit -m "feat: إضافة نظام متعدد اللغات (عربي/إنجليزي)

- إنشاء LanguageContext لإدارة اللغة
- إضافة useTranslation hook
- إضافة ملفات الترجمة (ar.js, en.js)
- إضافة LanguageSwitcher component
- دعم RTL/LTR تلقائي"
```

**Commit 8: تحديث الصفحات لدعم i18n**
```bash
git add src/pages/*.jsx src/components/*.jsx
git commit -m "refactor: تحديث جميع الصفحات والمكونات لدعم i18n

- تحديث جميع الصفحات لاستخدام useTranslation
- تحديث المكونات لدعم الترجمة
- إضافة بيانات ثنائية اللغة للطلاب"
```

**Commit 9: إضافة صفحات جديدة**
```bash
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
```

**Commit 10: إضافة بيانات موسعة**
```bash
git add src/data/announcements.js src/data/events.js src/data/library.js
git commit -m "feat: إضافة بيانات وهمية موسعة

- إضافة announcements.js مع 5 إعلانات
- إضافة events.js مع 6 فعاليات
- إضافة library.js مع 8 موارد تعليمية
- جميع البيانات تدعم ثنائية اللغة"
```

**Commit 11: إضافة نظام المصادقة**
```bash
git add src/contexts/AuthContext.jsx src/components/ProtectedRoute.jsx
git commit -m "feat: إضافة نظام المصادقة

- إنشاء AuthContext لإدارة المصادقة
- إضافة ProtectedRoute لحماية المسارات
- دعم تسجيل دخول Admin و Teacher و Student
- حفظ حالة المستخدم في localStorage"
```

**Commit 12: تحديث صفحة تسجيل الدخول**
```bash
git add src/pages/LoginPage.jsx
git commit -m "feat: تحديث صفحة تسجيل الدخول

- دعم تسجيل دخول متعدد الأدوار
- توجيه تلقائي حسب الدور
- معالجة الأخطاء"
```

**Commit 13: إضافة صفحات إدارة المدير**
```bash
git add src/pages/AdminDashboard.jsx src/pages/ManageStudents.jsx src/pages/ManageCourses.jsx src/pages/ManageGrades.jsx
git commit -m "feat: إضافة صفحات إدارة المدير

- إضافة AdminDashboard.jsx
- إضافة ManageStudents.jsx (CRUD كامل)
- إضافة ManageCourses.jsx
- إضافة ManageGrades.jsx مع إعادة حساب المعدل
- حفظ البيانات في localStorage"
```

**Commit 14: إضافة لوحة تحكم الطالب**
```bash
git add src/pages/StudentDashboard.jsx
git commit -m "feat: إضافة لوحة تحكم الطالب

- إضافة StudentDashboard.jsx
- عرض الملف الشخصي للطالب
- عرض جميع المواد والدرجات
- عرض المعدل التراكمي والإحصائيات
- رابط للملف الشخصي الكامل"
```

**Commit 15: تحديث Navbar و Footer**
```bash
git add src/components/Navbar.jsx src/components/Footer.jsx
git commit -m "refactor: تحديث Navbar و Footer

- إضافة رابط لوحة الإدارة للمدير
- إضافة رابط لوحة الطالب للطلاب
- إضافة زر تسجيل الخروج
- تحديث Footer لدعم i18n"
```

**Commit 16: تحديث App.jsx**
```bash
git add src/App.jsx
git commit -m "feat: تحديث App.jsx مع جميع المسارات

- إضافة مسارات الصفحات الجديدة
- إضافة مسارات محمية للمدير
- إضافة مسار لوحة تحكم الطالب
- إضافة AuthProvider و LanguageProvider"
```

**Commit 17: إضافة التوثيق**
```bash
git add README.md DEPLOYMENT.md GIT_COMMIT_PLAN.md PROJECT_STRUCTURE.md
git commit -m "docs: إضافة التوثيق الكامل

- إضافة README.md شامل
- إضافة DEPLOYMENT.md لدليل النشر
- إضافة GIT_COMMIT_PLAN.md
- إضافة PROJECT_STRUCTURE.md"
```

**Commit 18: تحديثات نهائية**
```bash
git add .
git commit -m "chore: تحديثات نهائية وتحسينات

- إضافة كلمات مرور للطلاب
- تحسين حفظ البيانات في localStorage
- تحديث جميع الصفحات لقراءة البيانات المحدثة
- إصلاحات وتحسينات عامة"
```

### 4. رفع التغييرات إلى GitHub

```bash
git branch -M main
git push -u origin main
```

## 📝 ملاحظات مهمة

1. **تأكد من تثبيت Git**: إذا لم يكن مثبتاً، قم بتحميله من [git-scm.com](https://git-scm.com/)

2. **تعديل معلومات المستخدم**: قم بتعديل اسم المستخدم والبريد الإلكتروني في السكريبت

3. **التحقق من الحالة**: استخدم `git status` للتحقق من حالة المستودع

4. **عرض السجل**: استخدم `git log` لعرض سجل الـ commits

## 🔧 حل المشاكل

### إذا ظهرت رسالة "git is not recognized":
- تأكد من تثبيت Git
- أعد تشغيل Terminal/PowerShell
- تحقق من PATH

### إذا ظهرت رسالة "remote origin already exists":
- استخدم: `git remote set-url origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git`

### إذا فشل Push:
- تأكد من أن لديك صلاحيات الكتابة على المستودع
- تحقق من اتصال الإنترنت
- جرب: `git push -u origin main --force` (بحذر!)

## ✅ التحقق من النجاح

بعد رفع التغييرات، تحقق من:
- ✅ جميع الـ commits تظهر على GitHub
- ✅ جميع الملفات موجودة
- ✅ الرسائل واضحة ووصفية

---

**نصيحة**: استخدم السكريبت المرفق لتوفير الوقت وتجنب الأخطاء!

