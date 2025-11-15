# خطة Commits للمشروع - Student Portal

هذه خطة مقترحة لـ 10 commits ذات معنى لتتبع تطور المشروع بشكل منظم.

## 📝 خطة الـ Commits

### Commit 1: Initial project setup
```bash
git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

- إضافة package.json مع جميع التبعيات
- إعداد vite.config.js
- إعداد Tailwind CSS و PostCSS
- إضافة index.html الأساسي
- إضافة .gitignore"
```

### Commit 2: Core application structure
```bash
git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

- إضافة App.jsx مع React Router
- إضافة main.jsx كنقطة دخول
- إضافة index.css مع Tailwind
- إعداد التوجيه الأساسي للصفحات"
```

### Commit 3: Navigation components
```bash
git commit -m "feat: إضافة مكونات التنقل

- إضافة Navbar.jsx مع قائمة متجاوبة
- إضافة Footer.jsx مع معلومات الاتصال
- إضافة دعم التنقل النشط
- إضافة قائمة محمولة للأجهزة الصغيرة"
```

### Commit 4: Student data and card component
```bash
git commit -m "feat: إضافة بيانات الطلاب ومكون البطاقة

- إنشاء students.js مع 5 طلاب وهميين
- إضافة StudentCard.jsx لعرض معلومات الطالب
- إضافة تصميم متجاوب للبطاقات"
```

### Commit 5: Home page implementation
```bash
git commit -m "feat: تنفيذ الصفحة الرئيسية

- إضافة HomePage.jsx مع بانر جذاب
- إضافة قسم الطلاب المميزين
- إضافة قسم المميزات السريعة
- إضافة تصميم متجاوب كامل"
```

### Commit 6: About page implementation
```bash
git commit -m "feat: تنفيذ صفحة من نحن

- إضافة AboutPage.jsx
- إضافة وصف النظام
- إضافة الرسالة والرؤية
- إضافة قسم القيم"
```

### Commit 7: Services page with tabs
```bash
git commit -m "feat: تنفيذ صفحة الخدمات مع التبويبات

- إضافة ServicesPage.jsx
- إضافة تبويبات (طلاب، مواد، درجات)
- إضافة عرض جدول للدرجات
- إضافة عرض قائمة المواد"
```

### Commit 8: Contact page with form
```bash
git commit -m "feat: تنفيذ صفحة الاتصال

- إضافة ContactPage.jsx
- إضافة نموذج اتصال مع التحقق
- إضافة معلومات الحرم الجامعي
- إضافة معالجة إرسال النموذج (وهمي)"
```

### Commit 9: Dynamic student profile page
```bash
git commit -m "feat: إضافة صفحة الملف الشخصي الديناميكية

- إضافة StudentProfile.jsx
- استخدام useParams لجلب معرف الطالب
- إضافة عرض تفصيلي للطالب
- إضافة جدول المواد مع الدرجات
- إضافة معالجة حالة الطالب غير الموجود"
```

### Commit 10: Documentation and final touches
```bash
git commit -m "docs: إضافة التوثيق الكامل

- إضافة README.md شامل
- إضافة DEPLOYMENT.md لدليل النشر
- إضافة GIT_COMMIT_PLAN.md
- إضافة تعليقات عربية في جميع الملفات
- تحسينات نهائية على التصميم"
```

---

## 🚀 كيفية تنفيذ الـ Commits

### الطريقة الموصى بها:

1. **إنشاء المستودع**:
   ```bash
   git init
   git remote add origin <your-repo-url>
   ```

2. **تنفيذ الـ Commits بالترتيب**:
   ```bash
   # Commit 1
   git add package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore
   git commit -m "feat: إعداد المشروع الأساسي مع Vite و React

   - إضافة package.json مع جميع التبعيات
   - إعداد vite.config.js
   - إعداد Tailwind CSS و PostCSS
   - إضافة index.html الأساسي
   - إضافة .gitignore"

   # Commit 2
   git add src/main.jsx src/App.jsx src/index.css
   git commit -m "feat: إنشاء الهيكل الأساسي للتطبيق

   - إضافة App.jsx مع React Router
   - إضافة main.jsx كنقطة دخول
   - إضافة index.css مع Tailwind
   - إعداد التوجيه الأساسي للصفحات"

   # ... وهكذا للبقية
   ```

3. **رفع التغييرات**:
   ```bash
   git push -u origin main
   ```

---

## 📋 ملاحظات إضافية

### أفضل الممارسات:

- ✅ استخدم رسائل commit واضحة ووصفية
- ✅ استخدم البادئات: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- ✅ اكتب رسالة commit بالعربية (أو الإنجليزية حسب تفضيلك)
- ✅ أضف تفاصيل في جسم الرسالة عند الحاجة
- ✅ التزم بترتيب منطقي للـ commits

### أنواع الـ Commits المستخدمة:

- `feat:` - ميزة جديدة
- `docs:` - تغييرات في التوثيق
- `style:` - تغييرات في التنسيق (لا تؤثر على الكود)
- `refactor:` - إعادة هيكلة الكود
- `fix:` - إصلاح خطأ

---

## 🔄 تحديثات مستقبلية

بعد إكمال الـ 10 commits الأساسية، يمكنك إضافة commits إضافية مثل:

- `feat: إضافة بحث في قائمة الطلاب`
- `feat: إضافة فلترة حسب التخصص`
- `style: تحسين التصميم والألوان`
- `fix: إصلاح مشكلة في التجاوب`
- `refactor: تحسين أداء المكونات`

---

**نصيحة**: استخدم هذه الخطة كدليل، ويمكنك تعديلها حسب احتياجات مشروعك.


