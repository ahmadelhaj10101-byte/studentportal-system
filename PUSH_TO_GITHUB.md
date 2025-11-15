# 🚀 دليل رفع المشروع إلى GitHub

## ⚡ الخطوات السريعة

### الخطوة 1: تثبيت Git

1. **حمّل Git:**
   - اذهب إلى: https://git-scm.com/download/win
   - حمّل الإصدار 64-bit
   - شغّل الملف المحمّل

2. **ثبت Git:**
   - اضغط "Next" في جميع الخطوات
   - اختر "Use Git from the Windows Command Prompt"
   - أكمل التثبيت

3. **أعد تشغيل PowerShell**

### الخطوة 2: تنفيذ الأوامر

**افتح PowerShell في مجلد المشروع:**
```powershell
cd "C:\Users\Admin\Desktop\student p"
```

**ثم نفّذ الأوامر التالية بالترتيب:**

```powershell
# 1. تهيئة Git
git init

# 2. إعداد معلومات المستخدم (استبدل بمعلوماتك)
git config user.name "Ahmed Elhaj"
git config user.email "ahmadelhaj10101-byte@users.noreply.github.com"

# 3. إضافة جميع الملفات
git add .

# 4. إنشاء Commit أولي
git commit -m "Initial commit: Student Portal System

- Complete ReactJS project with Vite
- Multi-language support (Arabic/English)
- Authentication system (Admin/Teacher/Student)
- Student dashboard with profile, courses, and grades
- Admin panel for managing students, courses, and grades
- Multiple pages: Dashboard, Courses, Calendar, Announcements, Events, Library, Settings, Statistics
- Responsive design with Tailwind CSS
- Mock data stored locally"

# 5. إضافة Remote
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git

# 6. إنشاء فرع main
git branch -M main

# 7. رفع إلى GitHub
git push -u origin main
```

## 📝 ملاحظات مهمة

### عند رفع المشروع:
- قد يُطلب منك إدخال اسم المستخدم وكلمة المرور
- استخدم **Personal Access Token** بدلاً من كلمة المرور
- لإنشاء Token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

### إذا ظهرت رسالة "remote origin already exists":
```powershell
git remote remove origin
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
```

### إذا فشل Push:
```powershell
# جرب Force push (بحذر!)
git push -u origin main --force
```

## ✅ التحقق من النجاح

بعد الرفع:
1. اذهب إلى: https://github.com/ahmadelhaj10101-byte/studentportal-system
2. يجب أن ترى جميع الملفات
3. يجب أن ترى Commit واحد على الأقل

## 🔄 بعد الرفع الأولي

إذا أردت إنشاء Commits منظمة (18 commits):
```powershell
.\MAKE_COMMITS.bat
```

ثم:
```powershell
git push -u origin main --force
```

---

**نصيحة:** بعد تثبيت Git، استخدم `MAKE_COMMITS.bat` لإنشاء Commits منظمة!

