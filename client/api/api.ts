//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IWudtime } from "../interfaces/wudtime";
import {auth} from '../firebase'
let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
interface documents {
  documents: [{ data: IWudtime; id: string; joiners: Array<{}> }];
}

interface WudtimeList {
  documents: documents["documents"];
}

// Define a service using a base URL and expected endpoints
// https://api-dot-datepan-app.ew.r.appspot.com//api/wuds
// baseUrl: "http://localhost:3001/api/wuds
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/wuds" }),
  tagTypes: ['wud'],
  endpoints: (builder) => ({
    ping: builder.query<IWudtime, string>({
      query: () => `/`,
    }),

    createWudTime: builder.query<IWudtime, IWudtime>({
      query: (data) => {
        return {
          url: "/wud",
          method: "POST",
          body: { data },
        };
      },
    }),
    myWuds: builder.query<WudtimeList, string>({
      query: (userId) => `/mywuds/${userId}`,
    }),
    myJoinedWuds: builder.query<WudtimeList, string>({
      query: (userId) => `/myjoinedwuds/${userId}`,
    }),

    getWudTimes: builder.query<WudtimeList, string>({
      query: (city) => `/wuds/${city}`,
    }),
    getWudTimebyId: builder.query<WudtimeList, string>({
      query: (id) => `/wud/${id}`,
      providesTags: (result, error, id) => [{ type: 'wud', id }]
    }),
    joinWudTime: builder.mutation<any, any>({
      query: (data) => {
        console.log('query', data)
        return {
          url: "/wud/join",
          method: "POST",
          body: { data },
        };
      },
    }),
    checkJoiner: builder.mutation<any, any>({
      // When event Admin checkin attendees
      query: (data) => {
        return {
          url: `/wud/join/${data.eventId}`,
          method: 'POST',
          body: {data}
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'wud', id }],
    })
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateWudTimeQuery,
  usePingQuery,
  useMyWudsQuery,
  useGetWudTimesQuery,
  useJoinWudTimeMutation,
  useMyJoinedWudsQuery,
  useGetWudTimebyIdQuery,
  useCheckJoinerMutation
} = api;
