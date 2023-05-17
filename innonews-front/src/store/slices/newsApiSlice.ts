import { apiSlice } from "./apiSlice";

const API_URL = '/api/news'

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        find:builder.mutation({
            query:({searchTerm,pageSize}) => ({
                url:`${API_URL}/search`,
                method:'GET',
                params:{
                    q:searchTerm,
                    pageSize
                }
            })
        }),
        customFeed:builder.mutation({
            query:() => ({
                url:`${API_URL}/feed`,
                method:'GET'
            })
        }),
        nonLoginFeed:builder.mutation({
            query:() => ({
                url:`${API_URL}/feed/common`,
                method:'GET'
            })
        }),
    })
})

export const {useFindMutation,useCustomFeedMutation,useNonLoginFeedMutation} = newsApiSlice