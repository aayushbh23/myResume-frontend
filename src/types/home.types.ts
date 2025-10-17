export type Profile = {
  _id: string;
  name: string;
  title: string;
  location: string;
  summary: string;
  profileURL: string;
  links: {
    email: string;
    github?: string;
    website?: string;
  };
};

export type HomeApiResponse = {
  success: boolean;
  data: Profile[];
  page: number;
  total: number;
};

