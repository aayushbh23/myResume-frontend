export type Skills = {
  _id: string;
  name: string;
  rating: number;
};

export type SkillsApiResponse = {
  success: boolean;
  data: Skills[];
  page: number;
  total: number;
};
