# كيفية تحويل التقرير إلى PDF

## الطريقة 1: استخدام VS Code (الأسهل)

1. افتح ملف `PROJECT_REPORT.md` في VS Code
2. اضغط `Ctrl+Shift+P` (أو `Cmd+Shift+P` على Mac)
3. ابحث عن "Markdown PDF: Export (pdf)"
4. اختر "Markdown PDF: Export (pdf)"
5. سيتم حفظ الملف كـ PDF في نفس المجلد

**ملاحظة:** قد تحتاج لتثبيت إضافة "Markdown PDF" من VS Code Extensions

## الطريقة 2: استخدام متصفح Chrome/Edge

1. افتح ملف `PROJECT_REPORT.md` في VS Code
2. اضغط `Ctrl+Shift+V` لعرض Preview
3. اضغط `Ctrl+Shift+P` وابحث عن "Markdown PDF: Export (pdf)"
4. أو انسخ المحتوى والصقه في محرر Markdown Online
5. استخدم Print to PDF من المتصفح

## الطريقة 3: استخدام Pandoc (للمستخدمين المتقدمين)

```bash
# تثبيت Pandoc
# Windows: choco install pandoc
# Mac: brew install pandoc
# Linux: sudo apt-get install pandoc

# تحويل إلى PDF
pandoc PROJECT_REPORT.md -o PROJECT_REPORT.pdf --pdf-engine=xelatex
```

## الطريقة 4: استخدام Online Converters

1. اذهب إلى: https://www.markdowntopdf.com/
2. ارفع ملف `PROJECT_REPORT.md`
3. اضغط Convert
4. حمّل الملف PDF

## الطريقة 5: استخدام GitHub

1. ارفع الملف إلى GitHub
2. افتح الملف على GitHub
3. اضغط Print (Ctrl+P)
4. اختر "Save as PDF"

---

**ملاحظة:** التقرير جاهز في ملف `PROJECT_REPORT.md` ويمكن تحويله إلى PDF بأي من الطرق أعلاه.

