export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  environment: string[];
  responsibilities: string[];
  architectureHighlights: string[];
  keyImpact: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'microservices' | 'iam-security' | 'cloud-devops' | 'ai-fullstack';
  featured?: boolean;
  projectOrigin?: string;
  summary: string;
  techStack: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    security?: string;
    observability?: string;
    infrastructure?: string;
  };
  keyHighlights: string[];
  detailedWriteup: {
    problemStatement: string;
    solutionOverview: string;
    engineeringDecisions: {
      title: string;
      description: string;
    }[];
    codeSnippet?: {
      language: string;
      title: string;
      code: string;
    };
    outcomes: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
  sourceNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: 'frontend' | 'gateway' | 'service' | 'eventbus' | 'database' | 'identity';
  description: string;
  tech: string;
  protocols: string[];
  securityControls: string[];
}
