import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "reqres/cars",
  tagTypes: ["cars"],
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
    addCars: build.mutation({
      query: (body) => ({
        url: "/car",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "cars", id: "LIST" }],
    }),
    uptodateCars: build.mutation({
      query: (body) => ({
        url: "/car",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "cars", id: "LIST" }],
    }),
    getAllCars: build.query({
      query: (id = "1") => `/car?limit=8&page=${id}`,
      providesTags: (result) =>
        result?.data?.data
          ? [
              ...result?.data?.data?.map(({ id }) => ({ type: "cars", id })),
              { type: "cars", id: "LIST" },
            ]
          : [{ type: "cars", id: "LIST" }],
    }),
    deleteCar: build.mutation({
      query: (id) => ({
        url: `/car/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "cars", id: "LIST" }],
    }),
    getCarsDetail: build.query({
      query: (id = "") => `car/${id}`,
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
    getCars: build.query({
      query: (id = "") => `/car?limit=8&page=1&categoryId=${id}`,
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
  }),
});

export const {
  useAddCarsMutation,
  useUptodateCarsMutation,
  useGetCarsQuery,
  useGetAllCarsQuery,
  useDeleteCarMutation,
  useGetCarsDetailQuery,
} = carsApi;
