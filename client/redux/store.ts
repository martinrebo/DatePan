import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import  wudSlice from './wudSlice'

export const store = configureStore({
    reducer:
     { createWud: wudSlice}})



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;