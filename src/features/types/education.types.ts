export type Education = {
  _id: string;
  school: string;
  degree: string;
  year: string;
};

export type EducationApiResponse = {
  success: boolean;
  data: Education[];
  page: number;
  total: number;
};

