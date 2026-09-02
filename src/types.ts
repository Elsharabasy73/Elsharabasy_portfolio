export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category?: 'Full-Stack' | 'Backend API' | 'Mobile Backend';
  description: string;
  architectureHighlights?: {
    title: string;
    details: string;
    tech: string;
  }[];
  highlights: string[];
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  statusBadge?: string;
  dateRange?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
    title?: string;
    description?: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  iconName: 'school' | 'code' | 'database' | 'terminal' | 'javascript' | 'storage' | 'computer' | 'integration_instructions';
  colorType: 'blue' | 'purple' | 'indigo' | 'green' | 'amber' | 'red';
  skillsGained: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    experience?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location?: string;
  period: string;
  liveUrl?: string;
  tags: string[];
  imageUrl?: string;
  points: string[];
  architectureOverview?: string[];
  architectureHighlights?: {
    label: string;
    val: string;
  }[];
  techStackBreakdown?: {
    layer: string;
    technologies: string;
  }[];
}

export interface ArchitectureDiagram {
  id: string;
  name: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    type: 'client' | 'gateway' | 'app' | 'cache' | 'database' | 'storage';
    subtext: string;
  }[];
  flowSteps: string[];
}
