# 🚀 رفع المشروع إلى GitHub - دليل سريع

## ⚡ الطريقة الأسرع (خطوتان فقط!)

### 1️⃣ تثبيت Git

**حمّل وثبت Git:**
- الرابط: https://git-scm.com/download/win
- ثبت مع الإعدادات الافتراضية
- **أعد تشغيل PowerShell بعد التثبيت**

### 2️⃣ شغّل السكريبت

**افتح PowerShell في مجلد المشروع:**
```powershell
cd "C:\Users\Admin\Desktop\student p"
```

**شغّل السكريبت:**
```powershell
.\PUSH_NOW.ps1
```

**هذا كل شيء!** 🎉

---

## 📋 ما سيحدث؟

السكريبت سيقوم بـ:
1. ✅ التحقق من تثبيت Git
2. ✅ تهيئة Git repository
3. ✅ إضافة Remote إلى GitHub
4. ✅ إضافة جميع الملفات
5. ✅ إنشاء Commit
6. ✅ رفع المشروع إلى GitHub

## 🔐 معلومات تسجيل الدخول

عند الرفع، سيُطلب منك:
- **اسم المستخدم:** اسم مستخدم GitHub
- **كلمة المرور:** استخدم **Personal Access Token**

### كيفية إنشاء Personal Access Token:

1. اذهب إلى: https://github.com/settings/tokens
2. اضغط "Generate new token" → "Generate new token (classic)"
3. اختر الصلاحيات: `repo` (كامل)
4. اضغط "Generate token"
5. انسخ الرمز (سيظهر مرة واحدة فقط!)
6. استخدمه ككلمة مرور عند الرفع

## ✅ التحقق من النجاح

بعد الرفع:
- اذهب إلى: https://github.com/ahmadelhaj10101-byte/studentportal-system
- يجب أن ترى جميع الملفات والمجلدات

## 🔄 إنشاء Commits منظمة (اختياري)

إذا أردت إنشاء 18 commits منظمة بدلاً من commit واحد:

```powershell
.\MAKE_COMMITS.bat
git push -u origin main --force
```

---

**ملاحظة:** تأكد من تثبيت Git أولاً قبل تشغيل السكريبت!

