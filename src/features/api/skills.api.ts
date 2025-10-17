import { api } from "@/services/api";
import type { SkillsApiResponse, Skills } from "../types/skills.types";

export const skillsApi = api.injectEndpoints({

  endpoints: (build) => ({

    getSkills: build.query<Skill[] | null, void>({
      query: () => "/skills",
      transformResponse: (res: SkillsApiResponse) => {
        if (!res?.success) return null;
        return res.data ?? [];
      },
      providesTags: [{ type: "Skills", id: "LIST" }],
    }),

    updateSkill: build.mutation<Skill, { id: string; data: Partial<Skill> }>({
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

export const { useGetSkillsQuery, useUpdateSkillMutation } = skillsApi;
