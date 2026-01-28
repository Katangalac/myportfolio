/**
 * Données et Labels du portfolio
 * Contient les informations en anglais et français
 */
export const translations = {
  fr: {
    // Navigation - Header
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      name: "Christian Kayembe Katangala",
      title: "Développeur Full-Stack",
      subtitle:
        "Motivé par le développement d’applications web, performantes et maintenables, avec une solide pratique" +
        " " +
        "acquise via des projets concrets et des stages professionnels.",
      cta: "Voir mes projets",
      ctaSecondary: "Me contacter",
    },

    // About Section
    about: {
      tab: {
        overview: "Aperçu",
        about: "À propos",
        experience: "Expériences",
        skills: "Compétences",
        education: "Formation",
        approach: "Méthode",
      },
      skills: {
        title: "Mes Compétences",
        subtitle: "Technologies que je maîtrise",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          tools: "Outils & Cloud",
          other: "Autres",
        },
        skills: {
          frontend: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML/CSS",
            "Framer Motion",
          ],
          backend: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "Authentification(JWT)",
          ],
          tools: [
            "Git",
            "Docker",
            "VS Code",
            "Azure DevOps",
            "Render",
            "Supabase",
          ],
          other: ["Vue", "Blazor(.Net)", "Java"],
        },
      },
      me: {
        title: "Qui suis-je ?",
        description: {
          p1:
            "Développeur web basé au Québec, je transforme des idées en applications web robustes, " +
            "performantes et élégantes. Mon parcours en développement m’a permis d’acquérir une solide " +
            "compréhension des enjeux frontend et backend, ainsi que de l’architecture globale des applications.",

          p2:
            " Ce qui me motive avant tout, c’est la conception d’architectures applicatives fiables, scalables, " +
            "maintenables et résilientes, en m’efforçant de respecter au mieux les bonnes pratiques du développement logiciel." +
            "L’optimisation des performances fait également partie de mes préoccupations, sans jamais compromettre " +
            "la clarté et la qualité du code.",

          p3:
            "Au-delà du code, je maintiens une veille technologique constante afin d’améliorer continuellement " +
            "mes compétences. Je crois fermement en l’importance du travail d’équipe et d’une communication " +
            "claire pour mener à bien des projets de qualité.",
        },
        cta: "Me contacter",
      },
      experience: {
        title: "Expériences Professionnelles",
        sections: {
          project: "Projet",
          tools: "Outils",
          achievements: "Réalisations clés",
        },
        experiences: [
          {
            role: "Stagiaire - Analyste Informatique/Développeur",
            company:
              "Ministère des Transports et de la Mobilité Durable (MTMD)",
            period: "Janvier 2025 - Août 2025",
            projectName: "Plateforme de collecte multicapteurs",
            description:
              "Développement d’une application Web modulaire de collecte et filtrage de données en temps réel, avec stockage local, en base de données et diffusion via MQTT. Solution robuste, maintenable et performante, respectant les bonnes pratiques de développement.",
            tech: ".NET Core, HTML, CSS, Azure DevOps, MQTT, IIS, WireShark",
            achievements: [
              "Analyse des besoins et choix des technologies",
              "Conception de l'architecture (MVC) et de la base de données",
              "Modélisation et formatage des données",
              "Développement du backend et frontend",
              "Implémentation du multi-threading pour la collecte de données en temps réel",
              "Mise en place d’un système de logs",
              "Réalisation de tests unitaires et fonctionnels",
              "Assurance de la qualité du code et respect des normes de sécurité",
              "Mise en place de CI/CD avec Azure DevOps et déploiement via IIS",
              "Rédaction de la documentation technique et des rapports",
            ],
          },
        ],
      },
      education: {
        title: "Formations",
        items: [
          {
            degree: "Baccalauréat en Informatique",
            school: "Université Laval",
            year: "2021 - 2025",
            details: "Concentration en Génie logiciel et Développement Web",
          },
          {
            degree: "Certification Scrum Fundamentals",
            school: "ScrumStudy",
            year: "2026",
            details:
              "Compréhension des principes Scrum et de l’organisation Agile des projets logiciels.",
          },
        ],
      },
      approach: {
        title: "Ma Méthode de Travail",
        items: [
          {
            title: "Approche Stratégique",
            description:
              "Comprendre le problème, analyser les besoins, définir l’architecture, puis développer itérativement.",
          },
          {
            title: "Agile mindset",
            description:
              "Priorisation des fonctionnalités, livraison continue, feedback régulier.",
          },
          {
            title: "Code Propre",
            description:
              "Code maintenable et documenté, respect des conventions et revue de code systématique et refactoring régulier.",
          },
          {
            title: "Communication",
            description:
              "Transparence sur l’avancement et les défis, " +
              "Collaboration étroite avec l’équipe produit et les développeurs.",
          },
        ],
      },
      projectsCompleted: "projets réalisés",
      happyClients: "clients satisfaits",
    },

    // Projects Section
    projects: {
      overview: {
        title: "Mes Projets",
        subtitle: "Découvrez mes réalisations",
        viewDetails: "Voir les détails",
        category: "Catégorie",
        technologies: "Technologies utilisées",
        liveDemo: "Démo en ligne",
        sourceCode: "Code source",
        cta: {
          next: "Projet suivant",
          previous: "Projet précédent",
          moveTo: "Aller au projet",
        },
        filters: {
          all: "Tous",
          web: "Web",
          mobile: "Mobile",
          design: "Design",
        },
        projects: [
          {
            id: 1,
            title: "Application de suivi des projets et tâches",
            imgSrc: "/projectFlow/dashboard.webp",
            category: "Web App / Productivité",
            description:
              "Création et suivi de tâches avec communication en temps réel entre les membres d’équipe.",
            tags: [
              "React",
              "TailwindCSS",
              "PostgreSQL",
              "Zustand",
              "WebSocket",
              "Redis",
            ],
          },
          {
            id: 2,
            title: "Application de collecte de données",
            imgSrc: "/PCMC/schema.png",
            category: "Web App / Data / IoT",
            description:
              "Collecte et gestion en temps réel de données de capteurs routiers avec stockage et diffusion.",
            tags: [
              "Blazor (ASP.NET Core)",
              "Entity Framework Core",
              "SQL",
              "HTML & CSS",
              "IIS",
              "CI/CD",
            ],
          },
          {
            id: 3,
            title: "Application de partage d'images",
            category: "Web App / Sociale",
            imgSrc: "/Uimages/all-imgs.webp",
            description:
              "Publier, liker et commenter des images pour favoriser l’interaction entre utilisateurs.",
            tags: [
              "Next.js",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Vercel",
              "CI/CD",
              "Docker",
            ],
          },
          {
            id: 4,
            title: "Application de suivi des restaurants",
            category: "Web App / Sociale",
            imgSrc: "/Ufood/uf-home.webp",
            description:
              "Découverte, notation et organisation de visites de restaurants avec suivi des listes et activités d’autres utilisateurs.",
            tags: ["Vue.js", "TailwindCSS", "HTML & CSS", "Google Maps API"],
          },
        ],
      },

      details: {
        titles: {
          confidential: "Confidentiel! Infos limitées.",
          tech: "Technologies utilisées",
          skills: "Compétences acquises",
        },
        cta: {
          web: "Voir le site",
          code: "Code source",
          next: "Image suivante",
          previous: "Image suivante",
          moveTo: "Aller à l'image",
        },
        items: [
          {
            id: 1,
            title: "Application de suivi des projets et tâches",
            description:
              "Application de gestion des projets et tâches permettant de suivre la progression, gérer les priorités et communiquer en temps réel avec les coéquipiers. Le backend a été conçu avec une architecture en couches afin de garantir un code clair, maintenable et facilement extensible. ",
            technologies: [
              "React",
              "Typescript",
              "Node.js",
              "Express",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Redis",
              "WebSocket",
            ],
            skills: [
              "Temps réel avec WebSocket",
              "Zustand",
              "Authentification avec JWT",
              "Redis",
              "Resend (Email)",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/katangalac/projectManager",
            images: [
              { src: "/projectFlow/project-page.webp", alt: "project-page" },
              {
                src: "/projectFlow/project-detail.webp",
                alt: "project-detail",
              },
              { src: "/projectFlow/task-kanban.webp", alt: "task-kanban" },
              { src: "/projectFlow/task-detail.webp", alt: "task-detail" },
              { src: "/projectFlow/conv.webp", alt: "conversations" },
              { src: "/projectFlow/scheduler.webp", alt: "scheduler" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
          {
            id: 2,
            title: "Plateforme de collecte de données",
            description:
              "Application multithreadée et temps réel dédiée à la gestion de capteurs, incluant la collecte, " +
              "le filtrage, le stockage et la diffusion des données, avec carte interactive.\n" +
              "Collecte journalière et automatique des rapports avec possibilité de collecter mauellement les rapports d'une date spécifique." +
              "La plateforme est entièrement paramétrable et repose sur une architecture modulaire permettant l’ajout facile de nouveaux capteurs.",
            technologies: [
              "Blazor (ASP.NET Core)",
              "JavaScript",
              "Entity Framework Core",
              "CI/CD",
              "HTML & CSS",
              "IIS",
              "SQL",
              "Leaflet",
              "Azure DevOps",
            ],
            skills: [
              "Développement IoT",
              "Temps réel",
              "Gestion de projet",
              "Architecture modulaire, robuste et évolutive",
              "Déploiement sur IIS",
              "Tests automatisés",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/project",
            images: [
              { src: "/PCMC/dashboard.webp", alt: "dashboard" },
              { src: "/PCMC/sensor-detail.webp", alt: "sensor-detail" },
              { src: "/PCMC/Collect-1.webp", alt: "data-collect-1" },
              { src: "/PCMC/Collect-2.webp", alt: "data-collect-2" },
              { src: "/PCMC/setting-1.webp", alt: "app-setting-1" },
              { src: "/PCMC/Setting-2.webp", alt: "app-setting-2" },
              { src: "/PCMC/map.webp", alt: "map" },
            ],
            confidential: true,
            deploy: false,
            code: false,
          },
          {
            id: 3,
            title: "Application de partage d'images",
            description:
              "Plateforme de partage d’images permettant aux utilisateurs de publier, liker et commenter des contenus, avec mentions d’utilisateurs et hashtags.\n" +
              "L’application favorise l’interaction et l’engagement autour des images.",
            technologies: [
              "Next.js",
              "TypeScript",
              "Clerk",
              "tRPC",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Uploadcare",
              "CI/CD",
              "Docker",
              "Vercel Analytics",
              "Sentry",
            ],
            skills: [
              "Authentification OAuth (Clerk)",
              "Utilisation d'ORM",
              "Optimisation des performances web",
              "Conteneurisation",
              "Monitoring d'application",
              "Pipeline CI/CD avec GitHub Actions",
              "Responsive design",
              "Déploiement sur Vercel",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Katangalac/Images-Publication-App",
            images: [
              { src: "/Uimages/upload-page.webp", alt: "upload-page" },
              { src: "/Uimages/img-upload.webp", alt: "image-uploading" },
              { src: "/Uimages/user-profile.webp", alt: "uer profile" },
              { src: "/Uimages/img-det.webp", alt: "image details" },
              { src: "/Uimages/comment-sec.webp", alt: "comment section" },
              { src: "/Uimages/img-form.webp", alt: "image form" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
          {
            id: 4,
            title: "Application de suivi des restaurants",
            description:
              "Le site permet aux utilisateurs de parcourir un catalogue de restaurants, les noter et créer des listes de favoris. Il permet également de suivre les visites d'autres utilisateurs et propose une carte interactive avec itinéraires.",
            technologies: [
              "Vue.js",
              "JavaScript",
              "TailwindCSS",
              "HTML & CSS",
              "Google Maps API",
            ],
            skills: [
              "Consommation d'API REST",
              "UI/UX Design",
              "Gestion sécurisée de sessions",
              "Gestion d'état avec des stores",
              "Intégration API (Google Maps)",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Katangalac/Restaurant-Tracking-App",
            images: [
              { src: "/Ufood/res-list.webp", alt: "restaurants list" },
              { src: "/Ufood/res-map.webp", alt: "restaurants map" },
              { src: "/Ufood/res-det.webp", alt: "restaurant detail" },
              { src: "/Ufood/res-direct.webp", alt: "restaurant direction" },
              { src: "/Ufood/user-prof.webp", alt: "user profile" },
              { src: "/Ufood/rate-visit.webp", alt: "visit rating" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
        ],
      },
    },

    // Contact Section
    contact: {
      title: "Contactez-moi",
      subtitle: "Discutons de votre prochain projet",
      cta: "Envoyer un message",
      name: "Nom",
      namePlaceholder: "Christian Kayembe Katangala",
      email: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      subject: "Sujet",
      subjectPlaceholder: "Sujet de votre message",
      message: "Message",
      messagePlaceholder: "Votre message ici...",
      send: "Envoyer",
      sending: "Envoi en cours...",
      successMessage: "Message envoyé avec succès !",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
      location: "Localisation",
      phone: "Téléphone",
      availability: "Disponibilité",
      availableForWork: "Disponible pour de nouveaux projets",
    },

    // Footer
    footer: {
      titles: {
        navigation: "Navigation",
        contact: "Connectons-nous",
      },
      name: "Christian Kayembe Katangala",
      rights: "Tous droits réservés",
      madeWith: "Fait avec",
      by: "par",
      social: "Réseaux sociaux",
      quickLinks: "Liens rapides",
    },

    // Common
    common: {
      loading: "Chargement...",
      error: "Erreur",
      learnMore: "En savoir plus",
      viewMore: "Voir plus",
      close: "Fermer",
      previous: "Précédent",
      next: "Suivant",
      language: "Langue",
    },
  },

  en: {
    // Navigation - Header
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      name: "Christian Kayembe Katangala",
      title: "Full-Stack Developer",
      subtitle:
        "Driven to build performant and maintainable web applications, with strong practical experience gained through real-world projects and professional internships.",
      cta: "View my projects",
      ctaSecondary: "Contact me",
    },

    // About Section
    about: {
      tab: {
        overview: "Overview",
        about: "About",
        experience: "Experiences",
        skills: "Skills",
        education: "Education",
        approach: "Approach",
      },
      skills: {
        title: "My Skills",
        subtitle: "Technologies I master",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          tools: "Tools & Cloud",
          other: "Other",
        },
        skills: {
          frontend: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML/CSS",
            "Framer Motion",
          ],
          backend: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "Authentification(JWT)",
          ],
          tools: [
            "Git",
            "Docker",
            "VS Code",
            "Azure DevOps",
            "Render",
            "Supabase",
          ],
          other: ["Vue", "Blazor(.Net)", "Java"],
        },
      },
      me: {
        title: "Who am I ?",
        description: {
          p1:
            "Web developer based in Quebec, I turn ideas into robust, high-performance, and elegant web applications. " +
            "My background in software development has given me a strong understanding of both frontend and backend challenges, " +
            "as well as the overall architecture of modern applications.",

          p2:
            "What drives me most is designing reliable, scalable, maintainable, and resilient application architectures, " +
            "while consistently following software development best practices. " +
            "Performance optimization is also a key focus for me, without ever compromising code clarity and quality.",

          p3:
            "Beyond coding, I maintain continuous tech watch to keep improving my skills. " +
            "I strongly believe in the importance of teamwork and clear communication to deliver high-quality projects.",
        },
        cta: "Contact me",
      },
      experience: {
        title: "Professional Experience",
        sections: {
          project: "Project",
          tools: "Tools",
          achievements: "Achievements",
        },
        experiences: [
          {
            role: "Intern - IT Analyst/Software Developper",
            company:
              "Ministère des Transports et de la Mobitlité Durable (MTMD)",
            period: "January 2025 - August 2025",
            projectName: "Multi-sensor data collection platform",
            description:
              "Developed a modular Web application for real-time data collection and filtering, with local storage, database storage, and MQTT-based distribution. Robust, maintainable, and high-performance solution, following software development best practices.",
            tech: ".NET Core, HTML, CSS, Azure DevOps, MQTT, IIS, Wireshark",
            achievements: [
              "Requirements analysis and technology selection",
              "MVC Architecture and database design",
              "Data modeling and formatting",
              "Backend and frontend development",
              "Implemented multithreading for real-time data collection",
              "Set up a logging system",
              "Performed unit and functional testing",
              "Ensured code quality and compliance with security standards",
              "Implemented CI/CD with Azure DevOps and deployment via IIS",
              "Wrote technical documentation and reports",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Bachelor’s Degree in Computer Science",
            school: "Laval University",
            year: "2021 - 2025",
            details:
              "Specialization in Software Engineering and Web Development",
          },
          {
            degree: "Scrum Fundamentals Certification",
            school: "ScrumStudy",
            year: "2026",
            details:
              "Understanding of Scrum principles and Agile software project organization.",
          },
        ],
      },
      approach: {
        title: "My Work Approach",
        items: [
          {
            title: "Strategic Approach",
            description:
              "Understand the problem, analyze requirements, define the architecture, then develop iteratively.",
          },
          {
            title: "Agile Mindset",
            description:
              "Feature prioritization, continuous delivery, regular feedback.",
          },
          {
            title: "Clean Code",
            description:
              "Maintainable and well-documented code, adherence to conventions, systematic code reviews, and regular refactoring.",
          },
          {
            title: "Communication",
            description:
              "Transparency on progress and challenges, " +
              "Close collaboration with the product team and developers.",
          },
        ],
      },
      projectsCompleted: "completed projects",
      happyClients: "happy clients",
    },

    // Projects Section
    projects: {
      overview: {
        title: "My Projects",
        subtitle: "Discover my work",
        viewDetails: "View details",
        category: "Category",
        cta: {
          next: "Next project",
          previous: "Previous project",
          moveTo: "Move to project",
        },
        technologies: "Technologies used",
        liveDemo: "Live demo",
        sourceCode: "Source code",
        filters: {
          all: "All",
          web: "Web",
          mobile: "Mobile",
          design: "Design",
        },
        projects: [
          {
            id: 1,
            title: "Project & Task Tracking Application",
            imgSrc: "/projectFlow/dashboard.webp",
            category: "Web App / Productivity",
            description:
              "Task creation and tracking with real-time communication between team members.",
            tags: [
              "React",
              "TailwindCSS",
              "PostgreSQL",
              "Zustand",
              "WebSocket",
              "Redis",
            ],
          },
          {
            id: 2,
            title: "Data Collection Application",
            imgSrc: "/PCMC/schema.png",
            category: "Web App / Data / IoT",
            description:
              "Real-time collection and management of road sensor data with storage and broadcasting.",
            tags: [
              "Blazor (ASP.NET Core)",
              "Entity Framework Core",
              "SQL",
              "HTML & CSS",
              "IIS",
              "CI/CD",
            ],
          },
          {
            id: 3,
            title: "Image Sharing Application",
            category: "Web App / Social",
            imgSrc: "/Uimages/all-imgs.webp",
            description:
              "Post, like, and comment on images to encourage user interaction.",
            tags: [
              "Next.js",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Vercel",
              "CI/CD",
              "Docker",
            ],
          },
          {
            id: 4,
            title: "Restaurant Tracking Application",
            category: "Web App / Social",
            imgSrc: "/Ufood/uf-home.webp",
            description:
              "Discover, rate, and organize restaurant visits with tracking of lists and other users’ activities.",
            tags: ["Vue.js", "TailwindCSS", "HTML & CSS", "Google Maps API"],
          },
        ],
      },

      details: {
        titles: {
          confidential: "Confidential! Limited information.",
          tech: "Technologies used",
          skills: "Skills acquired",
        },
        cta: {
          web: "See the site",
          code: "Code source",
          next: "Next image",
          previous: "Previous image",
          moveTo: "Move to image",
        },
        items: [
          {
            id: 1,
            title: "Project & Task Tracking Application",
            description:
              "Project and task management application that helps track progress, manage priorities, and communicate in real time with teammates. The backend was designed with a layered architecture to ensure clean, maintainable, and easily extensible code.",
            technologies: [
              "React",
              "Typescript",
              "Node.js",
              "Express",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Redis",
              "WebSocket",
            ],
            skills: [
              "Real-time communication with WebSocket",
              "Zustand",
              "JWT Authentication",
              "Redis",
              "Resend (Email)",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/katangalac/projectManager",
            images: [
              { src: "/projectFlow/project-page.webp", alt: "project-page" },
              {
                src: "/projectFlow/project-detail.webp",
                alt: "project-detail",
              },
              { src: "/projectFlow/task-kanban.webp", alt: "task-kanban" },
              { src: "/projectFlow/task-detail.webp", alt: "task-detail" },
              { src: "/projectFlow/conv.webp", alt: "conversations" },
              { src: "/projectFlow/scheduler.webp", alt: "scheduler" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
          {
            id: 2,
            title: "Data Collection Platform",
            description:
              "Multithreaded, real-time application dedicated to sensor management, including data collection, filtering, storage, and broadcasting, with an interactive map.\n" +
              "Daily and automatic report collection, with the option to manually collect reports for a specific date." +
              "The platform is fully configurable and relies on a modular architecture that makes it easy to add new sensors.",
            technologies: [
              "Blazor (ASP.NET Core)",
              "JavaScript",
              "Entity Framework Core",
              "CI/CD",
              "HTML & CSS",
              "IIS",
              "SQL",
              "Leaflet",
              "Azure DevOps",
            ],
            skills: [
              "IoT Development",
              "Real-time systems",
              "Project management",
              "Modular, robust, and scalable architecture",
              "Deployment on IIS",
              "Automated testing",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/project",
            images: [
              { src: "/PCMC/dashboard.webp", alt: "dashboard" },
              { src: "/PCMC/sensor-detail.webp", alt: "sensor-detail" },
              { src: "/PCMC/Collect-1.webp", alt: "data-collect-1" },
              { src: "/PCMC/Collect-2.webp", alt: "data-collect-2" },
              { src: "/PCMC/setting-1.webp", alt: "app-setting-1" },
              { src: "/PCMC/Setting-2.webp", alt: "app-setting-2" },
              { src: "/PCMC/map.webp", alt: "map" },
            ],
            confidential: true,
            deploy: false,
            code: false,
          },
          {
            id: 3,
            title: "Image Sharing Application",
            description:
              "Image-sharing platform that allows users to post, like, and comment on content, with user mentions and hashtags.\n" +
              "The application encourages interaction and engagement around images.",
            technologies: [
              "Next.js",
              "TypeScript",
              "Clerk",
              "tRPC",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Uploadcare",
              "CI/CD",
              "Docker",
              "Vercel Analytics",
              "Sentry",
            ],
            skills: [
              "OAuth Authentication (Clerk)",
              "ORM usage",
              "Web performance optimization",
              "Containerization",
              "Application monitoring",
              "CI/CD pipeline with GitHub Actions",
              "Responsive design",
              "Deployment on Vercel",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Katangalac/Images-Publication-App",
            images: [
              { src: "/Uimages/upload-page.webp", alt: "upload-page" },
              { src: "/Uimages/img-upload.webp", alt: "image-uploading" },
              { src: "/Uimages/user-profile.webp", alt: "uer profile" },
              { src: "/Uimages/img-det.webp", alt: "image details" },
              { src: "/Uimages/comment-sec.webp", alt: "comment section" },
              { src: "/Uimages/img-form.webp", alt: "image form" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
          {
            id: 4,
            title: "Restaurant Tracking Application",
            description:
              "The website allows users to browse a restaurant catalog, rate them, and create favorite lists. It also enables users to follow other users’ visits and provides an interactive map with routes.",
            technologies: [
              "Vue.js",
              "JavaScript",
              "TailwindCSS",
              "HTML & CSS",
              "Google Maps API",
            ],
            skills: [
              "REST API consumption",
              "UI/UX Design",
              "Secure session management",
              "State management with stores",
              "API integration (Google Maps)",
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Katangalac/Restaurant-Tracking-App",
            images: [
              { src: "/Ufood/res-list.webp", alt: "restaurants list" },
              { src: "/Ufood/res-map.webp", alt: "restaurants map" },
              { src: "/Ufood/res-det.webp", alt: "restaurant detail" },
              { src: "/Ufood/res-direct.webp", alt: "restaurant direction" },
              { src: "/Ufood/user-prof.webp", alt: "user profile" },
              { src: "/Ufood/rate-visit.webp", alt: "visit rating" },
            ],
            confidential: false,
            deploy: false,
            code: true,
          },
        ],
      },
    },

    // Contact Section
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your next project",
      cta: "Send a message",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "Subject of your message",
      message: "Message",
      messagePlaceholder: "Your message here...",
      send: "Send",
      sending: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred. Please try again.",
      location: "Location",
      phone: "Phone",
      availability: "Availability",
      availableForWork: "Available for new projects",
    },

    // Footer
    footer: {
      titles: {
        navigation: "Navigation",
        contact: "Let's connect",
      },
      rights: "All rights reserved",
      name: "Christian Kayembe Katangala",
      madeWith: "Made with",
      by: "by",
      social: "Social media",
      quickLinks: "Quick links",
    },

    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      learnMore: "Learn more",
      viewMore: "View more",
      close: "Close",
      previous: "Previous",
      next: "Next",
      language: "Language",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
