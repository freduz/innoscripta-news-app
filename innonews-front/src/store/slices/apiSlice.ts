import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';


import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!')
      toast.warn(`Async error!' ${action.error.data.message}`)
    }

    return next(action)
  }

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
    endpoints:(builder) => ({}),
})


setupListeners(apiSlice);