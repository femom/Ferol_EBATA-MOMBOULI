// Dictionnaire de traduction simple : une clé -> { fr, en }
// Pas de librairie externe, juste un objet + un contexte React (voir LanguageContext.tsx)

export const translations = {
  nav: {
    about: { fr: "À propos", en: "About" },
    experience: { fr: "Parcours", en: "Experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    contact: { fr: "Contact", en: "Contact" },
    cv: { fr: "CV", en: "Resume" },
  },
  hero: {
    kicker: { fr: "Brazzaville, Congo", en: "Brazzaville, Congo" },
    title1: { fr: "Ebata-Mombouli", en: "Ebata-Mombouli" },
    title2: { fr: "Ferol", en: "Ferol" },
    tagline: {
      fr: "Développeur Full-Stack orienté backend, étudiant en Génie Informatique — entre lignes de code et pages blanches.",
      en: "Backend-leaning Full-Stack developer, Computer Engineering student — between lines of code and blank pages.",
    },
    ctaProjects: { fr: "Voir mes projets", en: "View my projects" },
    ctaContact: { fr: "Me contacter", en: "Get in touch" },
    ctaCv: { fr: "Télécharger mon CV", en: "Download my resume" },
  },
  about: {
    title: { fr: "À propos", en: "About" },
    body: {
      fr: "Étudiant en 3ᵉ année de Génie Informatique, je m'intéresse au développement web et à l'intelligence artificielle, avec une orientation marquée vers le backend. Je suis aussi écrivain — une sensibilité littéraire qui nourrit ma clarté de raisonnement et de communication. Entre projets personnels et engagements associatifs, j'aime allier rigueur technique et goût pour la réflexion.",
      en: "A 3rd-year Computer Engineering student, I'm interested in web development and artificial intelligence, with a strong backend focus. I'm also a writer — a literary sensibility that feeds my clarity of thought and communication. Between personal projects and community involvement, I like pairing technical rigor with a taste for reflection.",
    },
    highlight1: { fr: "Backend & API", en: "Backend & APIs" },
    highlight2: { fr: "Écriture", en: "Writing" },
    highlight3: {
      fr: "Pédagogie & prise de parole",
      en: "Teaching & public speaking",
    },
  },
  skills: {
    title: { fr: "Compétences techniques", en: "Technical skills" },
    subtitle: {
      fr: "Les outils que j'utilise au quotidien pour construire, tester et déployer.",
      en: "The tools I use day to day to build, test and ship.",
    },
  },
  experience: {
    title: { fr: "Parcours", en: "Experience" },
    items: [
      {
        role: {
          fr: "Lead Développeur Full-Stack — Projet ALERT E2C",
          en: "Lead Full-Stack Developer — ALERT E2C Project",
        },
        org: { fr: "Akieni Academy (Squad 5)", en: "Akieni Academy (Squad 5)" },
        period: { fr: "Octobre 2026", en: "October 2026" },
        bullets: [
          {
            fr: "Pilotage technique d'une squad de 9 sur une application de signalement d'incidents électriques pour E2C, avec React, Tailwind CSS et Node.js/Express.",
            en: "Led a nine-person squad building an electrical-incident reporting application for E2C with React, Tailwind CSS and Node.js/Express.",
          },
          {
            fr: "Mise en place de l'authentification JWT, du contrôle des rôles, des tests automatisés et d'un workflow Git par User Story.",
            en: "Implemented JWT authentication, role-based access control, automated tests and a Git workflow organised by user story.",
          },
          {
            fr: "Livraison d'un MVP de 16 User Stories déployé sur Vercel et Render, installable en PWA et documenté techniquement.",
            en: "Delivered a 16-user-story MVP deployed to Vercel and Render, installable as a PWA and supported by technical documentation.",
          },
        ],
      },
      {
        role: {
          fr: "Développeur Backend — Squad de développement",
          en: "Backend Developer — Development Squad",
        },
        org: { fr: "Akieni Academy", en: "Akieni Academy" },
        period: { fr: "Août 2026 ", en: "Aug 2026 " },
        bullets: [
          {
            fr: "Conception et implémentation des routes métier d'une API REST (réservation, confirmation, refus, annulation) avec Node.js et json-server",
            en: "Designed and built business routes for a REST API (booking, confirmation, refusal, cancellation) with Node.js and json-server",
          },
          {
            fr: "Modélisation des données et gestion des permissions d'accès (utilisateurs, créneaux, rendez-vous)",
            en: "Data modelling and access-permission management (users, time slots, appointments)",
          },
          {
            fr: "Écriture de tests automatisés et collaboration en équipe via GitHub (revues de code, pull requests)",
            en: "Wrote automated tests and collaborated via GitHub (code reviews, pull requests)",
          },
        ],
      },
      {
        role: {
          fr: "Coordinateur Adjoint — Pôle Réflexion/Cognition",
          en: "Deputy Coordinator — Reflection/Cognition Unit",
        },
        org: { fr: "Aréopage Club", en: "Aréopage Club" },
        period: { fr: "2026 – Aujourd'hui", en: "2026 – Present" },
        bullets: [
          {
            fr: "Rédaction de fiches thématiques sur l'épistémologie et la cognition",
            en: "Wrote thematic briefs on epistemology and cognition",
          },
          {
            fr: "Conception de présentations et animation d'ateliers pour les membres du club",
            en: "Designed presentations and led workshops for club members",
          },
          {
            fr: "Prise de parole en tant que conférencier",
            en: "Public speaking as a guest lecturer",
          },
        ],
      },
      {
        role: {
          fr: "Développeur Front-End — Freelance",
          en: "Front-End Developer — Freelance",
        },
        org: { fr: "Indépendant", en: "Independent" },
        period: { fr: "", en: "" },
        bullets: [
          {
            fr: "Conception et développement du site vitrine de Aris Management Agency",
            en: "Designed and built the showcase website for Aris Management Agency",
          },
        ],
      },
    ],
  },
  projects: {
    title: { fr: "Projets personnels", en: "Personal projects" },
    viewProject: { fr: "Voir le projet", en: "View project" },
    viewGithub: { fr: "Voir sur GitHub", en: "View on GitHub" },
    preview: { fr: "Aperçu du projet", en: "Project preview" },
    allProjects: {
      fr: "Tous mes projets sur GitHub",
      en: "All my projects on GitHub",
    },
    items: [
      {
        name: "Reviews",
        desc: {
          fr: "Plateforme de notation d'établissements.",
          en: "Ratings platform for local businesses.",
        },
        tags: ["React", "Node.js"],
        image: "/images/reviews.jpg",
        link: "",
        github: "https://github.com/femom/Reviews",
        variant: "blue" as const,
      },
      {
        name: "Libota",
        desc: {
          fr: "Application web de gestion communautaire, déployée.",
          en: "Community management web app, deployed.",
        },
        tags: ["React 19", "TypeScript", "Tailwind v4"],
        image: "/images/libota.png",
        link: "https://libota.vercel.app",
        github: "https://github.com/femom/libota",
        variant: "bordeaux" as const,
      },
      {
        name: "ALERT E2C",
        desc: {
          fr: "Application web de signalement d'incidents électriques.",
          en: "Web application for reporting electrical incidents.",
        },
        tags: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "PWA"],
        image: "/images/alertE2C.jpg",
        link: "https://squad5-alert-e2-c.vercel.app/",
        github: "https://github.com/femom/libota",
        variant: "bordeaux" as const,
      },
      {
        name: "Fresko Russe",
        desc: {
          fr: "Application d'apprentissage du russe : cas, conjugaison, dictée et traduction.",
          en: "Russian-learning app: grammatical cases, conjugation, dictation and translation.",
        },
        tags: ["React", "Vite", "PWA"],
        image: "/images/freskorusse.png",
        link: "https://freskorussedist.vercel.app/",
        github: "https://github.com/femom/freskorusse",
        variant: "bordeaux" as const,
      },
    ],
  },
  education: {
    title: {
      fr: "Formation & certifications",
      en: "Education & certifications",
    },
    degrees: [
      {
        title: {
          fr: "Licence en Génie Informatique (L3)",
          en: "B.Sc. in Computer Engineering (Year 3)",
        },
        org: "ECES",
        period: "2025 – 2027",
      },
      {
        title: {
          fr: "Baccalauréat Série D",
          en: "High School Diploma (Science track)",
        },
        org: "CS Emmanuel 3",
        period: "2024",
      },
      {
        title: { fr: "Atelier d'art oratoire", en: "Public Speaking Workshop" },
        org: "Good Langue",
        period: "2024",
      },
      {
        title: {
          fr: "Certificat de langue russe — Niveau A1/A2",
          en: "Russian Language Certificate — Level A1/A2",
        },
        org: "Maison Russe",
        period: "",
      },
    ],
    certifications: [
      "Node.js : Fondamentaux & Modules — Akieni Academy",
      "SQL : Bases & Requêtes fondamentales — Akieni Academy",
      "JavaScript: Working with the DOM & Events — Skillsoft",
      "Introduction to Git — Skillsoft",
      "Mise en œuvre et pilotage de projets de développement — AFD",
      "Certified Microsoft 365 Project — Fondation MTN Congo",
    ],
  },
  distinctions: {
    title: { fr: "Distinctions", en: "Distinctions" },
    items: [
      {
        fr: "Finaliste au prix Plumes d'Or 2026 de l'association Arts & Mondes",
        en: "Finalist for the 2026 Plumes d'Or prize from the Arts & Mondes association",
      },
      {
        fr: "Finaliste, concours de poème « Souffle et Sang Congolais » (Luccia Ongouya)",
        en: 'Finalist, "Souffle et Sang Congolais" poetry competition (Luccia Ongouya)',
      },
      {
        fr: "Présélection, Prix RFI Théâtre",
        en: "Shortlisted, RFI Théâtre Award",
      },
    ],
  },
  contact: {
    title: { fr: "Contact", en: "Contact" },
    subtitle: {
      fr: "Un projet en tête ? Décrivez-le-moi, je reviens vers vous rapidement.",
      en: "Have a project in mind? Describe it below, I'll get back to you shortly.",
    },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Votre besoin", en: "Your request" },
    send: { fr: "Envoyer", en: "Send" },
    sending: { fr: "Envoi en cours…", en: "Sending…" },
    success: {
      fr: "Message envoyé, merci ! Je reviens vers vous rapidement.",
      en: "Message sent, thank you! I'll get back to you shortly.",
    },
    error: {
      fr: "Une erreur est survenue, réessayez ou écrivez-moi directement par email.",
      en: "Something went wrong, please try again or email me directly.",
    },
  },
  footer: {
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  },
} as const;

export type Lang = "fr" | "en";
