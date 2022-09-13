import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "reqres/api",
  tagTypes: ["data"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cartestwebapp.herokuapp.com",
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/employee/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginMutation,

} = authApi;
