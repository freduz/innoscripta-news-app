import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   preferences : {
    categories:[],
    authors:[],
    sources:[]
   }
}

const settingsSlice = createSlice({
    name:'settings',
    initialState,
    reducers:{
        setPereferences:(state,action) => {
            state.preferences = action.payload;
        }
    }
})

export const {setPereferences} = settingsSlice.actions
export default settingsSlice.reducer
