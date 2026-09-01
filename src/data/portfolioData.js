export const personalInfo = {
  name: "TASMIN AHMED ONI",
  tagline: "FULL-STACK SOFTWARE ENGINEER & BACKEND DEVELOPER",
  bio: "Computer Science graduate and software engineer passionate about building high-performance web applications, scalable backend systems, and clean RESTful APIs.",
  location: "Dhaka, Bangladesh [GMT+6]",
  email: "tasminahmedoni909@gmail.com",
  phone: "+880 1783 384 722",
  status: "OPEN TO NEW OPPORTUNITIES & COLLABORATIONS",
  socials: {
    github: "https://github.com/tasminoni",
    linkedin: "https://linkedin.com/in/tasmin-ahmed-oni-968a44255",
    email: "mailto:tasminahmedoni909@gmail.com",
    phone: "tel:+8801783384722",
  },
  resumeUrl: "resume/Tasmin Ahmed Resume.pdf",
  profileImg: "profilepic/oni.jpeg",
  stats: [
    { label: "ACADEMIC CGPA", value: "3.62", detail: "BRAC UNIVERSITY CSE" },
    { label: "PROJECTS BUILT", value: "12+", detail: "WEB, POS & SYSTEMS" },
    { label: "PRIMARY STACK", value: "FULL-STACK", detail: "FLUTTER • NODE • NEST" },
    { label: "EXPERIENCE", value: "JUNIOR ENG.", detail: "UNITED GROUP (OSL)" }
  ]
};

