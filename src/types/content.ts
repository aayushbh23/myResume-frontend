export type Project = {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string;   // "Present" or YYYY-MM
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export type Content = {
  name: string;
  title: string;
  location: string;
  summary: string;
  links: {
    email: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
};
