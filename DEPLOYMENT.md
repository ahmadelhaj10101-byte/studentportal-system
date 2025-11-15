# دليل النشر - Student Portal

هذا الدليل يشرح كيفية نشر مشروع Student Portal على منصات Vercel و Netlify.

## 📦 النشر على Vercel

### الطريقة الأولى: استخدام واجهة Vercel

1. **إنشاء حساب على Vercel**
   - انتقل إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub أو GitLab أو Bitbucket

2. **إعداد المشروع**
   - اضغط على "New Project"
   - اختر المستودع الخاص بك أو ارفع المشروع مباشرة

3. **إعدادات البناء**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **متغيرات البيئة** (إن وجدت)
   - لا حاجة لمتغيرات بيئة في هذا المشروع

5. **النشر**
   - اضغط على "Deploy"
   - انتظر حتى يكتمل البناء
   - سيتم توفير رابط للموقع المنشور

### الطريقة الثانية: استخدام Vercel CLI

1. **تثبيت Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **تسجيل الدخول**
   ```bash
   vercel login
   ```

3. **النشر**
   ```bash
   vercel
   ```

4. **النشر للإنتاج**
   ```bash
   vercel --prod
   ```

### إعدادات إضافية لـ Vercel

إنشاء ملف `vercel.json` في جذر المشروع (اختياري):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

---

## 🌐 النشر على Netlify

### الطريقة الأولى: استخدام واجهة Netlify

1. **إنشاء حساب على Netlify**
   - انتقل إلى [netlify.com](https://netlify.com)
   - سجل دخول باستخدام GitHub أو GitLab أو Bitbucket

2. **إعداد المشروع**
   - اضغط على "Add new site" → "Import an existing project"
   - اختر المستودع الخاص بك

3. **إعدادات البناء**
   - **Base directory**: (اتركه فارغاً)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **النشر**
   - اضغط على "Deploy site"
   - انتظر حتى يكتمل البناء
   - سيتم توفير رابط للموقع المنشور

### الطريقة الثانية: استخدام Netlify CLI

1. **تثبيت Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **تسجيل الدخول**
   ```bash
   netlify login
   ```

3. **بناء المشروع**
   ```bash
   npm run build
   ```

4. **النشر**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### إعدادات إضافية لـ Netlify

إنشاء ملف `netlify.toml` في جذر المشروع:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**ملاحظة مهمة**: إعدادات إعادة التوجيه ضرورية لأن React Router يستخدم توجيه على جانب العميل.

---

## 🔧 إعدادات مشتركة

### إعداد React Router للعمل مع SPA

تأكد من أن جميع المسارات تعيد توجيه إلى `index.html`:

**لـ Vercel**: إنشاء ملف `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**لـ Netlify**: استخدام ملف `netlify.toml` (كما هو موضح أعلاه)

### تحديثات تلقائية

- **Vercel**: يحدث تلقائياً عند الدفع إلى فرع `main` أو `master`
- **Netlify**: يحدث تلقائياً عند الدفع إلى الفرع الرئيسي (يمكن تخصيصه)

---

## ✅ التحقق من النشر

بعد النشر، تأكد من:

1. ✅ الصفحة الرئيسية تعمل
2. ✅ جميع الروابط تعمل
3. ✅ صفحة الملف الشخصي للطالب تعمل (`/student/1`)
4. ✅ التصميم متجاوب على الأجهزة المختلفة
5. ✅ لا توجد أخطاء في وحدة التحكم

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الصفحات تعمل في التطوير لكن لا تعمل بعد النشر

**الحل**: تأكد من إعدادات إعادة التوجيه (rewrites/redirects) كما هو موضح أعلاه.

### المشكلة: الأصول (CSS/JS) لا تُحمّل

**الحل**: تأكد من أن `base` في `vite.config.js` صحيح. للجذر، اتركه فارغاً أو `/`.

### المشكلة: التحديثات لا تظهر

**الحل**: 
- امسح الكاش في المتصفح
- تأكد من أن البناء تم بنجاح
- تحقق من سجلات النشر

---

## 📚 روابط مفيدة

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**نصيحة**: ابدأ بالنشر على Vercel لأنه أسهل وأسرع، ثم جرب Netlify إذا كنت تريد مقارنة الأداء.