export const technicalExpertise = [
  {
    number: "01",
    title: "FULL-STACK WEB DEVELOPMENT",
    description: "Building responsive, modern single-page applications using React.js and Angular on the frontend, integrated with high-performance Node.js / Nest.js / Spring Boot backends.",
    focusAreas: ["Component-Driven Architecture", "State Management & React Hooks", "Responsive Mobile-First UIs", "Clean MVC Pattern"],
    tech: ["React.js", "Angular", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    number: "02",
    title: "BACKEND SYSTEMS & APIS",
    description: "Designing structured RESTful APIs, handling authentication/authorization, writing server-side logic, and structuring modular controllers and services.",
    focusAreas: ["RESTful API Architecture", "JWT Authentication & Role Guards", "Asynchronous Processing & Jobs", "Server Scripts & Daemons"],
    tech: ["Node.js", "Nest.js", "Express.js", "Java Spring Boot", "PHP", "Python"]
  },
  {
    number: "03",
    title: "DATABASE DESIGN & ORM",
    description: "Modeling normalized SQL schemas and flexible NoSQL document stores with a focus on data integrity, efficient queries, and indexing.",
    focusAreas: ["Relational & Document Modeling", "Query Optimization & Aggregations", "Data Normalization & Integrity", "ORM & Schema Migrations"],
    tech: ["MSSQL", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    number: "04",
    title: "RETAIL & E-COMMERCE SYSTEMS",
    description: "Hands-on experience developing real-world point-of-sale (POS) systems, multi-branch inventory tracking, and e-commerce shopping engines.",
    focusAreas: ["Multi-Branch Inventory Logic", "Real-Time Stock Depletion", "Invoice & Report Generation", "POS Scanner & Thermal APIs"],
    tech: ["Angular", "Nest.js", "MongoDB", "Capacitor Mobile", "WebSockets"]
  },
  {
    number: "05",
    title: "MVC ARCHITECTURE & SCRIPTING",
    description: "Applying clean architectural separation of concerns, writing utility scripts for automation, data scraping, and backend batch processing.",
    focusAreas: ["Clean Code Separation", "Automated Utility Scripts", "CLI Utilities & Crons", "Refactoring Legacy Modules"],
    tech: ["PHP", "Java", "Python", "Bash", "Node.js CLI"]
  },
  {
    number: "06",
    title: "SECURITY, TESTING & DEPLOYMENT",
    description: "Writing secure code by preventing common vulnerabilities (SQL injection, CSRF, XSS), testing APIs thoroughly with Postman, and deploying to cloud platforms.",
    focusAreas: ["Input Validation & Sanitization", "API Testing with Postman", "Git Version Control Workflows", "Vercel / Cloud Deployments"],
    tech: ["Git", "GitHub", "Postman", "Linux", "Vercel"]
  }
];

export const skillsData = {
  categories: [
    {
      name: "FRONTEND & UI",
      skills: ["Flutter", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Figma"]
    },
    {
      name: "BACKEND & RUNTIMES",
      skills: ["Node.js", "Nest.js", "Express.js", "Java Spring Boot", "PHP", "Python", "Java", "RESTful APIs", "MVC Pattern"]
    },
    {
      name: "DATABASES & ORM",
      skills: ["MSSQL", "MySQL", "PostgreSQL", "MongoDB", "Data Modeling", "Query Optimization", "Database Indexing"]
    },
    {
      name: "TOOLS & METHODOLOGIES",
      skills: ["Git & GitHub", "Jira & Agile", "Postman API Suite", "Linux Basics", "Vercel / Netlify", "Capacitor Mobile"]
    }
  ],
  ticker: [
    "REACT.JS", "NEST.JS", "NODE.JS", "ANGULAR", "MONGODB", "MYSQL", "SPRING BOOT",
    "JAVASCRIPT ES6+", "RESTFUL APIS", "MVC ARCHITECTURE", "PYTHON", "PHP",
    "TAILWIND CSS", "POSTMAN", "GIT & GITHUB", "JIRA"
  ]
};

export const sprintPhases = [
  {
    phase: "01",
    title: "PROBLEM DECOMPOSITION & PLANNING",
    subtitle: "Understanding Requirements • Data Modeling • Architecture",
    description: "I break down every project into core functional requirements, diagram the database relationships, plan the API endpoints, and establish a clear implementation roadmap.",
    keyActions: [
      "Deconstruct complex features into modular components",
      "Design database schema and relationship diagrams",
      "Define clean RESTful API endpoint contracts",
      "Plan milestone goals and UI/UX wireframes"
    ],
    badge: "PHASE 01 // PLANNING"
  },
  {
    phase: "02",
    title: "DEVELOPMENT & ARCHITECTURE",
    subtitle: "Clean Code • MVC Structure • Modular Components",
    description: "I focus on clean architecture—building backend controllers, services, and secure middleware first, followed by reactive, accessible frontend components.",
    keyActions: [
      "Implement clean MVC separation and modular structure",
      "Build secure authentication and input validation guards",
      "Create reusable, responsive UI components",
      "Maintain consistent naming and clean documentation"
    ],
    badge: "PHASE 02 // CODING"
  },
  {
    phase: "03",
    title: "TESTING & REFINEMENT",
    subtitle: "API Verification • Responsive Checks • Edge Cases",
    description: "I rigorously test endpoints using Postman, verify edge cases, optimize slow database queries, and test responsiveness across desktop, tablet, and mobile devices.",
    keyActions: [
      "Validate API responses and error codes via Postman",
      "Cross-browser and mobile responsiveness testing",
      "Profile and optimize database queries and load times",
      "Refine UI micro-interactions and accessibility"
    ],
    badge: "PHASE 03 // TESTING"
  },
  {
    phase: "04",
    title: "DEPLOYMENT & MAINTENANCE",
    subtitle: "Production Release • Git Workflows • Continuous Improvement",
    description: "I deploy production builds with optimized bundles, configure environment variables, maintain version control with Git, and keep dependencies up to date.",
    keyActions: [
      "Build optimization and production asset bundling",
      "Deploy to hosting platforms (Vercel, Netlify, Cloud)",
      "Maintain clean Git commit history and documentation",
      "Monitor functionality and implement improvements"
    ],
    badge: "PHASE 04 // SHIP"
  }
];

export const codeRules = [
  {
    number: "01",
    rule: "WRITE CLEAN, WORKING SOFTWARE.",
    summary: "Simplicity and readability over unnecessary complexity.",
    description: "The best code is simple, reliable, and easy to maintain. Writing software that works effectively and can be easily understood by other engineers is always my primary standard."
  },
  {
    number: "02",
    rule: "STRUCTURE & ARCHITECTURE FIRST.",
    summary: "Good architectural decisions save hours of refactoring.",
    description: "I prioritize clean MVC patterns, separated business logic, and modular folder structure so the codebase remains maintainable as the project grows."
  },
  {
    number: "03",
    rule: "PERFORMANCE & RESPONSIVENESS MATTER.",
    summary: "Fast load times and smooth interactions create great user experiences.",
    description: "Optimized database indexes, minimal unnecessary re-renders, lightweight assets, and responsive layouts are fundamental to every project I build."
  },
  {
    number: "04",
    rule: "CLEAR API CONTRACTS.",
    summary: "Consistent response formats, standard HTTP status codes, explicit error messages.",
    description: "Every API endpoint should have predictable request/response schemas with proper status codes and informative error messages for smooth frontend integration."
  },
  {
    number: "05",
    rule: "WRITE CODE FUTURE DEVELOPERS CAN READ.",
    summary: "Self-documenting code with meaningful names and clear comments.",
    description: "Using descriptive variable and function names, keeping functions focused on a single responsibility, and adding comments where complex logic exists."
  },
  {
    number: "06",
    rule: "NEVER STOP LEARNING & ADAPTING.",
    summary: "Continuous curiosity is the hallmark of a great engineer.",
    description: "The software industry evolves constantly. I actively explore new frameworks, study architectural patterns, and continuously improve my problem-solving skills."
  },
  {
    number: "07",
    rule: "SECURITY FROM THE START.",
    summary: "Validate inputs, protect sensitive data, sanitize queries.",
    description: "Prepared SQL statements, password hashing with bcrypt, secure JWT handling, and input sanitization should be implemented from the very beginning."
  },
  {
    number: "08",
    rule: "ATTENTION TO DETAIL.",
    summary: "Small details make the difference between good and exceptional software.",
    description: "From consistent button alignments and smooth transitions to error edge cases and clean console logs, I care deeply about crafting polished applications."
  }
];

export const projectsData = [
  {
    id: "clothigo",
    title: "CLOTHIGO — MULTI-BRANCH POS & E-COMMERCE",
    subtitle: "Retail Management & Real-Time Stock Engine",
    category: "web",
    featured: true,
    image: "img/clothigo.png",
    demo: "https://www.clothigo.com/",
    github: "",
    technologies: ["Angular", "Nest JS", "MongoDB", "Tailwind CSS", "RESTful API"],
    problem: "Fashion retail stores needed an integrated system for multi-branch inventory tracking, fast cashier POS checkouts, and online order management without stock desync.",
    solution: "Engineered a multi-branch inventory architecture with NestJS and MongoDB. Implemented real-time stock sync, role-based authorization, high-performance paginated data tables with instant filtering, and responsive Angular UI.",
    architecture: [
      "NestJS Modular Backend with Dependency Injection",
      "MongoDB aggregation pipelines for inventory queries",
      "Role-based access control (Cashier, Branch Manager, Admin)",
      "Reactive Angular state handling"
    ],
    metrics: "Multi-branch synchronization with fast sub-100ms response times."
  },
  {
    id: "trustpoint",
    title: "TRUSTPOINT PHARMA — E-COMMERCE PLATFORM",
    subtitle: "Full-Stack Pharmaceutical Platform & Medicine Marketplace",
    category: "web",
    featured: true,
    image: "img/trust.png",
    demo: "https://www.trustpointpharma.com/",
    github: "",
    technologies: ["Angular", "Nest JS", "MongoDB", "Node.js", "Payment Gateway"],
    problem: "Pharmacy operations required prescription upload handling, automated invoice generation, real-time customer notifications, and secure payment processing.",
    solution: "Developed a full-stack pharma eCommerce platform featuring automated PDF reports, background job scheduling for order tracking, multi-gateway payment integration, and encrypted records.",
    architecture: [
      "Nest.js asynchronous background jobs for invoice & email dispatch",
      "Secure tokenized checkout flow with payment reconciliation",
      "Multi-category medicine and inventory management system",
      "Strict data validation rules for medicine dosage"
    ],
    metrics: "End-to-end automated invoice dispatch & secure checkout."
  },
  {
    id: "boiparibar",
    title: "BOI-PORIBAR — DIGITAL BOOK ECOSYSTEM",
    subtitle: "Cross-Platform E-Commerce & In-App EPUB/PDF Reader",
    category: "web",
    featured: true,
    image: "img/boiparibar.png",
    demo: "https://www.boiporibar.com/",
    github: "",
    technologies: ["Angular", "Capacitor", "Nest JS", "MongoDB", "EPUB/PDF Engine"],
    problem: "Book readers needed a unified platform for purchasing physical books as well as reading digital books seamlessly across desktop and mobile screens.",
    solution: "Engineered a cross-platform progressive application using Angular and Capacitor. Integrated an in-app EPUB/PDF reader engine with customizable typography, bookmarks, instant cart checkout, and real-time package tracking.",
    architecture: [
      "Capacitor mobile wrapper for hybrid native Android deployment",
      "Optimized client-side rendering for heavy EPUB/PDF document streams",
      "NestJS catalog microservice with full-text search indexing",
      "Cart persistence & offline sync capabilities"
    ],
    metrics: "Seamless cross-device reading experience & mobile responsiveness."
  },
  {
    id: "technique",
    title: "TECHNIQUE PUBLICATION — PUBLISHER PORTAL",
    subtitle: "Educational Book Publishing & Online Bookstore",
    category: "web",
    featured: true,
    image: "img/tpl.png",
    demo: "https://www.tpl.com.bd/",
    github: "",
    technologies: ["Angular", "Nest JS", "MongoDB", "CSS3", "REST APIs"],
    problem: "Educational publisher required an intuitive digital bookstore capable of managing thousands of book editions, author profiles, seasonal discounts, and bulk orders.",
    solution: "Delivered an e-commerce architecture optimized for SEO, fast catalog exploration, dynamic coupon code engine, and streamlined admin panel for publishing new catalogs.",
    architecture: [
      "Dynamic catalog filtering by curriculum, grade, and author",
      "Admin CRUD interface with bulk image upload pipelines",
      "High-speed server responses via cached MongoDB queries",
      "Automated order dispatch notices for logistics teams"
    ],
    metrics: "Production bookstore serving thousands of students & institutions."
  },
  {
    id: "artiland",
    title: "ARTILAND POS — RETAIL POINT OF SALE",
    subtitle: "Point-of-Sale System for Clothing Brand",
    category: "web",
    featured: true,
    image: "img/artiland.png",
    demo: "https://adminpos.artiland.clothing/",
    github: "",
    technologies: ["Angular", "Nest JS", "MongoDB", "Thermal Printer API", "CSS"],
    problem: "Fast-paced clothing boutique needed a barcode-ready, keyboard-friendly POS system to process checkouts in seconds and prevent stock mismatches.",
    solution: "Designed and deployed a specialized POS interface featuring hotkey shortcuts, instant barcode scanning support, receipt thermal printer integration, and daily revenue ledger analytics.",
    architecture: [
      "Hardware thermal printer integration & receipt formatting",
      "Keyboard-first cashier checkout UI for rapid throughput",
      "Real-time stock depletion hooks upon invoice generation",
      "Daily shift closing & cash drawer discrepancy auditor"
    ],
    metrics: "Fast checkout transaction completion speed."
  },
  {
    id: "thesis",
    title: "ACADEMIC THESIS PORTAL",
    subtitle: "University Research Workflow & Student Evaluation Portal",
    category: "web",
    featured: false,
    image: "",
    demo: "https://academic-thesis-portal.vercel.app/",
    github: "https://github.com/tasminoni/Academic-Thesis-Portal",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind"],
    problem: "University departments suffered from disorganized email chains for supervisor selection, proposal submissions, peer reviews, and grading defense sessions.",
    solution: "Built a centralized web portal streamlining the complete thesis lifecycle. Enabled student-supervisor matching, milestone submission uploads, blind evaluation rubrics, and automated grading dashboards.",
    architecture: [
      "Multi-role RBAC: Student, Faculty Supervisor, Department Head",
      "Milestone-based document upload pipeline with status tracking",
      "Defense scheduling and evaluation rubric calculation engine",
      "Express.js REST API with comprehensive input validation"
    ],
    metrics: "Streamlined thesis workflow for university students & faculty."
  },
  {
    id: "neighbor",
    title: "NEIGHBOR MANAGEMENT SYSTEM",
    subtitle: "Community Management, Billing & Resident Portal",
    category: "web",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/Neighbor-Management-System",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3"],
    problem: "Residential communities lacked a unified platform for tracking monthly utility dues, maintenance requests, visitor logs, and committee elections.",
    solution: "Engineered a Java Spring Boot application with relational MySQL schema enforcing ACID transactions for financial ledger integrity and resident records.",
    architecture: [
      "Spring Boot MVC Architecture with Spring Security",
      "Relational MySQL database with strict foreign key constraints",
      "Automated monthly maintenance dues ledger generation",
      "Role-based community member and security guard dashboards"
    ],
    metrics: "100% financial transaction accuracy via Spring ACID transactions."
  },
  {
    id: "tolet",
    title: "TO-LET MANAGEMENT SYSTEM",
    subtitle: "Property Rental Platform & Listing Directory",
    category: "web",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/To-Let-Management-System",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    problem: "Homeowners and prospective tenants struggled with opaque rental listings, unverified middle-men, and disorganized rental agreement archives.",
    solution: "Built a direct house rental web portal allowing landlords to list properties with geo-tags and amenities while enabling tenants to filter, schedule viewings, and generate lease drafts.",
    architecture: [
      "PHP MVC architecture with secure PDO database connections",
      "Multi-filter search engine (price, bedroom count, location)",
      "Image upload handler with client-side compression",
      "Direct contact messaging between owner and renter"
    ],
    metrics: "Direct owner-tenant connection platform."
  },
  {
    id: "whatsapp",
    title: "WHATSAPP CLONE — REAL-TIME CHAT",
    subtitle: "Instant Web Messaging Application with WebSockets",
    category: "web",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/Whatsapp-Clone",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    problem: "Building a high-concurrency real-time messaging application with instant message updates and room support.",
    solution: "Constructed a full-featured real-time chat application with room creation, active typing indicators, instant message delivery, and encrypted media sharing.",
    architecture: [
      "WebSocket two-way communication for real-time chat delivery",
      "React state store for optimistic message rendering",
      "MongoDB message archive with indexed timestamp lookups",
      "Online/offline user presence tracking"
    ],
    metrics: "Instant real-time message propagation."
  },
  {
    id: "secureuser",
    title: "SECURE USER AUTHENTICATION SYSTEM",
    subtitle: "User Security & Session Management System",
    category: "web",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/Secure-User-System",
    technologies: ["PHP", "MySQL", "Bcrypt", "CSRF Protection", "Session Security"],
    problem: "Vulnerabilities like SQL injection, CSRF, and session hijacking in unhardened web authentication scripts.",
    solution: "Built a security-focused authentication system implementing battle-tested patterns: CSRF tokens, secure HTTP-only cookies, password rate limiting, and password complexity enforcement.",
    architecture: [
      "Bcrypt hashing with high salt work factor",
      "Strict anti-CSRF token verification on all POST requests",
      "Prepared statements preventing SQL injection vectors",
      "Account lockout mechanism following repeated failed login attempts"
    ],
    metrics: "Secure authentication architecture."
  },
  {
    id: "towerdefense",
    title: "3D TOWER DEFENSE GAME",
    subtitle: "Interactive 3D Strategy Game with OpenGL",
    category: "game",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/3D-Tower-Defense-Game",
    technologies: ["OpenGL", "C++", "3D Math", "Shader Programming"],
    problem: "Real-time 3D object rendering, collision detection, and enemy pathfinding in graphical environments.",
    solution: "Developed an interactive 3D tower defense game with OpenGL shaders, custom camera matrices, dynamic lighting calculations, and wave spawning algorithms.",
    architecture: [
      "Custom vertex and fragment GLSL shaders",
      "A* pathfinding algorithm for creep wave navigation",
      "Real-time bounding box collision detection system",
      "Smooth 60FPS render loop with delta-time synchronization"
    ],
    metrics: "Smooth 60 FPS performance."
  },
  {
    id: "weatherai",
    title: "WEATHER TYPE PREDICTION ML",
    subtitle: "Supervised Machine Learning Classification Model",
    category: "ml/ai",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/Weather-type-prediction",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    problem: "Classifying meteorological conditions from multi-dimensional atmospheric sensor data.",
    solution: "Built, trained, and benchmarked multiple supervised classification models (Random Forest, SVM, Decision Trees) to predict weather conditions based on humidity, temperature, and pressure.",
    architecture: [
      "Data preprocessing, outlier imputation, and feature scaling",
      "K-Fold cross-validation and hyperparameter tuning with GridSearchCV",
      "Confusion matrix and ROC-AUC performance visualization",
      "Exported model pipeline for inference"
    ],
    metrics: "High classification accuracy across test sets."
  },
  {
    id: "shiritori",
    title: "SHIRITORI WORD GAME",
    subtitle: "Interactive Japanese-Inspired Word Chain Game",
    category: "game",
    featured: false,
    image: "",
    demo: "https://shiritori-game-ruby.vercel.app/",
    github: "https://github.com/tasminoni/Shiritori-Game",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
    problem: "Building an engaging vocabulary game enforcing strict word chain rules with instant validation.",
    solution: "Created an animated React web game with instant phoneme validation, score multipliers, combo streaks, and responsive keyboard input.",
    architecture: [
      "Dynamic rule validator checking leading/trailing character matching",
      "Local storage high score persistence and streak mechanics",
      "Clean animations and audio feedback cues",
      "Instant cloud deployment on Vercel"
    ],
    metrics: "Instantaneous rule evaluation & engaging UX."
  },
  {
    id: "rfid",
    title: "RFID AUTOMATED TOLL COLLECTION",
    subtitle: "Hardware IoT Automated Highway Toll System",
    category: "others",
    featured: false,
    image: "",
    demo: "https://www.youtube.com/watch?v=RaxV_tCrVXI",
    github: "",
    technologies: ["Arduino", "RFID Sensor", "ESP32", "C++", "Hardware IoT"],
    problem: "Highway toll plaza congestion caused by manual cash collection delays.",
    solution: "Built an embedded IoT toll collection system utilizing RFID tag scanners, servo-actuated barriers, LCD displays, and ESP32 wireless balance debiting.",
    architecture: [
      "High-frequency RFID tag reader integration",
      "Automated servo gate barrier state machine",
      "Digital display balance deduction visualizer",
      "Buzzer notification and security breach alarm"
    ],
    metrics: "Automated contactless toll deduction in under 1 second."
  },
  {
    id: "smarthelmet",
    title: "SMART GUARDIAN HELMET",
    subtitle: "Intelligent Rider Safety & Accident Prevention System",
    category: "others",
    featured: false,
    image: "",
    demo: "notdeployed.html",
    github: "https://github.com/tasminoni/Smart-Guardian-Helmet-An-Intelligent-Safety-System-for-Riders",
    technologies: ["C++", "Arduino", "Sensors", "Wireless RF", "Hardware"],
    problem: "High motorcycle accident injuries caused by unfastened helmets and delayed emergency location notifications.",
    solution: "Engineered an intelligent helmet system requiring helmet buckle detection and alcohol breath analyzer clearance before allowing bike ignition, with crash shock sensors for emergency distress.",
    architecture: [
      "Infrared & pressure sensor helmet wearing verification",
      "MQ-3 alcohol vapor sensor engine lockout relay",
      "Impact accelerometer for crash detection triggers",
      "Wireless RF transmitter link between helmet and bike controller"
    ],
    metrics: "Automated ignition lockout preventing unsafe riding."
  }
];

export const experienceData = [
  {
    role: "JUNIOR SOFTWARE ENGINEER",
    company: "UNITED GROUP (ORANGE SOLUTIONS LTD.)",
    duration: "JUNE 2026 — PRESENT",
    location: "Dhaka, Bangladesh",
    type: "FULL-TIME",
    description: "Developing software applications for United Group's various business units. Working with modern web stacks, building backend modules, and collaborating with engineering team members.",
    tags: ["Flutter Developer", "Business Applications", "PHP", "MSSQL", "MYSQL"]
  },
  {
    role: "JUNIOR SOFTWARE ENGINEER",
    company: "SOFTLAB IT",
    duration: "OCTOBER 2025 — APRIL 2026",
    location: "Dhaka, Bangladesh",
    type: "FULL-TIME",
    description: "Developed e-commerce platforms and POS retail applications. Handled frontend & backend feature implementation, database schema modeling, and application deployment.",
    tags: ["E-Commerce Systems", "POS Engines", "Angular & NestJS", "MongoDB", "REST APIs"]
  },
  {
    role: "BUSINESS DEVELOPMENT INTERN",
    company: "YOUTH SCHOOL FOR SOCIAL ENTREPRENEURS (YSSE)",
    duration: "DECEMBER 2023 — MAY 2024",
    location: "Remote",
    type: "INTERNSHIP",
    description: "Participated in virtual internship program gaining practical experience in project coordination, strategic planning, and team collaboration.",
    tags: ["Project Coordination", "Team Collaboration", "Strategic Planning"],
    certImage: "certificates/ysse.png"
  }
];

export const educationData = [
  {
    degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE & ENGINEERING",
    institution: "BRAC UNIVERSITY",
    duration: "SEPTEMBER 2021 — SEPTEMBER 2025",
    cgpa: "3.62 / 4.00",
    description: "Studied core computer science curriculum including Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, and Machine Learning.",
    highlights: ["CGPA 3.62 / 4.00", "CSE Graduate", "Strong Foundation in Software Engineering"]
  },
  {
    degree: "HIGHER SECONDARY CERTIFICATE (HSC) — SCIENCE",
    institution: "RAJSHAHI GOVT. CITY COLLEGE",
    duration: "2019 — 2020",
    cgpa: "GPA 5.00 / 5.00",
    description: "Completed higher secondary education in Science group with GPA 5.00.",
    highlights: ["GPA 5.00 / 5.00", "Science Group"]
  },
  {
    degree: "SECONDARY SCHOOL CERTIFICATE (SSC) — SCIENCE",
    institution: "RAJSHAHI COLLEGIATE SCHOOL",
    duration: "2018",
    cgpa: "GPA 5.00 / 5.00",
    description: "Completed secondary education in Science group with GPA 5.00.",
    highlights: ["GPA 5.00 / 5.00", "Science Group"]
  }
];

export const faqData = [
  {
    question: "WHAT ARE YOUR PRIMARY PROGRAMMING LANGUAGES & FRAMEWORKS?",
    answer: "My primary technical stack includes Flutter ,JavaScript/TypeScript with React.js and Angular on the frontend, and PHP, Node.js, Nest.js, Express.js, Java Spring Boot, and Python on the backend. For data persistence, I work extensively with MSSQL and MySQL."
  },
  {
    question: "WHAT KIND OF APPLICATIONS HAVE YOU WORKED ON?",
    answer: "I have built and contributed to multi-branch retail POS systems (Clothigo, Artiland POS), pharma eCommerce applications (TrustPoint Pharma), digital book reading and commerce platforms (Boi-Poribar), academic management portals, real-time chat clones, and hardware IoT projects."
  },
  {
    question: "WHAT IS YOUR EDUCATIONAL BACKGROUND?",
    answer: "I graduated with a Bachelor of Science in Computer Science & Engineering from Brac University with a CGPA of 3.62 / 4.00. Prior to that, I completed my HSC and SSC in Science with GPA 5.00."
  }
];
