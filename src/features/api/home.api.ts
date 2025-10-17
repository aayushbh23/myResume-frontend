import { api } from "@/services/api";
import type { HomeApiResponse, Profile } from "@/types/home.types";

export const homeApi = api.injectEndpoints({
  endpoints: (build) => ({

    getHomeProfile: build.query<Profile | null, void>({
      query: () => "/home",
      transformResponse: (res: HomeApiResponse) => {
        if (!res?.success) return null;
        const first = res.data?.[0];
        return first ?? null;
      },
      providesTags: [{ type: "Home", id: "DATA" }],
    }),

    updateProfile: build.mutation<Profile, Partial<Profile>>({
      query: (body) => ({
        url: "/home",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Home", id: "DATA" }],
    }),
  }),

  overrideExisting: false,
});

export const { useGetHomeProfileQuery, useUpdateProfileMutation } = homeApi;
