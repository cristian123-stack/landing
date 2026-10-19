export interface Project {
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  demoUrl?: string;
  codeUrl?: string;
  note?: string;
  slot?: string;
}

export const profile = {
  name: "Cristian Muñoz",
  role: "Full Stack Developer",
  intro:
    "Desarrollo aplicaciones web, backend y APIs REST. Tengo experiencia práctica en automatización de procesos, bots conversacionales e integración de servicios externos.",
  email: "cristianmunozmendez96@gmail.com",
  github: "https://github.com/cristian123-stack",
  linkedin: "https://linkedin.com/in/cristian-muñoz-mendez-11b6b0278",
  cvPath: "/Cristian_Munoz_mendez.pdf", // coloca el PDF en public/
  photoPath: "/pefil.jpeg", // coloca tu foto en public/
};

export const about = [
  "Soy Analista Programador titulado en INACAP. He desarrollado aplicaciones web, soluciones backend, APIs, automatizaciones y bots conversacionales, tanto en proyectos propios como para un cliente real.",
  "Busco trabajo en desarrollo Full Stack y backend, APIs, automatización e integración de servicios.",
];

export const skills: { title: string; items: string[] }[] = [
  { title: "Lenguajes", items: ["JavaScript", "Python", "SQL", "PHP"] },
  { title: "Frontend", items: ["React", "Vite", "React Router", "Axios", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Django", "Django REST Framework", "APIs REST", "JWT", "Webhooks"] },
  { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { title: "Herramientas", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export const featured: Project = {
  name: "Pet Store",
  kind: "E-commerce Full Stack · demo publicada",
  summary: "Tienda en línea con catálogo, carrito y panel de administración, con frontend en React y API propia en Node.js.",
  highlights: [
    "Catálogo de productos", "Carrito de compras", "Favoritos", "Autenticación con JWT",
    "Roles de usuario y administrador", "Panel administrativo", "Integración de pagos con Stripe",
  ],
  stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Sequelize", "Stripe"],
  demoUrl: "https://creative-choux-407b2c.netlify.app/",
  // codeUrl: agrega aquí el repositorio de Pet Store cuando quieras mostrarlo
};

export const others: Project[] = [
  {
    name: "Bot conversacional de WhatsApp",
    kind: "Automatización e integración · desarrollado para un cliente real",
    summary: "Solución para automatizar la captación y clasificación de clientes.",
    highlights: [
      "Backend con Node.js y Express",
      "Integración con WhatsApp Business Cloud API",
      "Recepción y procesamiento de eventos con webhooks",
      "Lógica conversacional para el flujo de captación",
    ],
    stack: ["Node.js", "Express", "WhatsApp Business Cloud API", "Webhooks", "Render", "GitHub"],

  },
  {
    name: "Sistema de inventario empresarial",
    kind: "Aplicación de escritorio",
    summary: "Gestión de inventario, compras y ventas, con reportes en Excel y un dashboard de métricas.",
    highlights: ["Lógica de negocio y gestión de datos", "Automatización de reportes"],
    stack: ["Python", "PySide6", "SQLite", "SQLAlchemy", "pandas", "openpyxl"],

  },
];

export const job = {
  title: "Technical Analyst (Development & Support)",
  meta: "Elipse AI · 2024-2025 · Remoto",
  items: [
    "Desarrollo y mantenimiento de soluciones tecnológicas.",
    "Desarrollo y soporte de bots conversacionales.",
    "Automatización de procesos e integración de APIs externas.",
    "Consultas SQL y análisis de información.",
    "Documentación técnica y colaboración con equipos técnicos y áreas de negocio.",
  ],
};

export const education: { title: string; where: string }[] = [
  { title: "Analista Programador", where: "INACAP · 2023–2024" },
  { title: "Técnico Superior en Administración de Empresas", where: "Universidad de Talca" },
  { title: "Certificación Desarrollador Full Stack JavaScript", where: "Desafío Latam · 2025–2026" },
  { title: "Google Cybersecurity Professional Certificate", where: "Coursera · 2026" },
];
