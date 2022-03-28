// 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Wudtime } from '../interfaces/wudtime'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/wuds' }),
  endpoints: (builder) => ({

    createWudTime: builder.query<Wudtime, string>({
      query: (name) => `/${name}`,
    }),
    ping: builder.query<Wudtime, string>({
        query: (name) => `/${name}`,
      }),

  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useCreateWudTimeQuery, usePingQuery } = api