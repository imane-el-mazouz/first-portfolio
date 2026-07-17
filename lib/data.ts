export const profile = {
  title: "Full Stack Developer & Junior Data Engineer",
  bio: "Full Stack Developer & Junior Data Engineer, driven by designing web solutions and leveraging data. I have skills in application development, database management, data processing and Big Data technologies, with a strong analytical mindset and eagerness to learn.",
};

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Confidential",
    period: "04/07/2025 — Present",
    type: "Permanent contract",
    points: [
      "Design and development of Full Stack web applications.",
      "Creation of UI/UX mockups in Figma.",
      "Drafting of functional and technical specifications aligned with client needs.",
      "Active participation in the Agile Scrum process: Daily Scrum, sprint planning and reviews.",
      "Deployment of applications to test and production, monitoring updates and maintenance.",
    ],
    current: true,
    stack: ["Java", "Laravel", "Next.js", "React", "UML", "Figma", "Jira", "MySQL", "Agile Scrum", "Full Stack"],
  },
  {
    role: "Full Stack Developer",
    company: "Eryx — Rabat",
    period: "02/17/2025 — 03/28/2025",
    type: "IT support system",
    points: [
      "Analysis and UML modeling.",
      "Spring Boot backend, secured with Spring Security and JWT, email sending with JavaMailSender.",
      "Interactive, responsive front-end interfaces with Angular, CSS, Bootstrap and PrimeNG.",
    ],
    current: false,
    stack: ["Spring Boot", "Spring Security", "JWT", "Angular", "CSS", "Bootstrap", "PrimeNG", "UML"],
  },
  {
    role: "Full Stack Developer",
    company: "CID — Rabat",
    period: "10/08/2024 — 01/07/2025",
    type: "Business management application",
    points: [
      "Analysis and UML modeling",
      "Design and mockups in Figma.",
      "UI/UX interfaces with Angular, Angular Material, CSS, SCSS, Bootstrap, PrimeNG.",
      "Security via Spring Security and JWT.",
      "Unit tests with JUnit and Mockito, code quality analysis with SonarQube.",
      "Docker containerization for multi-environment deployment.",
      "Migration of data from Excel to database using Apache POI.",
      "Writing technical documentation (architecture, API, design choices).",
    ],
    current: false,
    stack: [
      "Spring Boot",
      "Angular",
      "Angular Material",
      "CSS",
      "SCSS",
      "Bootstrap",
      "PrimeNG",
      "Spring Security",
      "JWT",
      "JUnit",
      "Mockito",
      "SonarQube",
      "Docker",
      "Apache POI",
      "UML",
      "Figma",
    ],
  },
  {
    role: "Web and Mobile Web Developer",
    company: "ENAA — Béni Mellal",
    period: "07/02/2024 — 10/09/2024",
    type: "Final year project: Moroccan tourist discovery platform",
    points: [
      "Analysis and UML modeling.",
      "Design and mockups in Figma.",
      "Development with Spring Boot to build REST APIs for managing users, events, hotels, excursions, bookings, reviews and favorites.",
      "Frontend development: building UI/UX interfaces with Angular, Angular Material, CSS, SCSS, Bootstrap, PrimeNG, HTML.",
      "Security: implementation of Spring Security with JWT to secure user access and protect sensitive data.",
      "Testing: unit tests with JUnit and Mockito to validate backend features, use of SonarQube for code analysis and quality improvement.",
      "Containerization and deployment: use of Docker to containerize backend and frontend services, easing multi-environment deployment.",
      "Documentation: writing technical documentation covering architecture, APIs and design choices.",
    ],
    current: false,
    stack: [
      "UML",
      "Figma",
      "Spring Boot",
      "Angular",
      "Angular Material",
      "CSS",
      "SCSS",
      "Bootstrap",
      "PrimeNG",
      "HTML",
      "Spring Security",
      "JWT",
      "JUnit",
      "Mockito",
      "SonarQube",
      "Docker",
    ],
  },
  {
    role: "Final Year Project",
    company: "ONEE — Béni Mellal",
    period: "04/01/2022 — 05/31/2022",
    type: "Graduation internship",
    points: [
      "Analysis and modeling of control systems for electrical substations.",
      "Implementation of digital solutions for automation and equipment management.",
      "Use of software tools for simulation and validation of control systems.",
    ],
    current: false,
    stack: ["MPLAB", "Arduino", "Proteus ISIS", "AutoCAD"],
  },
];

