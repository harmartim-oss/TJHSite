
export interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Publication {
  title: string;
  outlet: string;
  date: string;
  summary: string;
  authors?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Affiliation {
  name: string;
  role: string;
  link: string;
  logoIcon: string;
}
