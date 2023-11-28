import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3001";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  reducerPath: "api",
  endpoints: (builder) => ({
    getSpreadSheets: builder.query({
      query: ({ auth, email }) => ({
        url: "/spreadsheets",
        method: "GET",
        headers: {
          authorization: auth,
        },
        params: {
          email,
        },
      }),
    }),
    getSheets: builder.query({
      query: ({ auth, spreadSheetsId }) => ({
        url: "/sheets",
        method: "GET",
        headers: {
          authorization: auth,
        },
        params: {
          spreadSheetsId,
        },
      }),
    }),
  }),
});

export const { useGetSpreadSheetsQuery, useGetSheetsQuery } = api;
export default api;