export const skillGroups = [
  {
    category: "Backend",
    icon: "server",
    items: [
      "Java",
      "Java EE",
      "Spring",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST API",
      "Microservices",
      "Spring Cloud Gateway",
      "Eureka",
      "MVC",
      "Python",
      "C",
    ],
  },
  {
    category: "Frontend",
    icon: "display",
    items: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Big Data & Data Engineering",
    icon: "diagram-3-fill",
    items: ["Hadoop", "Apache Spark (PySpark)"],
  },
  {
    category: "BI & Data Science",
    icon: "bar-chart-line",
    items: [
      "Tableau",
      "Data Visualization",
      "Machine Learning",
      "Deep Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "SQL Server", "PostgreSQL", "NoSQL", "Flyway"],
  },
  {
    category: "DevOps",
    icon: "tools",
    items: ["Docker", "Kubernetes", "SonarQube", "Qodana"],
  },
  {
    category: "Analysis & Modeling",
    icon: "diagram-2",
    items: ["UML", "Merise"],
  },
  {
    category: "Tools",
    icon: "wrench-adjustable",
    items: [
      "Git",
      "Maven",
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Postman",
      "Swagger",
      "Figma",
      "Lucidchart",
      "Jira",
      "Trello",
      "Canva",
      "Google Colab",
    ],
  },
  {
    category: "Electronics Development",
    icon: "cpu",
    items: ["Proteus ISIS", "MATLAB", "AutoCAD", "ArchiCAD", "MPLAB", "SolidWorks"],
  },
];

export const languages = [
  { name: "Arabic", level: "Native language" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const softSkills = ["Time management", "Adaptability", "Communication", "Teamwork"];

export const interests = ["Travel", "Music"];

export const services = [
  {
    icon: "clipboard-data",
    title: "Data Engineering & Big Data",
    description:
      "Collection, processing and structuring of large-scale data with Hadoop and Apache Spark, for reliable and usable pipelines.",
  },
  {
    icon: "bar-chart-line",
    title: "Business Intelligence",
    description:
      "Data analysis and visualization with Tableau and Python, turning data into actionable dashboards and insights.",
  },
  {
    icon: "diagram-3",
    title: "UML Design",
    description:
      "Creation of UML diagrams to model the processes, structures and interactions of your applications.",
  },
  {
    icon: "code-slash",
    title: "Backend Development",
    description:
      "Robust, high-performance architectures for data processing, API integration and database management.",
  },
  {
    icon: "display",
    title: "Frontend Development",
    description:
      "Modern, interactive interfaces, optimized for a smooth user experience across all devices.",
  },
  {
    icon: "palette",
    title: "UX/UI Design",
    description:
      "Design of intuitive, aesthetic user interfaces, focused on an optimal user experience.",
  },
  {
    icon: "gear-wide-connected",
    title: "Technical Project Management",
    description:
      "Planning, tracking and managing technical projects, ensuring on-time delivery.",
  },
  {
    icon: "tools",
    title: "DevOps",
    description:
      "Implementation of DevOps practices to optimize application development, deployment and maintenance.",
  },
];

export const technologies = [
  { name: "Java", img: "/img/technologies/java.webp" },
  { name: "Angular", img: "/img/technologies/ang.webp" },
  { name: "Spring Boot", img: "/img/technologies/spring.png" },
  { name: "Docker", img: "/img/technologies/docker.png" },
  { name: "MySQL", img: "/img/technologies/mysql.png" },
  { name: "PostgreSQL", img: "/img/technologies/postgres.png" },
  { name: "Trello", img: "/img/technologies/trello.png" },
  { name: "Jira", img: "/img/technologies/jira.png" },
  { name: "Figma", img: "/img/technologies/figma.png" },
  { name: "StarUML", img: "/img/technologies/uml.png" },
  { name: "Chart.js", img: "/img/technologies/chartjs.png" },
  { name: "HTML", img: "/img/technologies/html.png" },
  { name: "CSS", img: "/img/technologies/css.png" },
  { name: "JavaScript", img: "/img/technologies/js.png" },
  { name: "React", img: "/img/technologies/react.png" },
  { name: "Kubernetes", img: "/img/technologies/kubernetes.png" },
  { name: "SonarQube", img: "/img/technologies/sonar.png" },
  { name: "Jenkins", img: "/img/technologies/jenkins.png" },
  { name: "C", img: "/img/technologies/c.png" },
  { name: "Canva", img: "/img/technologies/canva.jpg" },
  { name: "GitHub", img: "/img/technologies/github.jpeg" },
  { name: "Git", img: "/img/technologies/git.png" },
];

export type PortfolioCategory = "Full Stack" | "Back End" | "Front End" | "Data & AI";

export const portfolioItems: {
  title: string;
  description: string;
  tech: string[];
  github: string;
  category: PortfolioCategory;
}[] = [
  {
    title: "Diabets Tracker",
    description:
      "Full application for blood glucose tracking built with Angular and Spring Boot.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Diabets_Tracker_Angular.git",
    category: "Full Stack",
  },
  {
    title: "E-Bank Solution",
    description:
      "Secure banking platform for managing accounts and transactions.",
    tech: ["Spring Boot", "Angular", "Spring Security", "MySQL"],
    github: "https://github.com/votreutilisateur/E-Bank_Solution",
    category: "Full Stack",
  },
  {
    title: "Tourist Discovery Platform",
    description:
      "Platform for exploring tourist attractions with Google Maps integration.",
    tech: ["Spring Boot", "Angular", "Google Maps API", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Decouverte_touristique.git",
    category: "Full Stack",
  },
  {
    title: "Construction X-pert",
    description: "Construction project management platform built with microservices.",
    tech: ["Spring Boot", "Microservices", "Docker", "MySQL"],
    github:
      "https://github.com/imane-el-mazouz/ConstructionXpert-Services-Microservices-Partie-2-.git",
    category: "Back End",
  },
  {
    title: "IT Support App",
    description:
      "IT equipment management, issue tracking, support tickets and performance reports.",
    tech: ["Spring Boot", "Angular", "MySQL", "JWT"],
    github: "https://github.com/imane-el-mazouz/IT_support_App.git",
    category: "Back End",
  },
  {
    title: "Mégarama Cinema Ticket",
    description:
      "Cinema ticket booking and purchase platform with showtime selection and secure online payment.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/imane-el-mazouz/cinema-ticket-megarama.git",
    category: "Back End",
  },
  {
    title: "Sunset Paradise Hotel",
    description:
      "Hotel booking platform offering luxurious rooms and personalized experiences.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Sunset_Paradise_hotel.git",
    category: "Back End",
  },
  {
    title: "Event Management",
    description:
      "Complete platform for planning, managing and promoting professional and personal events.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Event_Management.git",
    category: "Back End",
  },
  {
    title: "Weather App",
    description: "Intuitive application for checking real-time weather forecasts.",
    tech: ["JavaScript", "Weather API", "HTML/CSS"],
    github: "https://github.com/imane-el-mazouz/WeatherApp-P2.git",
    category: "Front End",
  },
  {
    title: "Quiz Game",
    description: "Interactive quiz game to test your knowledge on different topics.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/imane-el-mazouz/QUIZ_GAME.git",
    category: "Front End",
  },
  {
    title: "Student Management",
    description:
      "Management of personal information, grades, absences and other academic aspects.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Gestion_des_etudiants.git",
    category: "Back End",
  },
  {
    title: "Employee Directory",
    description:
      "Centralized platform for managing employee information, with search and filtering.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/imane-el-mazouz/Annuaire_d_Employes.git",
    category: "Back End",
  },
  {
    title: "Intern Management",
    description:
      "Platform for managing interns and tracking internships, with a Spring Boot REST API and a React.js interface.",
    tech: ["Spring Boot", "React.js", "MySQL", "Spring Security", "JPA"],
    github: "https://github.com/imane-el-mazouz",
    category: "Full Stack",
  },
  {
    title: "Jewelry Store Management",
    description:
      "Web application for jewelry store management with email notifications and secured access.",
    tech: ["Java", "Spring Boot", "Spring Security", "JavaMailSender", "Angular"],
    github: "https://github.com/imane-el-mazouz",
    category: "Full Stack",
  },
  {
    title: "Image Detection with Deep Learning",
    description:
      "Image detection system using Deep Learning and AI for automated visual recognition.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask/FastAPI"],
    github: "https://github.com/imane-el-mazouz",
    category: "Data & AI",
  },
];

export const education = [
  {
    title: "Specialized Master's Degree in Big Data and Business Intelligence",
    school: "ENSA Kénitra",
    year: "2025 — Present",
    description: "Specialization in data engineering and business intelligence",
    points: [
      "Large-scale data processing and analysis (Hadoop, Spark)",
      "Business Intelligence and data visualization with Tableau",
      "Machine learning and deep learning applied to business data",
      "Data warehousing and decision-support data modeling",
      "Python for data science (Pandas, NumPy, Scikit-learn)",
      "Applied projects in Big Data and Cloud environments",
    ],
    featured: true,
  },
  {
    title: "Diploma in Web and Mobile Web Development",
    school: "École Numérique Ahmed El Hansali — Simplon",
    year: "01/2024 — 10/2024",
    description: "In-depth training in web and mobile development",
    points: [
      "Development of responsive web applications",
      "Mastery of frontend technologies",
      "Building mobile applications with React Native",
      "Database management for web applications",
      "Deploying applications on cloud platforms",
    ],
    featured: false,
  },
  {
    title:
      "Bachelor's Degree in Science and Technology - Computer, Electronic and Automation Engineering",
    school: "FST Béni Mellal",
    year: "02/2022 — 06/2023",
    description: "BSc",
    points: [
      "In-depth knowledge in computer science, electronics and automation",
      "Skills in programming and embedded systems",
      "Training in networks, sensors and IoT",
      "Development of applications for embedded systems",
      "Technical project management in a multidisciplinary team",
    ],
    featured: false,
  },
  {
    title: "University Diploma in Science and Technology — Electrical / Mechanical Engineering",
    school: "FST Béni Mellal",
    year: "09/2019 — 02/2022",
    description: "University diploma in science and technology, specializing in mechanical and electrical engineering",
    points: [
      "Knowledge in mechanical engineering and mechanical systems design",
      "Skills in electrical engineering, automation and control",
      "Design and maintenance of electromechanical systems",
      "Use of CAD software and simulation tools",
      "Applications of electronics in industrial systems",
    ],
    featured: false,
  },
  {
    title: "Technical Baccalaureate in Mechanical Science and Technology",
    school: "Lycée Technique Mohamed V — Béni Mellal",
    year: "09/2019",
    description: "Baccalaureate diploma in mechanical science and technology",
    points: [
      "Mastery of the fundamentals of mechanical science",
      "Practical applications of physics and mechanics",
      "Introduction to machining and mechanical manufacturing",
      "Knowledge of material strength and thermodynamics",
    ],
    featured: false,
  },
];

export const certificates = [
  {
    title: "Oracle Java Foundations",
    issuer: "Oracle",
    year: "02/2025 — Present",
    icon: "patch-check",
  },
  {
    title: "Foreign Languages Training (EN/FR)",
    issuer: "Altissia Platform",
    year: "07/2023 — 03/2024",
    icon: "translate",
  },
  {
    title: "TOEIC Language Certification",
    issuer: "Université Moulay Slimane Béni Mellal",
    year: "05/2021 — 10/2021",
    icon: "award",
  },
];

export const publications = [
  {
    icon: "award",
    title: "Front-End Development Certification",
    description:
      "Obtained a certification in React, HTML, CSS, JavaScript and Bootstrap, demonstrating mastery of essential technologies for modern Front-End development.",
    link: "https://www.linkedin.com/posts/imane-el-mazouz21_webdevelopment-certificationacquired-css-activity-7260306299970547713-XLE3?utm_source=share&utm_medium=member_desktop",
  },
  {
    icon: "robot",
    title: "Participation in a Generative AI Workshop",
    description:
      "Exploration of the concepts and applications of generative artificial intelligence during an inspiring workshop.",
    link: "https://www.linkedin.com/posts/imane-el-mazouz21_ia-intelligenceartificielle-formation-activity-7262092978385563648-naaf?utm_source=share&utm_medium=member_desktop",
  },
];

export const contactInfo = {
  address: "Rabat, Mobile, Remote",
  phone: "+212 602940569",
  emails: ["imaneelmazouz23@gmail.com"],
  github: "https://github.com/imane-el-mazouz",
  linkedin: "https://www.linkedin.com/in/imane-el-mazouz21/",
};
