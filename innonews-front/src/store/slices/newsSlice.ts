import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   sports:[],
   education:[],
   politics:[],
   technology:[],
   entertainment:[],
   topHeadlines:[],
   customFeed:{
    latestNews:[],
    randomPicks:[],
    trending:[]
   },
   searchNews:[]

}

const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        setSports:(state,action) => {
            state.sports = action.payload;
        },
        setEducation:(state,action) => {
            state.education = action.payload;
        },
        setPolitics:(state,action) => {
            state.politics = action.payload;
        },
        setTechnology:(state,action) => {
            state.technology = action.payload;
        },
        setEntertainment:(state,action) => {
            state.entertainment = action.payload;
        },
        setCustomFeed:(state,action) => {
            state.customFeed = action.payload;
        },
        setSearchNews:(state,action) => {
            state.searchNews = action.payload;
        },

    }
})

export const {setSports,setEducation,setPolitics,setEntertainment,setTechnology,setCustomFeed,setSearchNews} = newsSlice.actions
export default newsSlice.reducer
