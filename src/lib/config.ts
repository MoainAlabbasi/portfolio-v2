// Site Configuration
export const siteConfig = {
  name: "Moain Alabbasi",
  nameAr: "معين العباسي",
  title: "AI Solutions Developer & Prompt Engineer",
  titleAr: "مطور حلول الذكاء الاصطناعي ومهندس البرومبتات",
  description: "مطور Full-Stack شغوف بالتقنية، متخصص في دمج حلول الذكاء الاصطناعي وهندسة البرومبتات. أحول المشكلات المعقدة إلى حلول برمجية أنيقة.",
  email: "Moain.learn@gmail.com",
  location: "اليمن",
  github: "https://github.com/MoainAlabbasi",
  linkedin: "https://linkedin.com/in/moainalabbasi",
  
  // Education
  education: {
    university: "جامعة العلوم والتكنولوجيا",
    degree: "بكالوريوس تقنية المعلومات",
    graduation: "2025 - 2026",
  },
  
  // Experience
  experience: {
    years: "5+",
    company: "شركة العباسي لتوليد الطاقة الكهربائية",
    period: "2019 - الآن",
  },
  
  // Stats
  stats: {
    yearsExperience: "5+",
    projects: "31",
    languages: "10+",
    mainProjects: "6+",
  },
};

// Navigation Links
export const navLinks = [
  { href: "/", label: "الرئيسية", icon: "Home" },
  { href: "/about", label: "نبذة عني", icon: "User" },
  { href: "/skills", label: "المهارات", icon: "Code" },
  { href: "/projects", label: "المشاريع", icon: "FolderOpen" },
  { href: "/contact", label: "تواصل معي", icon: "Mail" },
];

// Skills Data
export const skillsData = {
  languages: {
    title: "لغات البرمجة",
    icon: "Code",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "PHP", "Kotlin", "Go", "Dart", "SQL"],
  },
  frontend: {
    title: "الواجهة الأمامية",
    icon: "Palette",
    skills: ["React.js", "Next.js", "Flutter", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  backend: {
    title: "الواجهة الخلفية",
    icon: "Server",
    skills: ["Django", "Flask", "FastAPI", "ASP.NET", "Laravel", "Node.js", "REST API"],
  },
  database: {
    title: "قواعد البيانات",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "SQLite", "Supabase", "PL/SQL"],
  },
  ai: {
    title: "الذكاء الاصطناعي",
    icon: "Brain",
    skills: ["Prompt Engineering", "Gemini AI", "ChatGPT", "Claude", "TensorFlow", "Pandas", "NumPy"],
  },
  cloud: {
    title: "السحابة و DevOps",
    icon: "Cloud",
    skills: ["Docker", "Linux", "Azure", "GCP", "Vercel", "Netlify", "Railway"],
  },
  mobile: {
    title: "تطوير التطبيقات",
    icon: "Smartphone",
    skills: ["Flutter", "Dart", "Kotlin", "Android Studio"],
  },
  design: {
    title: "التصميم",
    icon: "Paintbrush",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Animate", "InDesign", "Canva"],
  },
  tools: {
    title: "أدوات التطوير",
    icon: "Wrench",
    skills: ["VS Code", "Visual Studio", "PyCharm", "IntelliJ IDEA", "Git", "GitHub", "Postman"],
  },
};

