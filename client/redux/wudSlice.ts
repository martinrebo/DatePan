import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Wudtime } from '../interfaces/wudtime'

const initialState: Wudtime = {  
    type: '',
    subtype: '', 
    activity: ''
}


export const wudSlice = createSlice({
    name: 'createWud', 
    initialState,
     reducers: {
            addType: (state : Wudtime, action: PayloadAction<Wudtime["type"]>) => { 
                state.type = action.payload
            }
}})


export const { addType } = wudSlice.actions
export const selectWud = (state: RootState) => state

export default wudSlice.reducer