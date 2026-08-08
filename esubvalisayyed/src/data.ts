import { Project, Service, TechItem, TimelineItem, Certification, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Sayyed Vali',
  title: 'Senior Full Stack Engineer | Technical Lead',
  location: 'Hyderabad, India',
  email: 'Sayyed.vali@gmail.com',
  phone: '+91-9966562620',
  linkedin: 'https://linkedin.com/in/esub-vali-sayyed-516759100',
  github: 'https://github.com/sanasham',
  summary: 'Lead Software Engineer and senior hands-on Full Stack Engineer with extensive experience designing, building, and supporting enterprise-scale applications across Banking, Identity & Access Management, Government, and Global Non-Profit domains. Hands-on expert in React.js, Node.js, TypeScript, Microservices, Azure AKS, Kafka, OAuth 2.0, and GenAI / Agentic AI integration.'
};

export const SKILL_MARQUEE_ITEMS = [
  'React.js', 'Node.js', 'Express.js', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Microservices', 
  'Kafka Event-Driven', 'Azure AKS', 'Azure APIM', 'AWS Cloud', 'GenAI & LLMs', 
  'Agentic AI', 'OAuth 2.0 / Okta', 'Dynatrace APM', 'Playwright & Jest'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Core Banking Microservices Engine — Lloyds Banking Group',
    description: 'Technical architecture and full-stack development for a core banking module within a 20-microservice ecosystem, handling high-traffic transaction flows, Kafka event pipelines, and ~90% test coverage.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    tags: ['React.js', 'Node.js', 'Kafka', 'GCP BigQuery', 'Dynatrace APM', 'OAuth 2.0'],
    category: 'Banking & FinTech',
    featured: true
  },
  {
    id: '2',
    title: 'Enterprise CIAM Platform & Security Gateway — Bosch',
    description: 'End-to-end technical delivery of an enterprise Customer Identity & Access Management (CIAM) platform hosted on Azure AKS and Azure API Management with strict RBAC, OAuth 2.0, and Okta SSO controls.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Azure AKS', 'Azure APIM', 'Node.js', 'CIAM / IAM', 'OAuth 2.0', 'RBAC'],
    category: 'Identity & Security',
    featured: true
  },
  {
    id: '3',
    title: 'MyRotary Global Enterprise Portal — Rotary International',
    description: 'Hands-on technical leadership for a global portal workstream. Built a reusable React component library adopted across teams, decoupled services using Kafka, and integrated REST/GraphQL APIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['React.js', 'GraphQL', 'AWS', 'Kafka', 'Okta SSO', 'TypeScript'],
    category: 'Global Portals',
    featured: true
  },
  {
    id: '4',
    title: 'GenAI & Agentic AI Integration Suite',
    description: 'Enterprise Generative AI integration patterns using OpenAI & Anthropic Claude APIs, Model Context Protocol (MCP) for connecting tools to LLMs, multi-step agentic workflows, and RAG architectures.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['GenAI & LLMs', 'Claude API', 'OpenAI', 'MCP Protocol', 'Agentic AI'],
    category: 'AI & Emerging Tech',
    featured: true
  },
  {
    id: '5',
    title: 'Multilingual Prime Minister\'s Office Portal — Dubai Government',
    description: 'Multilingual enterprise web application built for international engineering teams and government stakeholders, featuring high-reliability SQL queries and strict security standards.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    tags: ['ASP.NET', 'C#', 'JavaScript', 'SQL Server', 'GovTech'],
    category: 'Government Tech'
  },
  {
    id: '6',
    title: 'Well Files Viewer Enterprise Suite — Idocz Software',
    description: 'Enterprise product modules, reusable UI components, and complex SQL stored procedures built for oil & gas well document analytics and direct client delivery.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop',
    tags: ['C#', 'ASP.NET', 'SQL Server', 'Stored Procedures'],
    category: 'Enterprise SaaS'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React.js', category: 'Frontend', iconName: 'Atom', color: '#61DAFB' },
  { name: 'HTML5 & CSS3', category: 'Frontend', iconName: 'Palette', color: '#E34F26' },
  { name: 'Node.js', category: 'Backend', iconName: 'Server', color: '#339933' },
  { name: 'Express.js', category: 'Backend', iconName: 'Layers', color: '#000000' },
  { name: 'TypeScript', category: 'Language', iconName: 'Code', color: '#3178C6' },
  { name: 'JavaScript', category: 'Language', iconName: 'FileCode', color: '#F7DF1E' },
  { name: 'Microservices', category: 'Architecture', iconName: 'Cpu', color: '#38BDF8' },
  { name: 'Kafka Event-Driven', category: 'Event-Driven', iconName: 'Zap', color: '#E10098' },
  { name: 'Azure AKS & APIM', category: 'Cloud & API', iconName: 'Cloud', color: '#0089D6' },
  { name: 'AWS Cloud Services', category: 'Cloud', iconName: 'Cloud', color: '#FF9900' },
  { name: 'OAuth 2.0 / Okta SSO', category: 'Identity & Security', iconName: 'Lock', color: '#007A87' },
  { name: 'Generative AI & LLMs', category: 'AI Technology', iconName: 'Sparkles', color: '#10A37F' },
  { name: 'Model Context Protocol', category: 'Agentic AI', iconName: 'Bot', color: '#8B5CF6' },
  { name: 'GCP & BigQuery', category: 'Cloud & Data', iconName: 'Database', color: '#4285F4' },
  { name: 'GraphQL & REST APIs', category: 'API Design', iconName: 'Share2', color: '#E10098' },
  { name: 'C# / ASP.NET', category: 'Backend', iconName: 'Layers', color: '#512BD4' },
  { name: 'Dynatrace APM', category: 'Observability', iconName: 'Activity', color: '#1496FF' },
  { name: 'Jest & Playwright', category: 'Quality & Testing', iconName: 'CheckCircle', color: '#C21325' },
  { name: 'Docker & Kubernetes', category: 'DevOps', iconName: 'Container', color: '#2496ED' },
  { name: 'SQL Server & MongoDB', category: 'Database', iconName: 'Database', color: '#CC292B' }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    role: 'Software Engineer E | Technical Lead',
    company: 'Lloyds Banking Group',
    type: 'Full-time',
    period: 'Dec 2024 – Feb 2026',
    description: 'Contributed to architecture and technical design decisions for a core banking module in a 20-microservice ecosystem. Built React.js modules, Node.js backend services, Kafka pipelines, and Dynatrace monitoring. Raised automated test coverage to ~90% with Jest & Playwright.'
  },
  {
    role: 'Senior Software Engineer',
    company: 'AccionLabs (Client: Rotary International — MyRotary)',
    type: 'Full-time',
    period: 'Dec 2021 – Nov 2024',
    description: 'Hands-on technical leadership for MyRotary global portal. Built reusable React component library, designed REST & GraphQL APIs, implemented Okta SSO, introduced Kafka-based messaging, and led technical delivery for 6 engineers.'
  },
  {
    role: 'Specialist | Technical Lead',
    company: 'Bosch',
    type: 'Full-time',
    period: 'Jan 2015 – Oct 2021',
    description: 'Led end-to-end technical delivery of enterprise CIAM platform on Azure AKS and Azure API Management (APIM). Applied RBAC identity controls, managed Azure-hosted Node.js services, and mentored a team of up to 8 engineers.'
  },
  {
    role: 'Technical Project Lead',
    company: 'Pactera EDGE',
    type: 'Full-time',
    period: 'Oct 2021 – Dec 2021',
    description: 'Coordinated technical delivery for enterprise client engagements, sprint planning, estimation, and Agile execution across engineering, QA, and business stakeholders.'
  },
  {
    role: 'Lead Engineer',
    company: 'HCL Technologies (Client: Prime Minister\'s Office - Dubai)',
    type: 'Full-time',
    period: 'Jan 2013 – Jan 2015',
    description: 'Developed multilingual enterprise web applications in a 16-member international team. Optimized SQL queries, maintained system reliability, and supported secure government solutions.'
  },
  {
    role: 'Software Engineer',
    company: 'Idocz Software Solutions (Product: Well Files Viewer)',
    type: 'Full-time',
    period: 'Aug 2010 – Jan 2013',
    description: 'Developed enterprise product modules, reusable UI components, complex SQL queries, and stored procedures in a 5-member product engineering team.'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    number: '01',
    title: 'Enterprise Architecture & Technical Leadership',
    description: 'Providing system design, technical decision-making, API governance, and hands-on mentoring for engineering teams delivering high-concurrency microservices.',
    features: ['Microservices & Event-Driven Architecture', 'API Design & Azure APIM Governance', 'Engineering Standards & Code Reviews', 'Technical Leadership & Mentoring']
  },
  {
    id: 's2',
    number: '02',
    title: 'Full Stack Microservices Engineering',
    description: 'Designing and building scalable frontend modules with React.js/TypeScript and high-throughput backend microservices with Node.js, C#/.NET, and Kafka messaging.',
    features: ['React.js & Node.js Application Modules', 'Kafka Event Producer & Consumer Services', 'REST & GraphQL API Contract Design', 'Automated Testing (Jest & Playwright ~90% Coverage)']
  },
  {
    id: 's3',
    number: '03',
    title: 'Identity, CIAM & Enterprise Security',
    description: 'Architecting secure customer identity & access management platforms utilizing OAuth 2.0, JWT, Azure AD, Okta SSO, and Role-Based Access Control (RBAC).',
    features: ['OAuth 2.0 & JWT Authentication', 'Okta SSO & Azure AD Integration', 'CIAM Platform & RBAC Enforcement', 'API Gateway Security Policies']
  },
  {
    id: 's4',
    number: '04',
    title: 'GenAI & Agentic AI Integration',
    description: 'Integrating LLM APIs (OpenAI, Anthropic Claude), Agentic AI workflows, tool-calling frameworks, Model Context Protocol (MCP), and Retrieval-Augmented Generation (RAG).',
    features: ['GenAI & LLM API Wrappers', 'Agentic Workflows & Multi-Step Reasoning', 'Model Context Protocol (MCP) Setup', 'RAG & Custom Prompt Architecture']
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    degree: 'Master of Technology (Computer Science Engineering)',
    institution: 'Nagarjuna University',
    year: 'Postgraduate Degree',
    badgeText: 'M.Tech Computer Science'
  },
  {
    degree: 'Bachelor of Technology (Electrical & Electronics Engineering)',
    institution: 'JNTU University',
    year: 'Undergraduate Degree',
    badgeText: 'B.Tech Electrical & Electronics'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: 'Sayyed’s technical leadership on our core banking microservices ecosystem brought exceptional resilience, high test coverage (~90%), and fault-isolated Kafka event pipelines under strict security reviews.',
    author: 'Enterprise Delivery Lead',
    role: 'Core Banking Division',
    company: 'Lloyds Banking Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    stars: 5
  },
  {
    quote: 'Sayyed provided hands-on technical leadership for our MyRotary workstream, creating a reusable React component library and robust Okta SSO integration that transformed our platform consistency.',
    author: 'VP of Product Engineering',
    role: 'Global Enterprise Portal',
    company: 'Rotary International / AccionLabs',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    stars: 5
  },
  {
    quote: 'An outstanding Technical Lead with deep domain expertise in CIAM, Azure AKS, and APIM. Sayyed mentored a team of 8 engineers and consistently drove root-cause fixes that eliminated production issues.',
    author: 'Principal Security Architect',
    role: 'Identity & Access Management',
    company: 'Bosch',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    stars: 5
  }
];