// Projects Data
export const projectsData = [
  {
    id: "sacm",
    title: "SACM-System",
    titleAr: "نظام إدارة المحتوى الأكاديمي الذكي",
    description: "نظام متكامل لإدارة المحتوى الأكاديمي مع ميزات ذكاء اصطناعي متقدمة تشمل التلخيص التلقائي للمحاضرات، توليد الأسئلة الامتحانية، والمحادثة الذكية مع المحتوى. يساعد الطلاب والمحاضرين على تحسين العملية التعليمية.",
    features: [
      "تلخيص تلقائي للمحاضرات باستخدام AI",
      "توليد أسئلة امتحانية ذكية",
      "محادثة تفاعلية مع المحتوى",
      "إدارة المقررات والمحاضرات",
      "نظام مصادقة متعدد المستويات",
    ],
    tech: ["Python", "Django", "Gemini AI", "PostgreSQL", "REST API"],
    image: "/images/projects/sacm.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "electronics",
    title: "Electronics Store Management",
    titleAr: "نظام إدارة محلات الإلكترونيات",
    description: "نظام متكامل لإدارة عمليات البيع بالتجزئة يشمل تطبيق سطح مكتب للكاشير، واجهة ويب للإدارة، وواجهة برمجية للتكامل مع الأنظمة الأخرى. يدعم إدارة المخزون، الفواتير، والتقارير المالية.",
    features: [
      "تطبيق سطح مكتب للكاشير",
      "واجهة ويب للإدارة",
      "API للتكامل مع الأنظمة",
      "إدارة المخزون والمنتجات",
      "تقارير مالية شاملة",
    ],
    tech: ["C#", ".NET", "SQL Server", "REST API", "WPF"],
    image: "/images/projects/electronics.png",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "income-expense",
    title: "Income & Expense Tracker",
    titleAr: "تطبيق الدخل والمصروفات",
    description: "تطبيق Android لإدارة الشؤون المالية الشخصية بواجهة مستخدم سهلة وبديهية. يساعد المستخدمين على تتبع دخلهم ومصروفاتهم وتحليل أنماط الإنفاق.",
    features: [
      "تتبع الدخل والمصروفات",
      "تصنيف المعاملات",
      "رسوم بيانية تحليلية",
      "تقارير شهرية وسنوية",
      "واجهة مستخدم سهلة",
    ],
    tech: ["Kotlin", "Android", "SQLite", "Material Design"],
    image: "/images/projects/income.png",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "ai-extractor",
    title: "AI Question Extractor",
    titleAr: "مستخرج الأسئلة بالذكاء الاصطناعي",
    description: "أداة ويب متقدمة لاستخراج الأسئلة من المستندات والملفات باستخدام Gemini AI. مصممة للأغراض التعليمية لمساعدة المعلمين والطلاب.",
    features: [
      "استخراج أسئلة من PDF و Word",
      "دعم أنواع متعددة من الأسئلة",
      "تصدير الأسئلة بتنسيقات مختلفة",
      "واجهة سحب وإفلات",
      "معالجة سريعة بـ AI",
    ],
    tech: ["TypeScript", "Next.js", "Gemini AI", "Tailwind CSS"],
    image: "/images/projects/extractor.png",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "telegram-bot",
    title: "Telegram Archive Bot",
    titleAr: "بوت أرشفة تليجرام",
    description: "نظام MVP لأرشفة ملفات تليجرام يتضمن بوت Python قوي وواجهة ويب للإدارة. يساعد على تنظيم وحفظ الملفات المشاركة في المجموعات.",
    features: [
      "أرشفة تلقائية للملفات",
      "تصنيف حسب النوع والتاريخ",
      "واجهة ويب للإدارة",
      "بحث متقدم في الأرشيف",
      "دعم أنواع ملفات متعددة",
    ],
    tech: ["Python", "Telegram API", "Flask", "SQLite"],
    image: "/images/projects/telegram.png",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "blockchain",
    title: "Blockchain Graduation Project",
    titleAr: "مشروع Blockchain للتخرج",
    description: "مشروع تخرج متقدم باستخدام تقنية Blockchain وإطار Hyperledger Fabric. يهدف لتطبيق تقنية السلسلة الكتلية في مجال محدد.",
    features: [
      "شبكة Blockchain خاصة",
      "عقود ذكية بـ Go",
      "واجهة إدارة الشبكة",
      "تتبع المعاملات",
      "أمان عالي المستوى",
    ],
    tech: ["Go", "Hyperledger Fabric", "Docker", "Node.js"],
    image: "/images/projects/blockchain.png",
    color: "from-pink-500 to-rose-600",
  },
];

// Bot Commands
export const botCommands = [
  { command: "/start", description: "بدء المحادثة", response: "مرحباً! أنا مساعد معين الافتراضي. كيف يمكنني مساعدتك؟" },
  { command: "/about", description: "نبذة عن معين", response: "معين العباسي - مطور حلول الذكاء الاصطناعي ومهندس البرومبتات. طالب في السنة الرابعة IT بجامعة العلوم والتكنولوجيا." },
  { command: "/skills", description: "المهارات التقنية", response: "أتقن: Python, JavaScript, TypeScript, React, Next.js, Django, AI/ML, والمزيد..." },
  { command: "/projects", description: "المشاريع", response: "لدي 6+ مشاريع رئيسية و 31 مستودع على GitHub. اكتشفها في قسم المشاريع!" },
  { command: "/contact", description: "معلومات التواصل", response: "📧 Moain.learn@gmail.com\n🔗 GitHub: MoainAlabbasi\n💼 LinkedIn: moainalabbasi" },
  { command: "/cv", description: "تحميل السيرة الذاتية", response: "يمكنك تحميل سيرتي الذاتية من قسم التواصل بالعربية أو الإنجليزية." },
  { command: "/help", description: "قائمة الأوامر", response: "الأوامر المتاحة:\n/start - بدء المحادثة\n/about - نبذة عني\n/skills - المهارات\n/projects - المشاريع\n/contact - التواصل\n/cv - السيرة الذاتية" },
];
