import { api } from "@/services/api";
import type { EducationApiResponse, Education } from "../types/education.types";

export const educationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEducation: build.query<Education[] | null, void>({
      query: () => "/education",
      transformResponse: (res: EducationApiResponse) => {
        if (!res?.success) return null;
        return res.data ?? [];
      },
      providesTags: [{ type: "Education", id: "LIST" }],
    }),

    updateEducation: build.mutation<Education, { id: string; data: Partial<Education> }>({
      query: ({ id, data }) => ({
        url: `/education/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Education", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetEducationQuery, useUpdateEducationMutation } = educationApi;
