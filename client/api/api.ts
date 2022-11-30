//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IWudtime, IWudtimeResponse } from "../interfaces/wudtime";
import {auth} from '../firebase'
// let userId = auth.currentUser?.uid ? auth.currentUser?.uid : 'no Current user'
interface documents {
  documents: [{ data: IWudtime; id: string; joiners: Array<{}> }];
}

interface WudtimeList {
  documents: documents["documents"];
}

// Define a service using a base URL and expected endpoints
// https://api-dot-datepan-app.ew.r.appspot.com//api/wuds
// baseUrl: "http://localhost:3001/api/wuds"
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
        let userId = auth.currentUser?.uid
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
    getWudTimes: builder.query<WudtimeList, string>({
      query: (city) => `/wuds/${city}`,
    }),
    getWudTimebyId: builder.query<IWudtimeResponse, string>({
      query: (id) => `/wud/${id}`,
      providesTags: (result, error, id) => [{ type: 'wud', id }]
    }),
    joinWudTime: builder.mutation<any, any>({
      query: (data) => {
        let userId = auth.currentUser?.uid
        return {
          url: "/join",
          method: "POST",
          body: { data, userId },
        };
      },
    }),
    unJoinWudTime: builder.mutation<any, any>({
      query: (data) => {
        let userId = auth.currentUser?.uid
        return {
          url: "/join",
          method: "DELETE",
          body: { data, userId },
        };
      },
    }),
    checkJoiner: builder.mutation<any, any>({
      // When event Admin checkin attendees
      query: (data) => {
        let userId = auth.currentUser?.uid
        let userName = auth.currentUser?.displayName
        let photoURL = auth.currentUser?.photoURL
        return {
          url: `/join/${data.eventId}`,
          method: 'POST',
          body: {data, userId, userName, photoURL }
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'wud', id }],
    }),
    myJoinedWuds: builder.query<WudtimeList, string>({
      query: (userId) => `/join/myjoinedwuds/${userId}`,
    }),
    createGroup: builder.mutation<any, any>({
      query: (data)=>{
        let userId = auth.currentUser?.uid
        return {
          url: 'groups/createGroup',
          method: 'POST',
          body: {data, userId}
        }
      }
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
  useUnJoinWudTimeMutation,
  useMyJoinedWudsQuery,
  useGetWudTimebyIdQuery,
  useCheckJoinerMutation,
  useCreateGroupMutation,
} = api;
