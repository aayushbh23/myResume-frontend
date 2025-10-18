import { api } from "@/services/api";
import type { SkillsApiResponse, Skills } from "@/types/skills.types";

export const skillsApi = api.injectEndpoints({

  endpoints: (build) => ({

    getSkills: build.query<Skills[], void>({
      query: () => "/skills",
      transformResponse: (res: SkillsApiResponse) => (res?.success ? res.data ?? [] : []),
      providesTags: [{ type: "Skills", id: "LIST" }],
    }),

    updateSkills: build.mutation<Skills, { id: string; data: Partial<Skills> }>({
      query: ({ id, data }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Skills", id: "LIST" }],
    }),

  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery, useUpdateSkillsMutation } = skillsApi;
