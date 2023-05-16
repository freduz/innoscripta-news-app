import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   categories:[],
   authors:[],
   sources:[]
}

const preferenceSlice = createSlice({
    name:'preferences',
    initialState,
    reducers:{
        setCategories:(state,action) => {
            state.categories = action.payload;
        },
        setAuthors:(state,action) => {
            state.authors =action.payload;
        },
        setSources:(state,action) => {
            state.sources = action.payload;
        }
    }
})

export const {setCategories,setAuthors,setSources} = preferenceSlice.actions
export default preferenceSlice.reducer
