// ملف البيانات الوهمية الموسع - يحتوي على بيانات الطلاب للعرض في التطبيق

export const students = [
  {
    id: 1,
    name: 'أحمد محمد العلي',
    nameEn: 'Ahmed Mohammed Al-Ali',
    major: 'هندسة الحاسوب',
    majorEn: 'Computer Engineering',
    gpa: 3.85,
    email: 'ahmed.ali@university.edu',
    password: 'student123',
    phone: '+961 50 123 4567',
    year: 'السنة الرابعة',
    yearEn: 'Fourth Year',
    avatar: '👨‍💻',
    courses: [
      { code: 'CS401', name: 'قواعد البيانات المتقدمة', nameEn: 'Advanced Database Systems', grade: 'A', credits: 3, instructor: 'د. سعيد أحمد', instructorEn: 'Dr. Saeed Ahmed' },
      { code: 'CS402', name: 'الذكاء الاصطناعي', nameEn: 'Artificial Intelligence', grade: 'A-', credits: 3, instructor: 'د. فاطمة علي', instructorEn: 'Dr. Fatima Ali' },
      { code: 'CS403', name: 'أمن المعلومات', nameEn: 'Information Security', grade: 'B+', credits: 3, instructor: 'د. خالد محمد', instructorEn: 'Dr. Khalid Mohammed' },
      { code: 'CS404', name: 'مشروع التخرج', nameEn: 'Graduation Project', grade: 'A', credits: 6, instructor: 'د. نورا حسن', instructorEn: 'Dr. Nora Hassan' }
    ]
  },
  {
    id: 2,
    name: 'فاطمة سعيد الأحمد',
    nameEn: 'Fatima Saeed Al-Ahmad',
    major: 'علوم الحاسوب',
    majorEn: 'Computer Science',
    gpa: 3.92,
    email: 'fatima.ahmad@university.edu',
    password: 'student123',
    phone: '+961 55 234 5678',
    year: 'السنة الثالثة',
    yearEn: 'Third Year',
    avatar: '👩‍💻',
    courses: [
      { code: 'CS301', name: 'هياكل البيانات والخوارزميات', nameEn: 'Data Structures and Algorithms', grade: 'A', credits: 4, instructor: 'د. محمد علي', instructorEn: 'Dr. Mohammed Ali' },
      { code: 'CS302', name: 'أنظمة التشغيل', nameEn: 'Operating Systems', grade: 'A', credits: 3, instructor: 'د. سارة أحمد', instructorEn: 'Dr. Sara Ahmed' },
      { code: 'CS303', name: 'شبكات الحاسوب', nameEn: 'Computer Networks', grade: 'A-', credits: 3, instructor: 'د. يوسف حسن', instructorEn: 'Dr. Youssef Hassan' },
      { code: 'MATH301', name: 'الرياضيات المتقطعة', nameEn: 'Discrete Mathematics', grade: 'B+', credits: 3, instructor: 'د. علي محمد', instructorEn: 'Dr. Ali Mohammed' }
    ]
  },
  {
    id: 3,
    name: 'خالد عبدالله النور',
    nameEn: 'Khalid Abdullah Al-Noor',
    major: 'هندسة البرمجيات',
    majorEn: 'Software Engineering',
    gpa: 3.45,
    email: 'khalid.noor@university.edu',
    phone: '+961 50 345 6789',
    year: 'السنة الثانية',
    yearEn: 'Second Year',
    avatar: '👨‍🎓',
    courses: [
      { code: 'SE201', name: 'مقدمة في البرمجة', nameEn: 'Introduction to Programming', grade: 'B+', credits: 4, instructor: 'د. نورا سعيد', instructorEn: 'Dr. Nora Saeed' },
      { code: 'SE202', name: 'هندسة البرمجيات', nameEn: 'Software Engineering', grade: 'B', credits: 3, instructor: 'د. أحمد خالد', instructorEn: 'Dr. Ahmed Khalid' },
      { code: 'SE203', name: 'واجهات المستخدم', nameEn: 'User Interfaces', grade: 'A-', credits: 3, instructor: 'د. ليلى محمد', instructorEn: 'Dr. Layla Mohammed' },
      { code: 'MATH201', name: 'الجبر الخطي', nameEn: 'Linear Algebra', grade: 'B', credits: 3, instructor: 'د. حسن علي', instructorEn: 'Dr. Hassan Ali' }
    ]
  },
  {
    id: 4,
    name: 'سارة علي المحمد',
    nameEn: 'Sara Ali Al-Mohammed',
    major: 'نظم المعلومات',
    majorEn: 'Information Systems',
    gpa: 3.78,
    email: 'sara.mohammed@university.edu',
    phone: '+961 55 456 7890',
    year: 'السنة الثالثة',
    yearEn: 'Third Year',
    avatar: '👩‍🎓',
    courses: [
      { code: 'IS301', name: 'إدارة قواعد البيانات', nameEn: 'Database Management', grade: 'A-', credits: 3, instructor: 'د. فهد أحمد', instructorEn: 'Dr. Fahad Ahmed' },
      { code: 'IS302', name: 'نظم المعلومات الإدارية', nameEn: 'Management Information Systems', grade: 'B+', credits: 3, instructor: 'د. مريم حسن', instructorEn: 'Dr. Mariam Hassan' },
      { code: 'IS303', name: 'تحليل وتصميم النظم', nameEn: 'Systems Analysis and Design', grade: 'A', credits: 3, instructor: 'د. عمر سعيد', instructorEn: 'Dr. Omar Saeed' },
      { code: 'BUS301', name: 'مبادئ الإدارة', nameEn: 'Principles of Management', grade: 'B+', credits: 3, instructor: 'د. نورة علي', instructorEn: 'Dr. Noura Ali' }
    ]
  },
  {
    id: 5,
    name: 'محمد حسن الكاظم',
    nameEn: 'Mohammed Hassan Al-Kadhim',
    major: 'هندسة الحاسوب',
    majorEn: 'Computer Engineering',
    gpa: 2.95,
    email: 'mohammed.kadhim@university.edu',
    phone: '+961 50 567 8901',
    year: 'السنة الأولى',
    yearEn: 'First Year',
    avatar: '👨‍🎓',
    courses: [
      { code: 'CS101', name: 'مقدمة في البرمجة', nameEn: 'Introduction to Programming', grade: 'C+', credits: 4, instructor: 'د. سعد محمد', instructorEn: 'Dr. Saad Mohammed' },
      { code: 'CS102', name: 'مقدمة في الحاسوب', nameEn: 'Introduction to Computers', grade: 'B-', credits: 3, instructor: 'د. هدى أحمد', instructorEn: 'Dr. Huda Ahmed' },
      { code: 'MATH101', name: 'حساب التفاضل والتكامل', nameEn: 'Calculus', grade: 'C', credits: 4, instructor: 'د. يحيى علي', instructorEn: 'Dr. Yahya Ali' },
      { code: 'ENG101', name: 'اللغة الإنجليزية', nameEn: 'English Language', grade: 'B', credits: 2, instructor: 'د. جين سميث', instructorEn: 'Dr. Jane Smith' }
    ]
  },
  {
    id: 6,
    name: 'نورا أحمد السالم',
    nameEn: 'Nora Ahmed Al-Salem',
    major: 'علوم الحاسوب',
    majorEn: 'Computer Science',
    gpa: 3.88,
    email: 'nora.salem@university.edu',
    phone: '+961 55 678 9012',
    year: 'السنة الرابعة',
    yearEn: 'Fourth Year',
    avatar: '👩‍💼',
    courses: [
      { code: 'CS401', name: 'قواعد البيانات المتقدمة', nameEn: 'Advanced Database Systems', grade: 'A', credits: 3, instructor: 'د. سعيد أحمد', instructorEn: 'Dr. Saeed Ahmed' },
      { code: 'CS405', name: 'تعلم الآلة', nameEn: 'Machine Learning', grade: 'A-', credits: 3, instructor: 'د. فاطمة علي', instructorEn: 'Dr. Fatima Ali' },
      { code: 'CS406', name: 'الحوسبة السحابية', nameEn: 'Cloud Computing', grade: 'B+', credits: 3, instructor: 'د. خالد محمد', instructorEn: 'Dr. Khalid Mohammed' }
    ]
  },
  {
    id: 7,
    name: 'يوسف محمد الحسن',
    nameEn: 'Youssef Mohammed Al-Hassan',
    major: 'هندسة البرمجيات',
    majorEn: 'Software Engineering',
    gpa: 3.65,
    email: 'youssef.hassan@university.edu',
    phone: '+961 50 789 0123',
    year: 'السنة الثالثة',
    yearEn: 'Third Year',
    avatar: '👨‍💼',
    courses: [
      { code: 'SE301', name: 'تطوير تطبيقات الويب', nameEn: 'Web Application Development', grade: 'A', credits: 4, instructor: 'د. نورا سعيد', instructorEn: 'Dr. Nora Saeed' },
      { code: 'SE302', name: 'تطوير تطبيقات الهاتف', nameEn: 'Mobile Application Development', grade: 'B+', credits: 3, instructor: 'د. أحمد خالد', instructorEn: 'Dr. Ahmed Khalid' },
      { code: 'SE303', name: 'اختبار البرمجيات', nameEn: 'Software Testing', grade: 'A-', credits: 3, instructor: 'د. ليلى محمد', instructorEn: 'Dr. Layla Mohammed' }
    ]
  },
  {
    id: 8,
    name: 'مريم سعيد العلي',
    nameEn: 'Mariam Saeed Al-Ali',
    major: 'نظم المعلومات',
    majorEn: 'Information Systems',
    gpa: 3.72,
    email: 'mariam.ali@university.edu',
    phone: '+961 55 890 1234',
    year: 'السنة الثانية',
    yearEn: 'Second Year',
    avatar: '👩‍💼',
    courses: [
      { code: 'IS201', name: 'مقدمة في نظم المعلومات', nameEn: 'Introduction to Information Systems', grade: 'A-', credits: 3, instructor: 'د. فهد أحمد', instructorEn: 'Dr. Fahad Ahmed' },
      { code: 'IS202', name: 'قواعد البيانات', nameEn: 'Databases', grade: 'B+', credits: 3, instructor: 'د. مريم حسن', instructorEn: 'Dr. Mariam Hassan' },
      { code: 'BUS201', name: 'مقدمة في الإدارة', nameEn: 'Introduction to Management', grade: 'B', credits: 3, instructor: 'د. نورة علي', instructorEn: 'Dr. Noura Ali' }
    ]
  },
  {
    id: 9,
    name: 'عمر خالد النور',
    nameEn: 'Omar Khalid Al-Noor',
    major: 'هندسة الحاسوب',
    majorEn: 'Computer Engineering',
    gpa: 3.55,
    email: 'omar.noor@university.edu',
    phone: '+961 50 901 2345',
    year: 'السنة الثانية',
    yearEn: 'Second Year',
    avatar: '👨‍🔬',
    courses: [
      { code: 'CE201', name: 'الدوائر الكهربائية', nameEn: 'Electrical Circuits', grade: 'B+', credits: 4, instructor: 'د. سعد محمد', instructorEn: 'Dr. Saad Mohammed' },
      { code: 'CE202', name: 'الإلكترونيات الرقمية', nameEn: 'Digital Electronics', grade: 'A-', credits: 3, instructor: 'د. هدى أحمد', instructorEn: 'Dr. Huda Ahmed' },
      { code: 'MATH201', name: 'الجبر الخطي', nameEn: 'Linear Algebra', grade: 'B', credits: 3, instructor: 'د. يحيى علي', instructorEn: 'Dr. Yahya Ali' }
    ]
  },
  {
    id: 10,
    name: 'ليلى أحمد المحمد',
    nameEn: 'Layla Ahmed Al-Mohammed',
    major: 'علوم الحاسوب',
    majorEn: 'Computer Science',
    gpa: 3.91,
    email: 'layla.mohammed@university.edu',
    phone: '+961 55 012 3456',
    year: 'السنة الرابعة',
    yearEn: 'Fourth Year',
    avatar: '👩‍🔬',
    courses: [
      { code: 'CS401', name: 'قواعد البيانات المتقدمة', nameEn: 'Advanced Database Systems', grade: 'A', credits: 3, instructor: 'د. سعيد أحمد', instructorEn: 'Dr. Saeed Ahmed' },
      { code: 'CS407', name: 'البيانات الضخمة', nameEn: 'Big Data', grade: 'A-', credits: 3, instructor: 'د. فاطمة علي', instructorEn: 'Dr. Fatima Ali' },
      { code: 'CS408', name: 'الأمن السيبراني', nameEn: 'Cybersecurity', grade: 'A', credits: 3, instructor: 'د. خالد محمد', instructorEn: 'Dr. Khalid Mohammed' }
    ]
  }
]
