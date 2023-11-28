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
    updateSheet: builder.query({
      query: ({ auth, spreadSheetsId, sheetName, values }) => ({
        url: "/sheets",
        method: "PUT",
        headers: {
          authorization: auth,
        },
        body: {
          spreadSheetsId,
          sheetName,
          values
        },
      }),
    }),
  }),
});

export const { useGetSpreadSheetsQuery, useGetSheetsQuery, useUpdateSheetQuery } = api;
export default api;
