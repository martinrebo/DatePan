//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Wudtime } from "../interfaces/wudtime";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/wuds" }),
  endpoints: (builder) => ({

    ping: builder.query<Wudtime, string>({
      query: () => `/`,
    }),

    createWudTime: builder.query<Wudtime, Wudtime>({
      query: (data) => {
        return {
          url: "/wud",
          method: "POST",
          body: { data },
        };
      },
    }),


  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useCreateWudTimeQuery, usePingQuery } = api;
