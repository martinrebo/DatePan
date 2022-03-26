import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Wudtime } from '../interfaces/wudtime'

const initialState: Wudtime = {  
    type: '',
    subtype: {
        name: '',
        activities: []
    }, 
    activity: ''
}


export const wudSlice = createSlice({
    name: 'createWud', 
    initialState,
     reducers: {
            addType: (state : Wudtime, action: PayloadAction<Wudtime["type"]>) => { 
                state.type = action.payload
            },
            addSubtype: (state : Wudtime, action: PayloadAction<Wudtime["subtype"]>) => {
                state.subtype = action.payload
            },
            addActivity: (state : Wudtime, action: PayloadAction<Wudtime["activity"]>) => {
                state.activity = action.payload
            }

}})


export const { addType, addSubtype, addActivity } = wudSlice.actions
export const selectWud = (state: RootState) => state

export default wudSlice.reducer