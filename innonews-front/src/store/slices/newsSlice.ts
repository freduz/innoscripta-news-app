import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   sports:[],
   education:[],
   politics:[],
   technology:[],
   entertainment:[],
   topHeadlines:[],

}

const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        setSports:(state,action) => {
            state.sports = action.payload;
        },
        setEducation:(state,action) => {
            state.sports = action.payload;
        },
        setPolitics:(state,action) => {
            state.sports = action.payload;
        },
        setTechnology:(state,action) => {
            state.sports = action.payload;
        },
        setEntertainment:(state,action) => {
            state.sports = action.payload;
        }
    }
})

export const {setSports,setEducation,setPolitics,setEntertainment,setTechnology} = newsSlice.actions
export default newsSlice.reducer
