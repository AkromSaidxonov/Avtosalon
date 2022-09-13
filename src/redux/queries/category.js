import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "reqres/category",
  tagTypes: ["category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cartestwebapp.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlise.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "category", id: "LIST" }],
    }),
    upDateCategory: build.mutation({
      query: (body) => ({
        url: "/category",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "category", id: "LIST" }],
    }),
    getAllCategory: build.query({
      query: ({ id = "1", limit = "4" }) =>
        `/category/marka?limit=${limit}&page=${id}`,
      providesTags: (result) =>
        result?.data?.data
          ? [
              ...result?.data?.data?.map(({ id }) => ({
                type: "category",
                id,
              })),
              { type: "category", id: "LIST" },
            ]
          : [{ type: "category", id: "LIST" }],
    }),
    getAllCategoryId: build.query({
      query: (id = "1") => `/category/marka?limit=999999999999999&page=${id}`,
      invalidatesTags: [{ type: "category", id: "LIST" }],
    }),
    getCategoryById: build.query({
      query: (id = "") => `category/${id}`,
      invalidatesTags: [{ type: "category", id: "LIST" }],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "category", id: "LIST" }],
    }),
  }),
});

export const {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useAddCategoryMutation,
  useGetCategoryByIdQuery,
  useUpDateCategoryMutation,
  useGetAllCategoryIdQuery,
} = categoryApi;
