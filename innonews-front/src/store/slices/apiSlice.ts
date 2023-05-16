import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:8000',
    prepareHeaders: (headers,{getState}:any) => {
        const token = getState()?.auth?.userInfo?.token;
        headers.set('accept','application/json')
        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }

        return headers
        
    }
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder) => ({})

})