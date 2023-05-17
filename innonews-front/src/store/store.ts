import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { apiSlice } from './slices/apiSlice'

import preferenceSliceReducer from './slices/preferenceSlice'
import settingsSliceReducer  from './slices/settingsSlice'
import newsSliceReducer from './slices/newsSlice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        preferences:preferenceSliceReducer,
        settings:settingsSliceReducer,
        news:newsSliceReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>
export default store