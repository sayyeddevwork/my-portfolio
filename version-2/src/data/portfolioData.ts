import { ExperienceItem, ProjectItem, SkillCategory, ArchitectureNode } from '../types';

export const PERSONAL_INFO = {
  name: "Sayyed Vali",
  title: "Senior Full-Stack Engineer & Technical Lead",
  location: "Hyderabad, India",
  phone: "+91-9966562620",
  email: "Sayyed.vali@gmail.com",
  linkedin: "https://linkedin.com/in/esub-vali-sayyed-516759100",
  github: "https://github.com/sanasham",
  availability: "Open to Senior Full-Stack, Technical Lead & Engineering Leadership Roles",
  summary: "Senior Full-Stack Engineer and Technical Lead with 15+ years designing, building, and operating applications across banking, identity and access management, government, and non-profit domains. Primary stack: React.js, Node.js, TypeScript, REST/GraphQL APIs, microservices on Azure (AKS, APIM), OAuth 2.0 / Okta SSO, Kafka, and Dynatrace APM.",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lloyds",
    role: "Software Engineer E | Technical Lead",
    company: "Lloyds Banking Group",
    location: "Hyderabad, India",
    duration: "Dec 2024 – Feb 2026",
    isCurrent: false,
    environment: ["React.js", "Node.js", "TypeScript", "REST APIs", "Kafka", "GCP", "BigQuery", "Azure DevOps", "Jenkins", "Dynatrace APM", "Jest", "Playwright", "OAuth 2.0", "JWT", "Azure AD", "RBAC"],
    responsibilities: [
      "Contributed to architecture and technical design decisions for a core banking module in a microservices ecosystem, weighing security, performance, and delivery constraints.",
      "Designed React modules and Node.js services, and built and consumed internal APIs, improving data-fetching efficiency for banking workflows.",
      "Contributed to API design and governance practices covering secure access, consistent contracts, backward compatibility, and integration across distributed services.",
      "Integrated authentication and authorization using OAuth 2.0, JWT access tokens, Azure AD, Okta SSO, and RBAC, closing identity and access gaps identified during security reviews.",
      "Designed Kafka producer and consumer services to decouple downstream systems and isolate faults in event-driven processing.",
      "Diagnosed production performance bottlenecks with Dynatrace APM — service dependencies, backend latency, frontend behavior, and database interactions — and drove targeted fixes.",
      "Raised automated test coverage using Jest, integration testing, and Playwright, reducing regression defects reaching production.",
      "Owned code review standards, mentored engineers, and influenced technical decisions across the team while remaining hands-on with design, development, troubleshooting, and releases.",
      "Supported production releases and L3 incidents, performing root-cause analysis and fixing recurring issues.",
      "Re-engineered Azure DevOps and Jenkins CI/CD pipelines, reducing deployment time and manual release steps."
    ],
    architectureHighlights: [
      "Distributed event mesh with Apache Kafka",
      "OAuth 2.0 / JWT / Azure AD / Okta SSO security layer",
      "Dynatrace APM latency profiling across services and databases",
      "Jest and Playwright automated test gates in CI/CD"
    ],
    keyImpact: [
      "Expanded automated test coverage with Jest and Playwright",
      "Resolved production bottlenecks identified via Dynatrace APM analysis",
      "Streamlined CI/CD releases across Azure DevOps and Jenkins"
    ]
  },
  {
    id: "accionlabs",
    role: "Senior Software Engineer",
    company: "AccionLabs",
    client: "Rotary International – MyRotary",
    location: "Hyderabad, India",
    duration: "Dec 2021 – Nov 2024",
    environment: ["React.js", "Node.js", "TypeScript", "GraphQL", "REST APIs", "AWS", "Kafka", "Docker", "Kubernetes", "CI/CD"],
    responsibilities: [
      "Provided hands-on technical leadership for a MyRotary workstream, contributing to architecture decisions, technology selection, design reviews, and end-to-end delivery for a global enterprise portal.",
      "Built a reusable React.js component library adopted across feature teams, reducing duplicate UI development.",
      "Designed REST and GraphQL API integrations and reviewed API contracts for consistency, security, maintainability, and client-side efficiency.",
      "Implemented Okta-based SSO and access-control integrations, reducing recurring login-related support issues.",
      "Introduced Kafka-based messaging to decouple distributed services and improve fault isolation between modules.",
      "Led technical delivery for six engineers through code reviews, mentoring, and technical decisions, while remaining hands-on with implementation and production troubleshooting.",
      "Improved deployment processes and maintainability, reducing recurring production fixes."
    ],
    architectureHighlights: [
      "Reusable React component library",
      "GraphQL and REST API integration layer",
      "Kafka event bus for service decoupling",
      "Okta SSO enterprise authentication integration"
    ],
    keyImpact: [
      "Led technical delivery for a team of 6 engineers",
      "Unified UI development across feature teams via a shared React library",
      "Cut recurring login-related support issues through Okta SSO"
    ]
  },
  {
    id: "pactera",
    role: "Technical Project Lead",
    company: "Pactera EDGE",
    location: "Hyderabad, India",
    duration: "Oct 2021 – Dec 2021",
    environment: ["Agile", "Sprint Planning", "Technical Quality", "Client Stakeholder Engagement"],
    responsibilities: [
      "Coordinated technical delivery for enterprise client engagements and supported sprint planning, estimation, and Agile execution.",
      "Worked across development, QA, and business teams to resolve delivery risks, technical quality issues, and execution challenges."
    ],
    architectureHighlights: [
      "Cross-Functional Agile Governance",
      "Quality Assurance & Technical Risk Assessment"
    ],
    keyImpact: [
      "Ensured smooth sprint execution and client alignment across delivery teams"
    ]
  },
  {
    id: "bosch",
    role: "Specialist | Technical Lead",
    company: "Bosch",
    location: "Hyderabad, India",
    duration: "Jan 2015 – Oct 2021",
    environment: ["React.js", "Node.js", "TypeScript", "Azure", "AKS", "Azure API Management (APIM)", "Kubernetes", "CIAM", "REST APIs", "RBAC", "OAuth 2.0"],
    responsibilities: [
      "Led technical delivery of a Customer Identity & Access Management (CIAM) platform — architecture discussions, security design, and release planning.",
      "Built Azure-hosted Node.js services for identity management under strict security and compliance requirements.",
      "Worked with Azure Kubernetes Service (AKS) for containerized application delivery and Azure API Management (APIM) for managed API exposure and gateway capabilities.",
      "Applied RBAC and identity controls for secure access to applications and services.",
      "Provided technical direction, architecture and code reviews, and mentoring for a team of up to 8 engineers.",
      "Acted as escalation point for production issues, performing root-cause analysis and corrective actions that reduced repeat incidents.",
      "Participated in security design discussions and partnered with security, product, and technical stakeholders on a multi-year CIAM roadmap."
    ],
    architectureHighlights: [
      "CIAM platform on Azure Kubernetes Service (AKS)",
      "Azure API Management (APIM) rate limiting & gateway policies",
      "Fine-grained Role-Based Access Control (RBAC) & OAuth 2.0 flows",
      "L3 escalation engineering & incident response"
    ],
    keyImpact: [
      "Provided technical direction and mentoring for up to 8 engineers",
      "Led delivery of a CIAM platform across Azure APIM and AKS",
      "Reduced recurring production incidents through root-cause remediation"
    ]
  },
  {
    id: "hcl",
    role: "Lead Engineer",
    company: "HCL Technologies",
    client: "Prime Minister's Office (Dubai)",
    location: "Dubai, UAE / India",
    duration: "Jan 2013 – Jan 2015",
    environment: ["ASP.NET", "C#", "JavaScript", "HTML", "CSS", "SQL Server"],
    responsibilities: [
      "Developed multilingual enterprise web applications within an international engineering team.",
      "Participated in requirements analysis and technical design discussions.",
      "Optimized SQL queries and resolved production issues to maintain system reliability.",
      "Collaborated with international and cross-functional stakeholders to deliver enterprise project milestones.",
      "Supported testing, deployment, and production maintenance of secure government solutions."
    ],
    architectureHighlights: [
      "Multilingual web architecture",
      "Relational database query optimization",
      "Security controls for a government client"
    ],
    keyImpact: [
      "Delivered secure web portals for Prime Minister's Office (Dubai)",
      "Optimized complex SQL queries to remove database bottlenecks"
    ]
  },
  {
    id: "idocz",
    role: "Software Engineer",
    company: "Idocz Software Solutions",
    client: "Product: Well Files Viewer",
    location: "India",
    duration: "Aug 2010 – Jan 2013",
    environment: ["ASP.NET Web Forms", "C#", "SQL Server"],
    responsibilities: [
      "Developed enterprise product modules, reusable components, complex SQL queries, and stored procedures within a product engineering team.",
      "Participated in client discussions and requirement analysis; supported production issues and feature enhancement delivery.",
      "Developed reusable modules and resolved production defects while collaborating directly with clients to understand business requirements."
    ],
    architectureHighlights: [
      "SQL Stored Procedures & Module Engineering",
      "Enterprise Document Management Logic"
    ],
    keyImpact: [
      "Shipped core document processing modules in Well Files Viewer product"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "veo-lms",
    title: "Veo LMS Microservice Platform",
    subtitle: "Express + TypeScript + Prisma microservice template for a learning management system",
    category: "microservices",
    featured: true,
    projectOrigin: "Personal / Independent Project",
    summary: "Modular TypeScript + Express microservice using Prisma ORM and PostgreSQL. Implements structured JSON logging, health/readiness probes, SIGTERM graceful shutdown with connection draining, Docker deployment, and centralized error handling.",
    techStack: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Pino", "Jest"],
    architecture: {
      backend: "Modular Express + TypeScript Layered Architecture",
      database: "PostgreSQL with Prisma Client ORM",
      security: "Centralized error-handling middleware that masks internal stack traces in production",
      observability: "Pino Structured JSON Logging + Custom Health/Readiness Probes",
      infrastructure: "Docker & Docker Compose with multi-stage builds"
    },
    keyHighlights: [
      "Graceful Shutdown Engine handling SIGINT/SIGTERM with active connection draining",
      "/healthz (liveness) and /readyz (readiness DB ping) endpoints for container orchestration probes",
      "Prisma schema with strict migrations and automated database connection pooling",
      "Pino logger with correlation IDs across middleware layers"
    ],
    detailedWriteup: {
      problemStatement: "Microservices commonly break in production during rolling deployments — unhandled shutdown signals, unhandled asynchronous exceptions, unoptimized database connections, and opaque unstructured log streams.",
      solutionOverview: "Built an Express + TypeScript backend template for the Veo LMS platform covering graceful shutdown, health/readiness probes for container orchestrators, structured JSON logging, and a repository-service layering.",
      engineeringDecisions: [
        {
          title: "Graceful Termination Engine",
          description: "Implemented an HTTP server wrapper listening for SIGTERM and SIGINT signals. Suspends incoming traffic, drains active HTTP connections within a configurable timeout (10s), and safely disconnects the Prisma database client before process termination."
        },
        {
          title: "Observability Probes (/healthz & /readyz)",
          description: "Differentiated process liveness from database readiness. The liveness probe confirms event loop health, while the readiness probe executes a cheap SELECT 1 query against PostgreSQL via Prisma to prevent premature routing to starting pods."
        },
        {
          title: "Structured Logging & Error Boundary",
          description: "Integrated Pino structured logging with request correlation IDs and an Express centralized error handling middleware that masks internal database stack traces in production while retaining actionable debug context."
        }
      ],
      codeSnippet: {
        language: "typescript",
        title: "server-graceful-shutdown.ts",
        code: `import express from 'express';
import { PrismaClient } from '@prisma/client';
import pino from 'pino';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const prisma = new PrismaClient();
const app = express();

// Health & Readiness Probes for Kubernetes
app.get('/healthz', (req, res) => res.status(200).json({ status: 'UP' }));
app.get('/readyz', async (req, res) => {
  try {
    await prisma.$queryRaw\`SELECT 1\`;
    res.status(200).json({ status: 'READY', database: 'CONNECTED' });
  } catch (err) {
    logger.error({ err }, 'Readiness check failed');
    res.status(503).json({ status: 'UNAVAILABLE', database: 'DISCONNECTED' });
  }
});

const server = app.listen(3000, () => logger.info('Server running on port 3000'));

// Graceful Shutdown Handler
const shutdown = async (signal: string) => {
  logger.info({ signal }, 'Shutdown signal received. Starting graceful cleanup...');
  server.close(async () => {
    logger.info('HTTP server closed. Draining database connections...');
    await prisma.$disconnect();
    logger.info('Database disconnected. Process exiting cleanly.');
    process.exit(0);
  });
  
  setTimeout(() => {
    logger.error('Forcefully terminating process due to timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));`
      },
      outcomes: [
        "Prevents connection-reset failures during rolling restarts via active connection draining",
        "Structured Pino logs with correlation IDs to shorten production issue investigation",
        "Deterministic 10s teardown window during container recycling"
      ]
    },
    // Repository exists but is not yet public; URL preserved for when it is published
    githubUrl: "https://github.com/sanasham/veo-lms-microservice",
    sourceNote: "Source code not yet public"
  },
  {
    id: "core-banking-mesh",
    title: "Core Banking Microservices & Event Pipeline",
    subtitle: "Event-driven banking workflows for Lloyds Banking Group",
    category: "microservices",
    featured: true,
    projectOrigin: "Professional Experience (Lloyds Banking Group)",
    summary: "Contributed to architecture and technical design for core banking workflows across microservices with Apache Kafka event streams, Dynatrace APM observability, and React frontend modules.",
    techStack: ["React.js", "Node.js", "TypeScript", "Kafka", "GCP", "BigQuery", "Dynatrace", "Jest", "Playwright"],
    architecture: {
      frontend: "React Dashboard Modules",
      backend: "Node.js Microservices on Kubernetes",
      database: "GCP BigQuery & relational store",
      security: "OAuth 2.0 + Azure AD + Okta SSO + Fine-Grained RBAC",
      observability: "Dynatrace APM Latency & Trace Profiling",
      infrastructure: "Azure DevOps + Jenkins CI/CD Pipelines"
    },
    keyHighlights: [
      "Decoupled financial event streams using Kafka producer/consumer pattern with fault isolation",
      "Diagnosed and resolved service dependency latency bottlenecks via Dynatrace APM",
      "Expanded automated test coverage with Jest and Playwright, reducing regression defects reaching production",
      "Integrated OAuth 2.0, Azure AD, and Okta SSO with JWT access tokens"
    ],
    detailedWriteup: {
      problemStatement: "Banking workflows needed predictable response times, backward-compatible contracts across many interconnected services, and auditable event trails without blocking the request path.",
      solutionOverview: "Used Kafka for downstream audit and analytics streams while keeping request/response flows on Node.js APIs backed by React modules.",
      engineeringDecisions: [
        {
          title: "Kafka Event-Driven Decoupling",
          description: "Replaced synchronous inter-service HTTP chaining with Kafka event streams. Created partition-aware producer/consumer services with dead-letter queues so events survive transient failures."
        },
        {
          title: "Dynatrace APM Bottleneck Elimination",
          description: "Analyzed distributed traces across API calls, Node.js middleware, and database queries. Identified N+1 query patterns and unindexed BigQuery lookups as the cause of p99 latency outliers."
        },
        {
          title: "Playwright E2E & Jest Coverage Gates",
          description: "Established automated test gates in Azure DevOps and Jenkins. Built Playwright end-to-end user path simulations for high-risk transactional flows."
        }
      ],
      codeSnippet: {
        language: "typescript",
        title: "kafka-banking-producer.ts",
        code: `import { Kafka, Producer, CompressionTypes } from 'kafkajs';

export class BankingEventPublisher {
  private producer: Producer;

  constructor(kafka: Kafka) {
    this.producer = kafka.producer({
      allowAutoTopicCreation: false,
      transactionTimeout: 30000,
    });
  }

  async publishTransactionEvent(transactionId: string, payload: Record<string, unknown>) {
    await this.producer.send({
      topic: 'core-banking-transactions-v1',
      compression: CompressionTypes.GZIP,
      messages: [
        {
          key: transactionId,
          value: JSON.stringify({
            eventId: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            payload,
          }),
          headers: { correlationId: payload.correlationId as string },
        },
      ],
    });
  }
}`
      },
      outcomes: [
        "Expanded automated test coverage, preventing regression defects from reaching production",
        "Improved event processing resilience with fault-isolated Kafka topics",
        "Streamlined release pipelines across Azure DevOps & Jenkins"
      ]
    }
  },
  {
    id: "ciam-platform",
    title: "Enterprise Identity & Access Gateway",
    subtitle: "CIAM Platform on Azure Kubernetes Service (AKS) & Azure APIM",
    category: "iam-security",
    featured: true,
    projectOrigin: "Professional Experience (Bosch)",
    summary: "Led technical delivery of a multi-tenant Customer Identity & Access Management (CIAM) gateway supporting enterprise RBAC, OAuth 2.0, Okta SSO, and Azure API Management.",
    techStack: ["Node.js", "TypeScript", "React", "Azure APIM", "AKS", "OAuth 2.0", "Okta SSO", "Azure AD", "RBAC"],
    architecture: {
      frontend: "React Enterprise Admin & SSO Login Portal",
      backend: "Node.js Secure Identity Microservices",
      database: "Azure Managed Data Store",
      security: "Okta SSO, Azure AD, OAuth 2.0 PKCE, RBAC Rules Engine",
      observability: "Azure Monitor & APIM Gateway Analytics",
      infrastructure: "Azure Kubernetes Service (AKS) + Azure APIM"
    },
    keyHighlights: [
      "Configured Azure APIM gateway policies for rate limiting and token validation",
      "Implemented OAuth 2.0 with PKCE grant flow and RBAC access enforcement",
      "Provided technical direction for a team of up to 8 engineers across architecture, security design, and production escalation",
      "Reduced repeat production incidents through root-cause remediation"
    ],
    detailedWriteup: {
      problemStatement: "Fragmented identity systems created security gaps, recurring user authentication failures, and compliance risks across business units.",
      solutionOverview: "Architected a unified Azure-hosted identity platform centered on Azure APIM for policy-driven API access control and Okta SSO for a single sign-on path.",
      engineeringDecisions: [
        {
          title: "Azure APIM Policy-Based Security",
          description: "Offloaded token validation, rate-limiting, and CORS origin checks to Azure APIM gateway policies before requests hit backend microservices on AKS."
        },
        {
          title: "RBAC Access Matrix Engine",
          description: "Designed a fine-grained Role-Based Access Control model evaluating user claims, scopes, and organization contexts at the application boundaries."
        }
      ],
      outcomes: [
        "Unified identity management across business units",
        "Standardized security controls (OAuth 2.0, PKCE, RBAC) across the platform",
        "Reduced recurring production incidents through root-cause analysis and corrective action"
      ]
    }
  },
  {
    id: "myrotary-portal",
    title: "Reusable UI Library & API Integration",
    subtitle: "Shared React component library and GraphQL/REST integration for Rotary International",
    category: "cloud-devops",
    featured: false,
    projectOrigin: "Professional Experience (AccionLabs / Rotary International)",
    summary: "Provided technical leadership for the MyRotary workstream: a shared React component library, GraphQL/REST integrations, and Kafka messaging between services.",
    techStack: ["React.js", "Node.js", "TypeScript", "GraphQL", "REST APIs", "AWS", "Kafka", "Docker", "Kubernetes"],
    architecture: {
      frontend: "Reusable React component library",
      backend: "Node.js API layer with a GraphQL gateway",
      database: "AWS RDS PostgreSQL",
      security: "Okta SSO & JWT Token Exchange",
      observability: "AWS CloudWatch & Distributed Tracing",
      infrastructure: "Docker + Kubernetes on AWS"
    },
    keyHighlights: [
      "Built and maintained the core React component library adopted by cross-functional feature teams",
      "Designed a GraphQL query layer masking complex REST backend services",
      "Led technical delivery for 6 developers with code review and design standards"
    ],
    detailedWriteup: {
      problemStatement: "Inconsistent UI patterns across feature teams caused duplicated frontend work and inconsistent user-facing behavior.",
      solutionOverview: "Established a shared component library in React + TypeScript with defined design tokens and a GraphQL API aggregator.",
      engineeringDecisions: [
        {
          title: "Shared UI Component Library",
          description: "Packaged the shared React components as a library consumed by multiple feature teams, so UI patterns were defined once."
        },
        {
          title: "GraphQL Aggregation Layer",
          description: "Reduced client-side over-fetching by aggregating multiple REST endpoints into GraphQL queries."
        }
      ],
      outcomes: [
        "Reduced duplicate frontend work across feature teams",
        "Standardized UI patterns across teams with one shared library"
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Architecture & Leadership",
    description: "System design, technical decision-making, and engineering governance",
    skills: [
      { name: "Enterprise System Architecture", highlight: true },
      { name: "Microservices & Distributed Systems", highlight: true },
      { name: "API Design & Governance", highlight: true },
      { name: "Technical Leadership & Mentoring", highlight: true },
      { name: "Design & Code Reviews", highlight: true },
      { name: "Agile & Sprint Execution" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Web applications and reusable design systems",
    skills: [
      { name: "React.js (v18 / v19)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ESNext)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 / Semantic Web", highlight: false },
      { name: "Single-Page Applications (SPA)", highlight: false },
      { name: "Reusable Component Libraries", highlight: true },
      { name: "State Management & React Hooks", highlight: false }
    ]
  },
  {
    title: "Backend & Microservices",
    description: "Backend services, REST/GraphQL APIs, and event streaming",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "Apache Kafka (Event-Driven)", highlight: true },
      { name: "REST APIs & GraphQL", highlight: true },
      { name: "ASP.NET / C#", highlight: false },
      { name: "Microservice Decoupling", highlight: true },
      { name: "Health/Readiness & Graceful Shutdown", highlight: true }
    ]
  },
  {
    title: "Security & Identity (CIAM / IAM)",
    description: "Enterprise security standards, OAuth 2.0, and access controls",
    skills: [
      { name: "OAuth 2.0 & JWT", highlight: true },
      { name: "Azure AD & Okta SSO", highlight: true },
      { name: "Role-Based Access Control (RBAC)", highlight: true },
      { name: "Azure API Management (APIM)", highlight: true },
      { name: "CIAM & Identity Controls", highlight: true }
    ]
  },
  {
    title: "Cloud, Containers & DevOps",
    description: "Containerization, orchestration, and continuous deployment",
    skills: [
      { name: "Azure & Azure Kubernetes Service (AKS)", highlight: true },
      { name: "Google Cloud Platform (GCP)", highlight: false },
      { name: "Docker & Multi-Stage Builds", highlight: true },
      { name: "Kubernetes (k8s)", highlight: true },
      { name: "Azure DevOps & Jenkins CI/CD", highlight: true },
      { name: "Amazon Web Services (AWS)", highlight: false }
    ]
  },
  {
    title: "Observability, Data & Testing",
    description: "Monitoring, databases, and automated testing",
    skills: [
      { name: "Dynatrace APM", highlight: true },
      { name: "Structured Pino Logging", highlight: true },
      { name: "PostgreSQL & SQL Server", highlight: true },
      { name: "MongoDB & GCP BigQuery", highlight: false },
      { name: "Jest Automated Testing", highlight: true },
      { name: "Playwright E2E Testing", highlight: true }
    ]
  },
  {
    title: "AI-Assisted Engineering",
    description: "AI-assisted development tooling applied to delivery workflows",
    skills: [
      { name: "GitHub Copilot & AI-Assisted Coding", highlight: true },
      { name: "AI-Assisted Code Review", highlight: false }
    ]
  }
];

export const SYSTEM_ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "node-client",
    label: "React 19 Client SPA",
    category: "frontend",
    description: "Modular React 19 frontend with TypeScript, Tailwind CSS, and optimized bundle splitting.",
    tech: "React 19 + TypeScript",
    protocols: ["HTTPS / TLS 1.3", "WebSocket"],
    securityControls: ["CSP Headers", "XSS Prevention", "PKCE OAuth Flow"]
  },
  {
    id: "node-gateway",
    label: "Azure APIM / Gateway",
    category: "gateway",
    description: "Managed API Gateway enforcing rate limits, CORS policies, JWT validation, and request routing.",
    tech: "Azure APIM / Express Gateway",
    protocols: ["REST / JSON", "GraphQL"],
    securityControls: ["JWT Access Token Validation", "IP Whitelisting", "Rate Limiting"]
  },
  {
    id: "node-identity",
    label: "Identity & SSO (Okta / Azure AD)",
    category: "identity",
    description: "Enterprise CIAM authority for authentication, token generation, and RBAC claim management.",
    tech: "Okta SSO + Azure AD",
    protocols: ["OAuth 2.0", "OIDC", "SAML 2.0"],
    securityControls: ["MFA", "Token Expiration", "Scoped Claims"]
  },
  {
    id: "node-services",
    label: "Node.js Microservices Cluster",
    category: "service",
    description: "Containerized Node.js services on Azure Kubernetes Service (AKS) with Prisma ORM and Pino logging.",
    tech: "Node.js + Express + Prisma + Docker",
    protocols: ["REST / JSON", "HTTP/2"],
    securityControls: ["Kubernetes Secret Ingestion", "Non-Root Containers", "Health Probes"]
  },
  {
    id: "node-kafka",
    label: "Apache Kafka Event Mesh",
    category: "eventbus",
    description: "Distributed messaging cluster isolating downstream tasks, audit logs, and analytics pipelines.",
    tech: "Apache Kafka Cluster",
    protocols: ["Kafka TCP Protocol"],
    securityControls: ["SASL/PLAIN", "TLS Encryption", "Topic ACLs"]
  },
  {
    id: "node-database",
    label: "Data & Observability Layer",
    category: "database",
    description: "PostgreSQL relational store, GCP BigQuery analytical store, and Dynatrace APM telemetry collector.",
    tech: "PostgreSQL + GCP BigQuery + Dynatrace APM",
    protocols: ["SQL", "OTLP Telemetry"],
    securityControls: ["Encryption at Rest", "Prisma Connection Pooling", "Masked PII Logs"]
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    title: "Design for failure",
    description: "Assume any dependency can fail; isolate failures with circuit breakers, dead-letter queues, and graceful degradation."
  },
  {
    title: "Explicit API contracts",
    description: "Define versioned, backward-compatible API contracts before implementation and govern changes through review."
  },
  {
    title: "Security by default",
    description: "Validate tokens at the perimeter and enforce RBAC at the service boundary on every request."
  },
  {
    title: "Observable systems",
    description: "Ship structured logs with correlation IDs, health/readiness probes, and APM tracing so production behavior is inspectable."
  },
  {
    title: "Automated quality",
    description: "Gate releases on automated unit, integration, and E2E suites rather than manual QA."
  },
  {
    title: "Graceful shutdown and recovery",
    description: "Handle SIGTERM with connection draining and bounded retries so restarts and deployments are safe."
  },
  {
    title: "Maintainable architecture",
    description: "Keep services single-purpose with clear boundaries so the system remains changeable."
  },
  {
    title: "Backward compatibility",
    description: "Evolve interfaces additively; deprecate rather than break existing clients."
  }
];

