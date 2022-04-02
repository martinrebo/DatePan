import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import  wudSlice from './wudSlice'
import {api} from '../api/api'

export const store = configureStore({
    reducer:
     { createWud: wudSlice,
       [api.reducerPath]: api.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    })



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
setupListeners(store.dispatch)
export default store;