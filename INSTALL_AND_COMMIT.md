# دليل تثبيت Git وإنشاء Commits

## الخطوة 1: تثبيت Git

### على Windows:

1. **تحميل Git:**
   - اذهب إلى: https://git-scm.com/download/win
   - حمّل الإصدار المناسب (64-bit أو 32-bit)

2. **تثبيت Git:**
   - شغّل الملف المحمّل
   - اضغط "Next" في جميع الخطوات
   - اختر "Use Git from the Windows Command Prompt"
   - أكمل التثبيت

3. **التحقق من التثبيت:**
   - افتح PowerShell جديد
   - اكتب: `git --version`
   - يجب أن ترى رقم الإصدار

## الخطوة 2: إنشاء Commits

### الطريقة السريعة (موصى بها):

1. **افتح PowerShell في مجلد المشروع:**
   ```powershell
   cd "C:\Users\Admin\Desktop\student p"
   ```

2. **شغّل ملف MAKE_COMMITS.bat:**
   - انقر نقراً مزدوجاً على `MAKE_COMMITS.bat`
   - أو من PowerShell: `.\MAKE_COMMITS.bat`

3. **انتظر حتى يكتمل** - سيتم إنشاء جميع الـ 18 commits تلقائياً

### الطريقة اليدوية:

إذا كنت تفضل تنفيذ الأوامر يدوياً، استخدم `git-commit-history.ps1`:

```powershell
.\git-commit-history.ps1
```

## الخطوة 3: رفع التغييرات إلى GitHub

بعد إنشاء جميع الـ commits:

```powershell
# إنشاء فرع main
git branch -M main

# رفع التغييرات
git push -u origin main
```

**ملاحظة:** قد يُطلب منك إدخال اسم المستخدم وكلمة المرور لـ GitHub.

## التحقق من النجاح

1. **عرض سجل Commits:**
   ```powershell
   git log --oneline
   ```

2. **التحقق من Remote:**
   ```powershell
   git remote -v
   ```

3. **زيارة GitHub:**
   - اذهب إلى: https://github.com/ahmadelhaj10101-byte/studentportal-system
   - يجب أن ترى جميع الـ commits والملفات

## حل المشاكل

### المشكلة: "git is not recognized"
**الحل:** 
- تأكد من تثبيت Git
- أعد تشغيل PowerShell
- تحقق من PATH: `$env:Path`

### المشكلة: "remote origin already exists"
**الحل:**
```powershell
git remote remove origin
git remote add origin https://github.com/ahmadelhaj10101-byte/studentportal-system.git
```

### المشكلة: "Permission denied"
**الحل:**
- تأكد من أن لديك صلاحيات الكتابة على المستودع
- تحقق من اسم المستخدم وكلمة المرور
- استخدم Personal Access Token بدلاً من كلمة المرور

## معلومات إضافية

- **عدد الـ Commits:** 18 commits
- **المستودع:** https://github.com/ahmadelhaj10101-byte/studentportal-system.git
- **الفرع الرئيسي:** main

---

**نصيحة:** استخدم `MAKE_COMMITS.bat` للحصول على أفضل النتائج!

