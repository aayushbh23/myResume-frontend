import { api } from "@/services/api";
import type { ExperienceApiResponse, Experience } from "../types/experience.types";

export const experienceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getExperience: build.query<Experience[] | null, void>({
      query: () => "/experience",
      transformResponse: (res: ExperienceApiResponse) => {
        if (!res?.success) return null;
        return res.data ?? [];
      },
      providesTags: [{ type: "Experience", id: "LIST" }],
    }),

    updateExperience: build.mutation<Experience, { id: string; data: Partial<Experience> }>({
      query: ({ id, data }) => ({
        url: `/experience/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Experience", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetExperienceQuery, useUpdateExperienceMutation } = experienceApi;
