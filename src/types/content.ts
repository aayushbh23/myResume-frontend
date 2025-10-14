export type Project = {
  _id: string;
  name: string;
  description: string;
  tech: string[];
  imageURL?: string;
  projectURL?: string;
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  start: string; // YYYY
  end: string;   // "Present" or YYYY
  highlights: string[];
};

export type Education = {
  _id: string;
  school: string;
  degree: string;
  year: string;
};

export type Skills = {
  _id: string;
  name: string;
  rating: int;
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
  skills: Skills[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
};
