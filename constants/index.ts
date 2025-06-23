import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/rayo.consulting",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Konnekt",
    description:
      'Konnettiti con aziende e creators :)',
    image: "/projects/project-1.png",
    link: "https://konnekt.lol",
  },
  {
    title: "Compario",
    description:
      'Confronta i servizi tra paesi diversi.',
    image: "/projects/project-2.png",
    link: "https://compario.app",
  },
  {
    title: "Planora",
    description:
      'Work in progress, no spoiler XD',
    image: "/projects/project-3.png",
    link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/rayo.consulting",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/company/rayo-consulting",
      },
    ],
  },
  {
    title: "Contatti",
    data: [
      {
        name: "Diventa Partner",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Chi Siamo",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Scrivici",
        icon: null,
        link: "mailto:info@rayoconsulting.org",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Competenze",
    link: "#skills",
  },
  {
    title: "Progetti",
    link: "#projects",
  },
  {
    title: "Recensioni",
    link: "#reviews",
  },
  {
    title: "Prezzi",
    link: "#pricing",
  },
  {
    title: "Contatti",
    link: "#contatti",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const PRICING_PLANS = [
  {
    title: "Sito Web",
    price: "€750",
    period: "a partire da",
    description: "La tua vetrina digitale che converte visitatori in clienti e genera leads 24/7",
          features: [
        "Design che converte il 40% in più",
        "SEO ottimizzato per primi su Google",
        "Social media integrati per viralità",
        "Sistema lead generation automatico",
        "Hosting veloce e dominio premium",
        "Supporto dedicato per 3 mesi",
        "Online in 2-3 settimane garantito"
      ],
    highlight: false,
    buttonText: "Parti ora"
  },
  {
    title: "Web App",
    price: "€1,400",
    period: "a partire da",
    description: "Automatizza i processi, riduci i costi operativi e scala il business senza limiti",
          features: [
        "Automazione che ti fa risparmiare 20h/settimana",
        "Dashboard che monitora tutto in tempo reale",
        "Sistema permessi enterprise-grade",
        "Database scalabile e sicuro",
        "API che si integra con tutto",
        "Cloud hosting con 99.9% uptime",
        "Pronto in 4-6 settimane chiavi in mano"
      ],
    highlight: true,
    buttonText: "Scelgo questo"
  },
  {
    title: "App Mobile",
    price: "€2,000",
    period: "a partire da",
    description: "Raggiungi milioni di utenti mobile e crea un canale di vendita sempre attivo",
          features: [
        "App che funziona su iPhone e Android",
        "Design che users adorano (UI/UX premium)",
        "Sincronizzata con tutti i tuoi sistemi",
        "Notifiche che riportano clienti",
        "Analytics per decisioni data-driven",
        "Pubblicazione App Store/Play Store inclusa",
        "App store-ready in 6-8 settimane"
      ],
    highlight: false,
    buttonText: "Voglio saperne di più"
  },
  {
    title: "RAG e AI Automazioni",
    price: "€2,500",
    period: "a partire da",
    description: "Rivoluziona il business con l'AI: risparmia ore di lavoro e aumenta fatturato del 300%",
          features: [
        "Chatbot che gestisce il 90% delle richieste",
        "Automazione intelligente che elimina task ripetitivi",
        "AI che analizza dati e predice trends",
        "Sistema RAG che conosce tutto della tua azienda",
        "Modelli AI addestrati sui tuoi dati specifici",
        "Supporto tech H24 con esperti AI",
        "Sistema AI operativo in 8-12 settimane"
      ],
    highlight: false,
    buttonText: "Chiamata strategica gratuita"
  }
] as const;

export const REVIEWS = [
  {
    name: "Marco Mancio",
    company: "Mancio Corporate Ltd",
    role: "CEO",
    image: "/reviews/marco-mancio.jpg",
    rating: 4.5,
    text: "La piattaforma e-commerce ha rivoluzionato il nostro modo di vendere online. Gestione ordini automatizzata e dashboard analytics che ci permettono di prendere decisioni data-driven ogni giorno.",
    project: "Piattaforma E-commerce Avanzata",
    result: "+180% vendite online"
  },
  {
    name: "Team Compario",
    company: "Compario",
    role: "Product Team",
    image: "/reviews/compario-team.jpg", 
    rating: 5,
    text: "Web app eccellente che gestisce migliaia di confronti al giorno. Interfaccia intuitiva, performance ottimali e backend scalabile. Exactly what we needed!",
    project: "Web App Comparazione Servizi",
    result: "10,000+ confronti/giorno"
  },
  {
    name: "Alessandro Rossi",
    company: "XYZ Consulting",
    role: "Managing Director",
    image: "/reviews/alessandro-rossi.jpg",
    rating: 4.5,
    text: "Sito web professionale che ci ha posizionato come leader nel settore. Design pulito, SEO ottimizzato e sistema di lead generation che funziona davvero.",
    project: "Sito Web Corporate + SEO",
    result: "3x lead qualificati"
  },
  {
    name: "Adriano Montanari",
    company: "Studio Consulenza Adrianmo",
    role: "Senior Partner",
    image: "/reviews/adriano-montanari.jpg",
    rating: 5,
    text: "Il sistema RAG con AI ha trasformato completamente il nostro workflow. Ora possiamo analizzare migliaia di documenti in pochi secondi e fornire consulenze più precise ai clienti.",
    project: "Sistema RAG + AI Consulting",
    result: "90% tempo risparmiato"
  }
] as const;
