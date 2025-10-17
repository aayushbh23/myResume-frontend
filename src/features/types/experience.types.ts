export type Experience = {
  _id: string;
  company: string;
  companyURL?: string;
  role: string;
  start: string; // YYYY
  end: string; // "Present" or YYYY
  highlights: string[];
};

export type ExperienceApiResponse = {
  success: boolean;
  data: Experience[];
  page: number;
  total: number;
};

