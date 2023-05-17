import { apiSlice } from "./apiSlice";

const API_URL = '/api/news'

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        find:builder.mutation({
            query:({searchTerm,pageSize}) => ({
                url:`${API_URL}/search/${searchTerm}`,
                method:'GET',
                params:{
                    pageSize
                }
            })
        })
    })
})

export const {useFindMutation} = newsApiSlice