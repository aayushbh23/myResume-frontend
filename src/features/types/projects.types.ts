export type Project = {
  _id: string;
  name: string;
  description: string;
  tech: string[];
  imageURL?: string | null;
  projectURL?: string | null;
};

export type ProjectsApiResponse = {
  success: boolean;
  data: Project[];
  page: number;
  total: number;
};