export const ARCHITECTURE_FLOWS = [
  {
    from: "React Client",
    to: "API Gateway",
    mechanism: "Synchronous HTTPS / REST (JSON)",
    note: "Single entry point for all requests"
  },
  {
    from: "Client",
    to: "Identity Provider (Okta / Azure AD)",
    mechanism: "OAuth 2.0 / OIDC redirect flows",
    note: "Authentication happens at the IdP, not in services"
  },
  {
    from: "API Gateway",
    to: "Node.js Services",
    mechanism: "Synchronous REST over HTTPS",
    note: "Gateway validates JWT before forwarding"
  },
  {
    from: "Node.js Services",
    to: "Apache Kafka",
    mechanism: "Asynchronous event publish (Kafka protocol, TLS)",
    note: "Audit, analytics, and downstream decoupling"
  },
  {
    from: "Apache Kafka",
    to: "Consumers / Analytics",
    mechanism: "Asynchronous subscribe with consumer groups",
    note: "Dead-letter queues capture poison messages"
  },
  {
    from: "Node.js Services",
    to: "Data Layer",
    mechanism: "Synchronous SQL via pooled connections",
    note: "Prisma connection pool, read replicas"
  },
  {
    from: "All Layers",
    to: "Observability",
    mechanism: "Async telemetry export (OTLP)",
    note: "Dynatrace APM + structured logs"
  }
];

