# هيكل المشروع - Student Portal

## 📁 هيكل المجلدات والملفات

```
student-portal/
│
├── public/                          # الملفات العامة (إن وجدت)
│
├── src/                            # مجلد الكود المصدري
│   │
│   ├── components/                 # مكونات React القابلة لإعادة الاستخدام
│   │   ├── Navbar.jsx              # شريط التنقل العلوي
│   │   ├── Footer.jsx              # التذييل
│   │   └── StudentCard.jsx         # بطاقة عرض الطالب
│   │
│   ├── pages/                      # صفحات التطبيق
│   │   ├── HomePage.jsx            # الصفحة الرئيسية
│   │   ├── AboutPage.jsx           # صفحة من نحن
│   │   ├── ServicesPage.jsx        # صفحة الخدمات
│   │   ├── ContactPage.jsx         # صفحة الاتصال
│   │   └── StudentProfile.jsx      # صفحة الملف الشخصي للطالب
│   │
│   ├── data/                       # بيانات وهمية
│   │   └── students.js             # بيانات الطلاب
│   │
│   ├── App.jsx                     # المكون الرئيسي للتطبيق
│   ├── main.jsx                    # نقطة دخول التطبيق
│   └── index.css                   # ملف CSS الرئيسي
│
├── index.html                      # ملف HTML الرئيسي
│
├── package.json                    # ملف التبعيات والإعدادات
├── vite.config.js                 # إعدادات Vite
├── tailwind.config.js             # إعدادات Tailwind CSS
├── postcss.config.js              # إعدادات PostCSS
├── .gitignore                     # ملفات Git المستثناة
│
├── README.md                       # ملف التوثيق الرئيسي
├── DEPLOYMENT.md                   # دليل النشر
├── GIT_COMMIT_PLAN.md             # خطة الـ Commits
└── PROJECT_STRUCTURE.md            # هذا الملف - هيكل المشروع
```

## 📊 إحصائيات المشروع

- **عدد المكونات**: 3 (Navbar, Footer, StudentCard)
- **عدد الصفحات**: 5 (Home, About, Services, Contact, StudentProfile)
- **عدد الطلاب الوهميين**: 5
- **عدد الملفات الإعدادية**: 4 (vite, tailwind, postcss, package.json)

## 🔗 تدفق البيانات

```
students.js (البيانات الوهمية)
    ↓
HomePage.jsx (عرض 3 طلاب مميزين)
    ↓
ServicesPage.jsx (عرض جميع الطلاب/المواد/الدرجات)
    ↓
StudentCard.jsx (بطاقة كل طالب)
    ↓
StudentProfile.jsx (عرض تفاصيل الطالب باستخدام useParams)
```

## 🎯 المسارات (Routes)

- `/` - الصفحة الرئيسية
- `/about` - صفحة من نحن
- `/services` - صفحة الخدمات
- `/contact` - صفحة الاتصال
- `/student/:id` - صفحة الملف الشخصي للطالب (ديناميكية)

## 📝 ملاحظات

- جميع الملفات تحتوي على تعليقات عربية توضيحية
- التصميم متجاوب بالكامل باستخدام Tailwind CSS
- لا يوجد خادم خلفي - جميع البيانات محلية
- يستخدم React Router للتنقل بين الصفحات


