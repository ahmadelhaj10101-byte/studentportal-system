# سكريبت PowerShell لرفع المشروع إلى GitHub مباشرة
# استخدم: .\PUSH_NOW.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "رفع المشروع إلى GitHub" -ForegroundColor Cyan
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

# إضافة جميع الملفات
Write-Host "إضافة جميع الملفات..." -ForegroundColor Yellow
git add .
Write-Host "✅ تم إضافة الملفات" -ForegroundColor Green
Write-Host ""

# إنشاء Commit
Write-Host "إنشاء Commit..." -ForegroundColor Yellow
$commitMessage = @"
Initial commit: Student Portal System

- Complete ReactJS project with Vite
- Multi-language support (Arabic/English)
- Authentication system (Admin/Teacher/Student)
- Student dashboard with profile, courses, and grades
- Admin panel for managing students, courses, and grades
- Multiple pages: Dashboard, Courses, Calendar, Announcements, Events, Library, Settings, Statistics
- Responsive design with Tailwind CSS
- Mock data stored locally
"@

git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ تم إنشاء Commit" -ForegroundColor Green
} else {
    Write-Host "⚠️  لا توجد تغييرات جديدة للـ Commit" -ForegroundColor Yellow
}
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
Write-Host "⚠️  قد يُطلب منك إدخال اسم المستخدم وكلمة المرور" -ForegroundColor Yellow
Write-Host "   استخدم Personal Access Token بدلاً من كلمة المرور" -ForegroundColor Yellow
Write-Host ""

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
} else {
    Write-Host ""
    Write-Host "❌ فشل الرفع" -ForegroundColor Red
    Write-Host ""
    Write-Host "الأسباب المحتملة:" -ForegroundColor Yellow
    Write-Host "1. لم يتم إدخال اسم المستخدم/كلمة المرور بشكل صحيح" -ForegroundColor White
    Write-Host "2. لا توجد صلاحيات على المستودع" -ForegroundColor White
    Write-Host "3. مشكلة في الاتصال بالإنترنت" -ForegroundColor White
    Write-Host ""
    Write-Host "جرب:" -ForegroundColor Yellow
    Write-Host "git push -u origin main --force" -ForegroundColor White
    Write-Host ""
}

pause