export const ARCHITECTURE_KEY_DECISIONS = [
  {
    question: "Why Kafka?",
    answer: "Decouples producers from consumers so a slow or failing downstream system never blocks the user request path."
  },
  {
    question: "Synchronous vs asynchronous?",
    answer: "REST for request/response workflows; Kafka for anything that must not block the request or that needs replay."
  },
  {
    question: "Where is authentication performed?",
    answer: "At the identity provider (Okta / Azure AD); the API gateway validates tokens before requests reach services."
  },
  {
    question: "Where is authorization enforced?",
    answer: "RBAC is evaluated at the service boundary against JWT scopes and claims — never trusted from client input."
  },
  {
    question: "How are retries handled?",
    answer: "Bounded retries with exponential backoff on clients; dead-letter queue retry handlers on Kafka consumers."
  },
  {
    question: "How is idempotency handled?",
    answer: "Stable event keys (e.g., transaction IDs) and unique constraints let consumers deduplicate re-delivered messages."
  },
  {
    question: "What happens when Kafka is unavailable?",
    answer: "Producers fail fast or queue locally; the synchronous request path continues to serve non-event features."
  },
  {
    question: "How are failures isolated?",
    answer: "Per-service health probes, circuit breakers, and per-topic dead-letter queues contain the blast radius of a single failure."
  },
  {
    question: "How does the architecture scale?",
    answer: "Stateless services scale horizontally behind the gateway; Kafka partitions parallelize consumers; read replicas scale queries."
  }
];

export const ENGINEERING_NOTES_TOPICS = [
  "Production Node.js Microservice Architecture",
  "Kafka Retry, DLQ & Idempotency Patterns",
  "Kubernetes Health vs Readiness Probes",
  "Enterprise CIAM Architecture on Azure",
  "JWT vs Session-Based Authentication",
  "Production Express API Design"
];
