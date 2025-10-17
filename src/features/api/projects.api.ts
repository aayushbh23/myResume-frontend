import { api } from "@/services/api";
import type { ProjectsApiResponse, Project } from "../types/projects.types";

export const projectsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<Project[] | null, void>({
      query: () => "/projects",
      transformResponse: (res: ProjectsApiResponse) => {
        if (!res?.success) return null;
        return res.data ?? [];
      },
      providesTags: [{ type: "Projects", id: "LIST" }],
    }),

    updateProject: build.mutation<Project, { id: string; data: Partial<Project> }>({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectsQuery, useUpdateProjectMutation } = projectsApi;
