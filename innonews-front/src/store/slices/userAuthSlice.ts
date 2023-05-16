import { apiSlice } from "./apiSlice";

const AUTH_URL = '/api'

export const userAuthSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
            query:(data) => ({
                url:`${AUTH_URL}/login`,
                method:'POST',
                body:{...data}
            })
        }),
        register:builder.mutation({
            query:(data) => ({
                url:`${AUTH_URL}/register`,
                method:'POST',
                body:{...data}
            })
        }),
        logout:builder.mutation({
            query:() => ({
                url:`${AUTH_URL}/logout`,
                method:'POST' 
            })
        }),
       
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation} = userAuthSlice