import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://sattamatkadpbos.com/";

export const apiClient = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers) => {
      // Next.js localStorage access
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("authtoken");

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }

      return headers;
    },
  }),

  tagTypes: ["getmarketlist", "allMatch", "result30days"],

  endpoints: (builder) => ({
    getMarketList: builder.query({
      query: () => "apis/client_cron_market.php?action=get_market_list",
      providesTags: ["getmarketlist"],
    }),
    // redux/services/api.ts

    getMarketResult: builder.query({
      query: ({ name, fromDate, toDate }) =>
        `apis/client_cron_market.php?action=get_results&name=${encodeURIComponent(
          name,
        )}&from_date=${fromDate}&to_date=${toDate}`,

      providesTags: ["getmarketlist"],
    }),

    getAllMatch: builder.query({
      query: () => ({
        url: "https://manage.sattamatkadpbos.com/api/allMatch",
        method: "GET",
      }),

      providesTags: ["allMatch"],
    }),

    getResult30Days: builder.query({
      query: (name) => ({
        url: `https://manage.sattamatkadpbos.com/api/get-result-30-days?name=${encodeURIComponent(
          name,
        )}`,
        method: "GET",
      }),

      providesTags: ["result30days"],
    }),

    getAppData: builder.query({
      query: () => ({
        url: `https://manage.sattamatkadpbos.com/api/getdata`,
        method: "GET",
      }),
    }),


  }),
});

export const {
  useGetMarketListQuery,
  useGetMarketResultQuery,
  useGetAllMatchQuery,
  useGetResult30DaysQuery,
  useGetAppDataQuery
} = apiClient;
