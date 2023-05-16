import { apiSlice } from "./apiSlice";

const API_URL = '/api/news'

export const preferenceSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        categories:builder.mutation({
            query:(data) => ({
                url:`${API_URL}/categories`,
                method:'GET',
                params:{term:data}
            })
        }),
        authors:builder.mutation({
            query:(data) => ({
                url:`${API_URL}/authors`,
                method:'GET',
                params:{
                 term:data
                }
            })
        }),
        sources:builder.mutation({
            query:(data) => ({
                url:`${API_URL}/sources`,
                method:'GET' ,
                params:{
                    term:data
                }
            })
        }),
        
       
    })
})

export const {useCategoriesMutation,useAuthorsMutation,useSourcesMutation} = preferenceSlice