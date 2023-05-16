import { apiSlice } from "./apiSlice";

const API_URL = '/api'

export const settingsSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        add:builder.mutation({
            query:({id,...data}) => ({
                url:`${API_URL}/preference/${id}`,
                method:'PUT',
                body:data
            })
        }),
        findAll:builder.mutation({
            query:() => ({
                url:`${API_URL}/preference`,
                method:'GET'
            })
        }),
    })
})

export const {useAddMutation,useFindAllMutation} = settingsSlice