import { Job } from "@/lib/types";

export const MOCK_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Senior Full-Stack Engineer (Next.js & Python)",
    company_name: "Mercado Libre",
    company_logo: null,
    location: "Remoto - Latinoamérica",
    city: null,
    country: "Latam",
    is_remote: true,
    workplace_type: "remote",
    seniority_level: "senior",
    salary_min: 4500,
    salary_max: 6500,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker"],
    description: `Buscamos un **Senior Full-Stack Engineer** apasionado por construir aplicaciones escalables de alto tráfico para el ecosistema de e-commerce y fintech más grande de la región.

Trabajarás en squads multidisciplinarios diseñando arquitecturas resilientes con Next.js en el frontend y microservicios en Python en el backend. Valoramos la autonomía, la excelencia técnica y las buenas prácticas de clean code.`,
    requirements: [
      "Más de 5 años de experiencia en desarrollo web full-stack.",
      "Dominio sólido de TypeScript, React 18+ y Next.js (App Router).",
      "Experiencia comprobable construyendo APIs REST y microservicios con Python (FastAPI o Django).",
      "Manejo avanzado de bases de datos relacionales (PostgreSQL, índices, optimización de queries).",
      "Familiaridad con Docker, CI/CD y despliegue en entornos cloud (AWS o GCP).",
      "Capacidad para liderar discusiones técnicas y mentorear desarrolladores mid y junior."
    ],
    responsibilities: [
      "Diseñar y desarrollar interfaces web de alto rendimiento y accesibilidad.",
      "Construir y optimizar servicios backend de baja latencia con Python.",
      "Participar activamente en code reviews y proponer estándares de arquitectura.",
      "Colaborar con Product Managers y diseñadores UX/UI para entregar valor continuo."
    ],
    benefits: [
      "Salario 100% en USD o moneda local indexada.",
      "Trabajo 100% remoto con horario flexible.",
      "Presupuesto anual para capacitación, conferencias y certificaciones.",
      "Seguro médico privado de cobertura internacional.",
      "Bono de equipamiento para tu home office."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/senior-full-stack-engineer-nextjs-python",
        portal_type: "getonbrd",
        published_at: "2026-11-05T14:30:00Z"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/view/1029384756",
        portal_type: "linkedin",
        published_at: "2026-11-05T15:00:00Z"
      }
    ],
    published_at: "2026-11-05T14:30:00Z",
    created_at: "2026-11-05T14:30:00Z"
  },
  {
    id: "job-2",
    title: "Backend Go & Distributed Systems Specialist",
    company_name: "Nubank",
    company_logo: null,
    location: "Bogotá, Colombia",
    city: "Bogotá",
    country: "Colombia",
    is_remote: false,
    workplace_type: "hybrid",
    seniority_level: "lead",
    salary_min: 5500,
    salary_max: 8000,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Go", "Kafka", "Kubernetes", "AWS", "gRPC", "PostgreSQL"],
    description: `Nubank está transformando las finanzas en América Latina. Buscamos un **Lead Backend Developer** especializado en Go para liderar el diseño de sistemas distribuidos tolerantes a fallos en el vertical de tarjetas de crédito y transferencias inmediatas.`,
    requirements: [
      "7+ años de experiencia profesional en ingeniería de software backend.",
      "Dominio profundo del lenguaje Go (concurrencia, goroutines, memory management).",
      "Amplia experiencia con Apache Kafka, event-driven architecture y CDC.",
      "Conocimiento práctico en Kubernetes, service mesh y observabilidad (Prometheus, Datadog).",
      "Mentalidad orientada a cero downtime y diseño orientado al dominio (DDD)."
    ],
    responsibilities: [
      "Definir la arquitectura de servicios críticos que procesan millones de transacciones por segundo.",
      "Garantizar la alta disponibilidad (99.999%) y resiliencia de la plataforma.",
      "Liderar iniciativas técnicas y actuar como referente técnico para múltiples equipos de ingeniería."
    ],
    benefits: [
      "Acciones de la compañía (RSUs con vesting cuatrimestral).",
      "Modelo híbrido flexible (2 días en oficina Nu Bogotá, 3 días remoto).",
      "Póliza de salud premium para ti y tu familia directa.",
      "Vacaciones ilimitadas y días de bienestar mental."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/backend-go-lead-nubank",
        portal_type: "getonbrd",
        published_at: "2026-11-04T10:00:00Z"
      },
      {
        name: "CompuTrabajo",
        url: "https://co.computrabajo.com/ofertas-de-trabajo/oferta-lead-backend-go",
        portal_type: "computrabajo",
        published_at: "2026-11-04T11:15:00Z"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/view/9988776655",
        portal_type: "linkedin",
        published_at: "2026-11-04T10:00:00Z"
      }
    ],
    published_at: "2026-11-04T10:00:00Z",
    created_at: "2026-11-04T10:00:00Z"
  },
  {
    id: "job-3",
    title: "Frontend Engineer (React / Tailwind CSS)",
    company_name: "Rappi",
    company_logo: null,
    location: "Remoto - Latinoamérica",
    city: null,
    country: "Latam",
    is_remote: true,
    workplace_type: "remote",
    seniority_level: "mid",
    salary_min: 3000,
    salary_max: 4200,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Zustand"],
    description: `En Rappi estamos expandiendo nuestras herramientas para partners y restaurantes. Buscamos un **Mid Frontend Engineer** que cree interfaces hiper-rápidas, intuitivas y accesibles.`,
    requirements: [
      "3+ años de experiencia creando aplicaciones web con React y TypeScript.",
      "Uso fluido de Tailwind CSS y principios de Atomic Design.",
      "Experiencia en gestión de estado global (Zustand, Redux Toolkit o TanStack Query).",
      "Pruebas unitarias y de integración con Vitest / React Testing Library."
    ],
    responsibilities: [
      "Implementar nuevos flujos de administración para miles de restaurantes afiliados.",
      "Optimizar el Core Web Vitals y el rendimiento en conexiones lentas.",
      "Contribuir al design system corporativo compartido."
    ],
    benefits: [
      "Trabajo 100% remoto desde cualquier país de Latinoamérica.",
      "Créditos mensuales en RappiPrime y pedidos.",
      "Descuentos en gimnasios y membresías de bienestar.",
      "Clases de inglés y portugués online."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/frontend-developer-rappi",
        portal_type: "getonbrd",
        published_at: "2026-11-05T09:00:00Z"
      },
      {
        name: "Remotive",
        url: "https://remotive.com/remote-jobs/software-dev/frontend-engineer-rappi",
        portal_type: "remotive",
        published_at: "2026-11-05T09:30:00Z"
      }
    ],
    published_at: "2026-11-05T09:00:00Z",
    created_at: "2026-11-05T09:00:00Z"
  },
  {
    id: "job-4",
    title: "Junior Data Engineer (Python & SQL)",
    company_name: "Globant",
    company_logo: null,
    location: "Buenos Aires, Argentina",
    city: "Buenos Aires",
    country: "Argentina",
    is_remote: false,
    workplace_type: "hybrid",
    seniority_level: "junior",
    salary_min: 1600,
    salary_max: 2300,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Python", "SQL", "PostgreSQL", "Pandas", "Airflow", "Docker"],
    description: `Globant abre una vacante para **Junior Data Engineer** con ganas de aprender y trabajar con clientes de Fortune 500. Construirás pipelines ETL/ELT y modelos analíticos de datos.`,
    requirements: [
      "1 a 2 años de experiencia previa o proyectos académicos robustos en Python y SQL.",
      "Buen entendimiento de estructuras de datos y modelado relacional.",
      "Conocimiento básico de herramientas de orquestación (Apache Airflow o Prefect).",
      "Nivel de inglés intermedio a avanzado (B2+)."
    ],
    responsibilities: [
      "Monitorear y depurar pipelines de datos existentes.",
      "Escribir consultas SQL optimizadas para reportes analíticos.",
      "Colaborar con data scientists y business intelligence analysts."
    ],
    benefits: [
      "Plan de carrera acelerado y mentoría personalizada con arquitectos senior.",
      "Capacitaciones continuas en certificaciones de Cloud (AWS/Azure/GCP).",
      "Clases de idiomas y plan dental extendido."
    ],
    status: "active",
    sources: [
      {
        name: "CompuTrabajo",
        url: "https://ar.computrabajo.com/ofertas-de-trabajo/oferta-junior-data-engineer",
        portal_type: "computrabajo",
        published_at: "2026-11-03T16:00:00Z"
      }
    ],
    published_at: "2026-11-03T16:00:00Z",
    created_at: "2026-11-03T16:00:00Z"
  },
  {
    id: "job-5",
    title: "DevOps & Cloud Infrastructure Specialist",
    company_name: "Vesla Tech",
    company_logo: null,
    location: "Remoto - Global",
    city: null,
    country: "Global",
    is_remote: true,
    workplace_type: "remote",
    seniority_level: "senior",
    salary_min: 5000,
    salary_max: 7500,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Terraform", "AWS", "Kubernetes", "GitHub Actions", "Docker", "Prometheus"],
    description: `En Vesla Tech impulsamos plataformas modernas de datos y automatización. Buscamos un **Senior DevOps Engineer** para liderar la infraestructura como código (IaC) y la seguridad de nuestros entornos cloud.`,
    requirements: [
      "4+ años de experiencia gestionando infraestructuras cloud en AWS.",
      "Dominio avanzado de Terraform y módulos reutilizables.",
      "Experiencia con clusters productivos de Kubernetes (EKS).",
      "Automatización de pipelines CI/CD seguros con GitHub Actions.",
      "Comprensión de prácticas de seguridad (DevSecOps, IAM, cifrado)."
    ],
    responsibilities: [
      "Automatizar el aprovisionamiento de infraestructura con Terraform.",
      "Asegurar alta disponibilidad, backups y planes de recuperación ante desastres.",
      "Optimizar costos de nube y telemetría de rendimiento."
    ],
    benefits: [
      "100% remoto con compensación internacional competitiva en USD.",
      "Presupuesto anual de $2,000 USD para conferencias y hardware.",
      "Días feriados locales respetados sin importar la ubicación geográfica."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/senior-devops-vesla-tech",
        portal_type: "getonbrd",
        published_at: "2026-11-06T12:00:00Z"
      },
      {
        name: "Remotive",
        url: "https://remotive.com/remote-jobs/devops/cloud-specialist-vesla",
        portal_type: "remotive",
        published_at: "2026-11-06T12:30:00Z"
      }
    ],
    published_at: "2026-11-06T12:00:00Z",
    created_at: "2026-11-06T12:00:00Z"
  },
  {
    id: "job-6",
    title: "AI & Machine Learning Engineer (LLMs & RAG)",
    company_name: "Platanus Ventures",
    company_logo: null,
    location: "Santiago, Chile",
    city: "Santiago",
    country: "Chile",
    is_remote: true,
    workplace_type: "remote",
    seniority_level: "senior",
    salary_min: 5000,
    salary_max: 7200,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI", "PostgreSQL", "FastAPI"],
    description: `Buscamos un **AI Engineer** para desarrollar agentes inteligentes, pipelines de Retrieval-Augmented Generation (RAG) y fine-tuning de modelos para startups de alto crecimiento en el portfolio Platanus.`,
    requirements: [
      "Experiencia comprobable en despliegue de modelos de lenguaje (LLMs) en producción.",
      "Familiaridad con vector databases (pgvector, Pinecone o Qdrant).",
      "Solidez en Python, FastAPI y procesamiento de lenguaje natural.",
      "Mentalidad hacker y velocidad de iteración."
    ],
    responsibilities: [
      "Diseñar pipelines RAG eficientes con embeddings y rerankers.",
      "Evaluar métricas de alucinación, latencia y costo de inferencia.",
      "Integrar agentes autónomos con herramientas externas y APIs."
    ],
    benefits: [
      "Compensación en USD + opciones sobre acciones (equity).",
      "100% remoto con reuniones trimestrales en Santiago de Chile con todos los gastos cubiertos.",
      "Acceso ilimitado a créditos de computación GPU (H100/A100)."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/ai-engineer-platanus",
        portal_type: "getonbrd",
        published_at: "2026-11-06T08:00:00Z"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/view/9182736450",
        portal_type: "linkedin",
        published_at: "2026-11-06T08:15:00Z"
      }
    ],
    published_at: "2026-11-06T08:00:00Z",
    created_at: "2026-11-06T08:00:00Z"
  },
  {
    id: "job-7",
    title: "Mobile Developer (Flutter & React Native)",
    company_name: "Kavak",
    company_logo: null,
    location: "Ciudad de México, México",
    city: "Ciudad de México",
    country: "México",
    is_remote: false,
    workplace_type: "on_site",
    seniority_level: "mid",
    salary_min: 2800,
    salary_max: 3800,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["Flutter", "Dart", "React Native", "TypeScript", "GraphQL", "Firebase"],
    description: `Kavak es el unicornio líder en compra y venta de autos seminuevos. Buscamos un **Mobile Developer** para robustecer la app móvil utilizada por millones de usuarios en México, Brasil y Colombia.`,
    requirements: [
      "3+ años desarrollando apps móviles híbridas (Flutter o React Native).",
      "Publicación y mantenimiento de aplicaciones en App Store y Google Play.",
      "Manejo de arquitecturas limpias (Bloc, Provider o Redux).",
      "Experiencia integrando pasarelas de pago y servicios biométricos."
    ],
    responsibilities: [
      "Desarrollar nuevas funcionalidades de inspección vehicular e historial de crédito.",
      "Optimizar el tamaño del bundle, tiempo de inicio de la app y fluidez a 60 fps.",
      "Colaborar con QA y backend para pruebas automatizadas de extremo a extremo."
    ],
    benefits: [
      "Prestaciones superiores a la ley en México (fondo de ahorro, vales de despensa).",
      "Descuentos corporativos en la compra de vehículos Kavak.",
      "Seguro de gastos médicos mayores."
    ],
    status: "active",
    sources: [
      {
        name: "CompuTrabajo",
        url: "https://mx.computrabajo.com/ofertas-de-trabajo/oferta-mobile-developer-kavak",
        portal_type: "computrabajo",
        published_at: "2026-11-02T11:00:00Z"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/view/7788990011",
        portal_type: "linkedin",
        published_at: "2026-11-02T11:30:00Z"
      }
    ],
    published_at: "2026-11-02T11:00:00Z",
    created_at: "2026-11-02T11:00:00Z"
  },
  {
    id: "job-8",
    title: "Software Engineer Trainee (Web & APIs)",
    company_name: "Platzi",
    company_logo: null,
    location: "Remoto - Latinoamérica",
    city: null,
    country: "Latam",
    is_remote: true,
    workplace_type: "remote",
    seniority_level: "trainee",
    salary_min: 1000,
    salary_max: 1400,
    salary_currency: "USD",
    salary_period: "monthly",
    technologies: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Git"],
    description: `¿Estás iniciando tu camino en el desarrollo web y quieres dar tus primeros pasos profesionales? Platzi busca talentos con bases sólidas de programación y hambre de aprender.`,
    requirements: [
      "Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y CSS3.",
      "Haber construido al menos 2 proyectos personales o académicos con React y Node.js.",
      "Comprensión básica de Git y control de versiones colaborativo.",
      "Proactividad, excelente comunicación y curiosidad constante."
    ],
    responsibilities: [
      "Resolver tickets de mejoras y bugs en las interfaces de aprendizaje de Platzi.",
      "Escribir pruebas automatizadas guiadas por mentores senior.",
      "Aprender metodologías ágiles (Scrum/Kanban) y participar en daily standups."
    ],
    benefits: [
      "Contrato con pago en USD.",
      "Acceso ilimitado a todas las escuelas de Platzi.",
      "Mentoría semanal 1 a 1 con ingenieros experimentados.",
      "100% remoto con ambiente cordial e inclusivo."
    ],
    status: "active",
    sources: [
      {
        name: "GetOnBrd",
        url: "https://www.getonbrd.com/jobs/programming/software-engineer-trainee-platzi",
        portal_type: "getonbrd",
        published_at: "2026-11-06T15:00:00Z"
      }
    ],
    published_at: "2026-11-06T15:00:00Z",
    created_at: "2026-11-06T15:00:00Z"
  }
];

