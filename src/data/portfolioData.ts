import { Project, Certification, SkillCategory, ExperienceItem, ArchitectureDiagram } from '../types';

export const PERSONAL_INFO = {
  name: "Abd El-Rahman Elsharabasy",
  shortName: "Abdo Elsharabasy",
  handle: "@Elsharabasy73",
  role: "Senior Backend Developer",
  roleSpecialty: "Node.js · Express.js · Distributed Systems & Cloud",
  greeting: "Abd El-Rahman Elsharabasy",
  status: "Available for Contract / Full-Time",
  availabilityDetails: "Open for freelance projects & remote/on-site engineering roles",
  bioHeadline: "Production-tested Backend Engineer specializing in resilient REST & GraphQL APIs, microservices, and automated cloud deployments on AWS & Azure.",
  aboutBio: "I am a backend-focused software engineer with hands-on production experience designing, hardening, and deploying full-cycle backend services. I specialize in Node.js, Express, TypeScript, MongoDB, PostgreSQL, and Redis, with practical cloud DevOps experience across AWS (EC2, S3) and Azure (Linux VMs, Blob Storage, Caddy reverse proxies, and systemd). From relational data modeling and RBAC policies to CI/CD pipelines and production incident debugging, I own systems from architecture to production traffic.",
  location: "Damietta, Egypt",
  relocationStatus: "Open to Relocate (Global & Regional)",
  languages: "Arabic (Native) · English (Professional B2)",
  email: "abdo.elsharabasy73@gmail.com",
  phone: "+20 155 302 9842",
  github: "https://github.com/Elsharabasy73",
  githubUsername: "github.com/Elsharabasy73",
  linkedin: "https://www.linkedin.com/in/elsharabasy73",
  livePortfolio: "https://kayanmodern.com",
  headshotUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPrfK_7YUdQE4E3r5bv_Lyeol8cMaQdn2R8Ht2rGOr41Ae_njbijqV1ov7V2XnKJXE5y9HdVYeJdmKsu1tbDvIoa9Y3Vv60ks6Ro7J1iqHLyjJ9mNGd8pxb5kXUNllYTyRw072rWan3dV80-DTCLerO5724FvPu25jv_IAR5iKbVkQ2a9iMBCmlgf81NNrVxRyM4M7SA5wZfBK2VU3Yx-PAqlfdjuWaZXfquKhHjrN3leZO11hyJJy",
  education: {
    degree: "B.Sc. Computer Engineering",
    period: "2019 – 2024",
    institution: "Port Said University",
    grade: "Cumulative Grade 84.88% (Very Good with Honors)"
  },
  militaryService: {
    title: "Mandatory Military Service (Egypt)",
    timeline: "April 2025 – June 2026",
    status: "Scheduled — Currently available for remote contracts & forward commitments"
  },
  systemStats: [
    { label: "Production Endpoints", value: "40+" },
    { label: "Avg API Response", value: "<45ms" },
    { label: "Live Daily Traffic", value: "500+ users" },
    { label: "Cloud Deployments", value: "AWS & Azure" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "BACKEND RUNTIMES & FRAMEWORKS",
    description: "Core server-side development, high-throughput routing, and authorization",
    skills: [
      { name: "Node.js", level: "Core", experience: "Production" },
      { name: "Express.js", level: "Core", experience: "Production" },
      { name: "TypeScript", level: "Advanced", experience: "Production" },
      { name: "RESTful API Design", level: "Core", experience: "Production" },
      { name: "GraphQL", level: "Advanced", experience: "Schema & Resolvers" },
      { name: "Socket.IO (WebSockets)", level: "Advanced", experience: "Real-time" },
      { name: "JWT & Session Auth", level: "Core", experience: "Single-Device Enforcement" },
      { name: "Prisma ORM", level: "Advanced", experience: "PostgreSQL & Migrations" },
      { name: "Mongoose ODM", level: "Core", experience: "Production Aggregations" }
    ]
  },
  {
    category: "DATABASES & CACHING",
    description: "Data modeling, indexing, ACID transactions, and in-memory stores",
    skills: [
      { name: "MongoDB", level: "Core", experience: "Atlas & Sharding Prep" },
      { name: "PostgreSQL", level: "Core", experience: "Relational Design & Indexing" },
      { name: "Redis", level: "Advanced", experience: "OTP Storage & GET Cache" },
      { name: "MySQL / SQL", level: "Advanced", experience: "Query Optimization" },
      { name: "Database Migrations", level: "Core", experience: "Automated Scripts" }
    ]
  },
  {
    category: "CLOUD, DEVOPS & INFRASTRUCTURE",
    description: "Linux systems administration, automated CI/CD, reverse proxies, and containers",
    skills: [
      { name: "Azure (Linux VMs, Blob)", level: "Core", experience: "Production Host" },
      { name: "AWS (EC2, S3)", level: "Core", experience: "Production Storage" },
      { name: "Caddy Server", level: "Core", experience: "Automatic SSL & Reverse Proxy" },
      { name: "systemd & PM2", level: "Core", experience: "Process Supervisions" },
      { name: "Docker", level: "Advanced", experience: "Multi-stage Builds" },
      { name: "GitHub Actions", level: "Advanced", experience: "Automated CI/CD" },
      { name: "Linux Administration (Ubuntu)", level: "Core", experience: "SSH, UFW, Cron" }
    ]
  },
  {
    category: "FRONTEND & TEMPLATING",
    description: "Client consumption, full-stack integration, and server-rendered views",
    skills: [
      { name: "React.js", level: "Advanced", experience: "SPA Integration" },
      { name: "EJS Server Templating", level: "Core", experience: "Dynamic SSR" },
      { name: "Tailwind CSS", level: "Advanced", experience: "Component Systems" }
    ]
  },
  {
    category: "PROGRAMMING LANGUAGES & CS",
    description: "Foundational computer science, algorithmics, and polyglot development",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Proficient" },
      { name: "C", level: "Proficient" },
      { name: "Java", level: "Proficient" }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "kayan-modern",
    role: "Lead Backend Developer & Cloud Architect",
    company: "Kayan Modern Furniture Platform",
    type: "Production Freelance Contract",
    location: "Damietta, Egypt",
    period: "09/2024 – Present",
    liveUrl: "https://kayanmodern.com",
    tags: ["Node.js", "Express.js", "MongoDB Atlas", "Azure VM", "AWS S3", "Caddy", "systemd", "React.js"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDflsww8iNP10DMf2KJrEKcpeWa9QGZmj0RFjM73fWpp2lLzpSlxT-anyjz1EUG7F9w4vJ2RV-7fwv_M2jlBKug5mv05huP1hwazhF9VSSePXmslBPVcfUwebSnzT8VdVKszgQumHtIY0xNweASg5V1Vd2DGNe8BugBVOFU_aZNLslNKkQYkShRSJ3qrRPgJbS4Dd5h3xhxoIm_DchuO9ZorKFl7pJpwbrrgNor3poRU2T5s7EwQcRAqchZjXxoJ8Kvw",
    points: [
      "Architected and delivered the complete backend infrastructure: 30+ RESTful endpoints handling catalogs, promotional offers, media uploads, and administrative control panels.",
      "Engineered an enterprise-grade admin authentication flow featuring single-device session invalidation to prevent credential sharing and automated daily cloud database snapshot backups.",
      "Integrated public consumer endpoints for high-throughput product filtering, pagination, and customer inquiry processing with sub-50ms query execution.",
      "Orchestrated a zero-downtime infrastructure migration from AWS EC2/S3 to a hardened Azure Linux VM with a custom domain, Caddy reverse proxy, automatic SSL certificates, and systemd process supervisors.",
      "Diagnosed and resolved critical edge-routing conflicts between the SPA frontend client and Express REST API gateway under real production load (500+ daily active visitors)."
    ],
    architectureOverview: [
      "Client traffic hits Cloudflare DNS / HTTPS",
      "Caddy reverse proxy terminates SSL & routes /api/* to Express server and static assets to React bundle",
      "Node.js Express application process managed via systemd with auto-restart on crash",
      "Mongoose connects to MongoDB Atlas with connection pooling",
      "Product images uploaded directly to cloud object storage with thumbnail compression"
    ],
    architectureHighlights: [
      { label: "Runtime", val: "Node.js v20 LTS" },
      { label: "Web Server & Proxy", val: "Caddy Server v2 (TLS 1.3)" },
      { label: "Cloud Host", val: "Azure Linux VM (Ubuntu 22.04)" },
      { label: "Database Cluster", val: "MongoDB Atlas Replica Set" }
    ],
    techStackBreakdown: [
      { layer: "Runtime & API", technologies: "Node.js (v20), Express.js, JWT, Multer" },
      { layer: "Database", technologies: "MongoDB Atlas (Replica Set) with Mongoose indexing" },
      { layer: "Cloud Hosting", technologies: "Azure Linux VM (Ubuntu 22.04 LTS), AWS S3" },
      { layer: "Web Server & SSL", technologies: "Caddy Server v2 (Automatic Let's Encrypt TLS & HTTP/2)" },
      { layer: "Process Control", technologies: "systemd unit files with journalctl logging" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "galleries-manager",
    title: "Galleries Manager — Multi-Tenant Platform",
    subtitle: "Enterprise RBAC & Multi-Tenant Backend",
    category: "Full-Stack",
    statusBadge: "Active Development",
    description: "High-concurrency multi-tenant art and furniture gallery management system engineered with strict layered architecture and 5-tier role-based access control (SuperAdmin, Gallery Owner, Manager, Staff, Public Visitor).",
    architectureHighlights: [
      {
        title: "Strict Request Lifecycle Pipeline",
        details: "Every incoming request passes through automated validation schemas, JWT guard verification, role permission matrices, before reaching dedicated controllers and business services.",
        tech: "Express · Joi / Zod · Custom Middleware"
      },
      {
        title: "In-Memory Caching & Ephemeral OTPs",
        details: "Redis cluster used for instantaneous OTP validation during sensitive administrative operations and multi-tier GET caching to minimize database roundtrips.",
        tech: "Redis · IORedis"
      },
      {
        title: "Automated Containerized CI/CD",
        details: "Docker multi-stage images pushed through GitHub Actions workflows with automatic migration execution via Prisma.",
        tech: "Docker · GitHub Actions · Prisma"
      }
    ],
    highlights: [
      "Strict request lifecycle: Schema Validation → Auth Guards → Controller → Business Services",
      "Granular RBAC across 5 distinct access roles with privilege escalation prevention",
      "Redis in-memory caching for frequent catalogue queries & temporary OTP tokens",
      "Dockerized development and production pipelines with GitHub Actions automation"
    ],
    tags: ["Node.js", "PostgreSQL", "Prisma ORM", "Redis", "Docker", "GitHub Actions"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuSyWppsfJGS1wqRrc-xYWJLduuCEkZU-hFIt-iU2g5IeJp4F1bjCTbI5TVwYXWyvzK3LI2shzUST4soL58sPZc4rJmShBiC2-zgLA6yIPKft91nKN8kpF6v67cPsT6Lx0jfpX5Sq6ctFj94Zkd6DENXxHElLvYknhNzGgU-hiZkHx_p4BCx0whqXpBS02F320eeoji5eqv3_sCJdFNJcHkfMFNif50VmMVPTdosK8vK4OLHj2hGoM",
    githubUrl: "https://github.com/Elsharabasy73/galleries_manager",
    metrics: [
      { label: "Access Roles", value: "5 Tiers" },
      { label: "Cache Hit Latency", value: "<4ms" },
      { label: "CI/CD Pipeline", value: "Docker + Actions" }
    ],
    codeSnippet: {
      filename: "middleware/rbacGuard.ts",
      language: "typescript",
      code: `// Role-Based Access Control Guard with Bitwise Permission Matrix
export const requireRoles = (...allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: "UNAUTHORIZED_ACCESS" });
    }
    const hasRole = allowedRoles.includes(req.user.role);
    if (!hasRole) {
      logger.warn(\`Forbidden access attempt by user \${req.user.id} to \${req.originalUrl}\`);
      return res.status(403).json({ error: "INSUFFICIENT_PRIVILEGES" });
    }
    next();
  };
};`
    }
  },
  {
    id: "shoppay-api",
    title: "ShopPay — Resilient E-Commerce API",
    subtitle: "Clean Architecture REST Backend",
    category: "Backend API",
    description: "Enterprise-grade layered e-commerce API featuring dual payment gateways (Stripe & Paymob), transactional order processing, automated stock reservation, and automated testing.",
    architectureHighlights: [
      {
        title: "Clean Service-Repository Pattern",
        details: "Decoupled route handlers from business rules and database adapters, ensuring modularity and rapid testability.",
        tech: "Node.js · Express · Mongoose"
      },
      {
        title: "Dual Payment Gateway Webhooks",
        details: "Idempotent webhook handlers for Stripe (Global) and Paymob (MENA region) with signature verification and atomic order reconciliation.",
        tech: "Stripe SDK · Paymob API"
      }
    ],
    highlights: [
      "Layered architecture with dedicated services, controllers, and repository abstractions",
      "Stripe and Paymob dual payment integration with cryptographically signed webhooks",
      "Atomic transaction locking for inventory deduction during checkout",
      "GitHub Actions workflow for automated linting, unit tests, and continuous deployment"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe API", "Paymob", "Jest", "CI/CD"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo4WUQpuNT6U26gGynpAxEMijB4x0-a2cQSMKeK3fNqFnK6Kcl4egVLQQk-_HXaqRBkvC0q2WMcGBO4L1AluTFbR4OFMQ0SOpuiglivIjk5Rr4ZyNVo2ebu3gQt_Bs1vXuNRcDhLNIFpxcxQqsQeqWjBMAgZ2IXd8vfmpWjXHmTmbdN671vgx3WVIf3Erf6KTIiKi_3sod-58qgBLXMH1SRCHSozGZq8u_7iMYy-MNoWumRFhlebmG",
    githubUrl: "https://github.com/Elsharabasy73",
    metrics: [
      { label: "Payment Providers", value: "Stripe + Paymob" },
      { label: "Test Coverage", value: "Automated CI" },
      { label: "Architecture", value: "Layered Service" }
    ],
    codeSnippet: {
      filename: "services/paymentService.ts",
      language: "typescript",
      code: `// Atomic checkout & idempotent webhook reconciliation
export async function handleStripeWebhook(event: Stripe.Event) {
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;
    
    await withTransaction(async (session) => {
      const order = await Order.findByIdAndUpdate(
        orderId, 
        { status: "PAID", paymentId: session.payment_intent }, 
        { new: true, session }
      );
      await InventoryService.deductStock(order.items, session);
      await NotificationService.sendReceipt(order.userEmail, order);
    });
  }
}`
    }
  },
  {
    id: "furniture-mobile",
    title: "Furniture Store Mobile Ecosystem",
    subtitle: "Graduation Project · Port Said University (Grade 84.88%)",
    category: "Mobile Backend",
    description: "Full-stack mobile retail platform featuring real-time bi-directional messaging, GraphQL query optimization, and ML-assisted recommendation feeds for high customer conversion.",
    architectureHighlights: [
      {
        title: "Real-time Bi-directional Socket Gateway",
        details: "Persistent WebSocket connections allowing real-time chat between storefront managers and customer devices with typing indicators and read receipts.",
        tech: "Socket.IO · Redis Pub/Sub"
      },
      {
        title: "Hybrid REST & GraphQL Data Fetching",
        details: "GraphQL endpoints used to prevent over-fetching on mobile network constraints, paired with REST for high-throughput uploads.",
        tech: "Apollo Server / GraphQL · Express"
      }
    ],
    highlights: [
      "Low-latency real-time customer support chat powered by Socket.IO",
      "GraphQL API layer eliminating network bandwidth waste on mobile clients",
      "Machine learning integration for collaborative filtering product recommendations",
      "Built with Flutter frontend and robust Node.js backend infrastructure"
    ],
    tags: ["Flutter", "Node.js", "Express", "GraphQL", "Socket.IO", "MongoDB"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaGgGGsmDKcl-K67CKewbmE8JJz0lA8pZPesB_lM3s7hBIjU3kXQMqHVC8MnB8Bisg3Q_orfn14uA4P_2jEvBWOaJhDjEvvAaT1nZFOzG3sSrLmqB9aVJs6OiYtqz_Ckeg7rMVOIcg8tyQyEn9N5jEGkyF_UNUvjDYk-IlClHLcmNRSjp6Nl5PvSPPvD9Vs79T_loYyTV-7OIzmMJMjooFGF0TGOnQ1F6hpJMJR-5tZFfWGMlOGwV3",
    githubUrl: "https://github.com/Elsharabasy73",
    metrics: [
      { label: "Graduation Score", value: "84.88%" },
      { label: "Socket Latency", value: "<25ms" },
      { label: "API Protocol", value: "REST + GraphQL" }
    ]
  },
  {
    id: "social-feed-api",
    title: "Social Feed GraphQL API",
    subtitle: "Schema-First Distributed Feed Engine",
    category: "Backend API",
    description: "Production-ready GraphQL API service supporting cursor-based feed pagination, granular field resolvers, JWT authorization policies, and real-time user status broadcasting.",
    architectureHighlights: [
      {
        title: "Schema-First Type System",
        details: "Strongly typed GraphQL schema with modular query, mutation, and subscription definitions and custom error maskers.",
        tech: "GraphQL · Express-GraphQL"
      },
      {
        title: "Field-Level Resource Authorization",
        details: "Resolver-level verification ensuring users can only mutate and delete their own posts while maintaining fast read throughput.",
        tech: "JWT · MongoDB Aggregations"
      }
    ],
    highlights: [
      "Comprehensive schema with strongly typed resolvers and custom error responses",
      "JWT-based post ownership authorization with role restrictions",
      "Cursor-based feed pagination preventing deep skip performance degradation"
    ],
    tags: ["GraphQL", "Node.js", "MongoDB", "JWT", "React.js"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGWxBqEhBxYpFDSWLbx6AGCjvmeCCS_XTWsySt-GIRtSpPrsDcRWbxvddzwbxO4CZiCdKjL8M7-Qz3oBZmQC0LXUBsYHNfzVLR7Ty1gsWCbYSfMjxuDTy-OjQaOzUb93pi0T8GsMxNHX6wCMfAFqE3SlQE4hzu5nsU7YeSmS2wrzp_ybmrUT2Jf3cSaaWoyTuaNgqszXltRVJFsznFv8Tq1spjrOpp0ScLxcj5TIpJbyBg1z1IJp2",
    githubUrl: "https://github.com/Elsharabasy73",
    metrics: [
      { label: "Data Format", value: "GraphQL Schema" },
      { label: "Auth Mechanism", value: "Bearer JWT" }
    ]
  },
  {
    id: "ecommerce-app",
    title: "Full-Stack E-Commerce & Invoicing Engine",
    subtitle: "Server-Side Rendered Enterprise Store",
    category: "Full-Stack",
    description: "Full-cycle e-commerce platform incorporating session management, server-rendered views via EJS, Stripe checkout integration, and automated dynamic PDF invoice generation.",
    architectureHighlights: [
      {
        title: "Dynamic PDF Invoice Compilation",
        details: "Server-side stream generation of branded tax invoices on successful checkout callbacks with zero file system bloat.",
        tech: "PDFKit · Node.js Streams"
      }
    ],
    highlights: [
      "Product catalog with category filtering and cart persistence in MongoDB sessions",
      "Stripe payment gateway integration with webhooks and order fulfillment",
      "Automated server-side generation and streaming of PDF receipts to buyers"
    ],
    tags: ["Express.js", "EJS", "Stripe", "MongoDB", "PDFKit"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfQJs7kilFb2pPKnqA3wa_dxVh-lDlvByRcHyu9EKZLcXMadvpQsvl6X8V-_uAv8Zh7vDqL0IgjhOj0ovITiRhw0oaBZrUEX2fur7YXic7nx9iDVJp9EC7DtqAG3wAWdMJtgjFcGYE4M-KsL05HM-NZT60-3XGJVBFnAXOznCZdeF3Jm4Oj3nlp70lDvg2yIGxHz6OA3FWdzvfs1H4KEBL9bQNsV4E_rz6FNLTvrUZ91KhcEOJ2qbU",
    githubUrl: "https://github.com/Elsharabasy73",
    metrics: [
      { label: "Rendering", value: "SSR via EJS" },
      { label: "Invoice System", value: "PDFKit Streaming" }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-1",
    title: "NodeJS – Build a Full E-Commerce RESTful APIs",
    issuer: "Udemy",
    year: "2026",
    iconName: "school",
    colorType: "blue",
    skillsGained: ["Advanced REST Architecture", "JWT Auth", "Pagination", "Stripe API", "Security Best Practices"]
  },
  {
    id: "cert-2",
    title: "Writing Clean Code",
    issuer: "Udemy",
    year: "2024",
    iconName: "code",
    colorType: "purple",
    skillsGained: ["SOLID Principles", "Refactoring", "Clean Architecture", "Code Readability"]
  },
  {
    id: "cert-3",
    title: "MongoDB – The Complete Developer's Guide",
    issuer: "Udemy",
    year: "2024",
    iconName: "database",
    colorType: "indigo",
    skillsGained: ["Aggregation Framework", "Compound Indexing", "Replica Sets", "Sharding Basics"]
  },
  {
    id: "cert-4",
    title: "Node.js – The Complete Guide (MVC, REST APIs, GraphQL)",
    issuer: "Udemy",
    year: "2024",
    iconName: "terminal",
    colorType: "blue",
    skillsGained: ["Event Loop Optimization", "Streams & Buffers", "GraphQL", "WebSockets", "Testing"]
  },
  {
    id: "cert-5",
    title: "JavaScript – The Complete Guide (Beginner + Advanced)",
    issuer: "Udemy",
    year: "2023",
    iconName: "javascript",
    colorType: "purple",
    skillsGained: ["Async/Await Under the Hood", "Memory Management", "Prototypes", "ESNext Features"]
  },
  {
    id: "cert-6",
    title: "Fundamentals of Database Engineering",
    issuer: "Udemy",
    year: "2023",
    iconName: "storage",
    colorType: "indigo",
    skillsGained: ["ACID vs BASE", "B-Tree vs LSM Trees", "WAL Logging", "Concurrency Control", "Partitioning"]
  },
  {
    id: "cert-7",
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2022",
    iconName: "computer",
    colorType: "red",
    skillsGained: ["C Programming", "Data Structures", "Algorithms", "Memory Allocation", "Computational Complexity"]
  },
  {
    id: "cert-8",
    title: "Java Development Fundamentals",
    issuer: "Information Technology Institute (ITI)",
    year: "2022",
    iconName: "integration_instructions",
    colorType: "blue",
    skillsGained: ["OOP Principles", "Java Core", "Design Patterns", "Unit Testing"]
  }
];

export const ARCHITECTURE_DIAGRAMS: ArchitectureDiagram[] = [
  {
    id: "kayan-modern-arch",
    name: "Kayan Modern Production Cloud Architecture",
    description: "Current production infrastructure running on Azure VM with Caddy reverse proxy and MongoDB Atlas.",
    nodes: [
      { id: "n1", label: "End User (500+ Daily)", type: "client", subtext: "Web & Mobile Clients" },
      { id: "n2", label: "Cloudflare & Caddy Proxy", type: "gateway", subtext: "Auto SSL, HTTP/2, Reverse Proxy" },
      { id: "n3", label: "Node.js / Express API Cluster", type: "app", subtext: "systemd, 30+ REST Endpoints" },
      { id: "n4", label: "MongoDB Atlas Cloud", type: "database", subtext: "Replica Set, Auto Backup" },
      { id: "n5", label: "AWS S3 / Azure Blob", type: "storage", subtext: "Optimized Furniture Media" }
    ],
    flowSteps: [
      "1. HTTPS Client request reaches Caddy on port 443 with TLS 1.3 encryption",
      "2. Caddy inspects path: `/api/*` proxies to Node.js on `localhost:5000`; other routes serve cached React static build",
      "3. Express extracts Bearer JWT token & executes single-device session check against database",
      "4. Service queries MongoDB Atlas using indexed compound keys (<45ms query execution)",
      "5. Response gzip-compressed by Caddy and returned to client"
    ]
  },
  {
    id: "galleries-rbac-arch",
    name: "Galleries Manager Multi-Tenant RBAC & Cache Pipeline",
    description: "Strict request lifecycle with validation schemas, role guards, Redis in-memory cache, and PostgreSQL.",
    nodes: [
      { id: "g1", label: "Multi-Tenant Request", type: "client", subtext: "Bearer Token + Tenant ID" },
      { id: "g2", label: "Joi Schema & Rate Limiter", type: "gateway", subtext: "Payload sanitization & DoS guard" },
      { id: "g3", label: "RBAC Guard & Auth Controller", type: "app", subtext: "5-Tier Roles Matrix" },
      { id: "g4", label: "Redis Cache Store", type: "cache", subtext: "GET queries cache & OTPs" },
      { id: "g5", label: "PostgreSQL with Prisma", type: "database", subtext: "Relational Tenant Schemas" }
    ],
    flowSteps: [
      "1. Incoming HTTP payload validated with Joi / Zod before touching business logic",
      "2. RBAC middleware verifies role permissions against target gallery resource",
      "3. GET requests check Redis cache for cached JSON payload (<4ms latency)",
      "4. Cache misses query PostgreSQL via Prisma ORM and populate Redis with dynamic TTL",
      "5. Mutations trigger cache invalidation and atomic database transactions"
    ]
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: "help", desc: "List all available interactive commands" },
  { cmd: "bio", desc: "Print Abd El-Rahman's engineering bio and background" },
  { cmd: "skills", desc: "Display full backend, database, and cloud skill matrix" },
  { cmd: "projects", desc: "List production systems with architecture specs" },
  { cmd: "experience", desc: "Show professional timeline and cloud deployments" },
  { cmd: "arch", desc: "View system architecture topologies" },
  { cmd: "curl kayanmodern", desc: "Execute simulated live health check on Kayan Modern API" },
  { cmd: "cat caddyfile", desc: "Inspect real production Caddyfile configuration" },
  { cmd: "cat systemd", desc: "View production Linux systemd service unit file" },
  { cmd: "contact", desc: "Show direct contact endpoints & email" },
  { cmd: "clear", desc: "Clear the terminal screen" }
];

