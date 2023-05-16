import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import preferenceSliceReducer from './slices/preferenceSlice'
import settingsSliceReducer  from './slices/settingsSlice'
import { apiSlice } from './slices/apiSlice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        preferences:preferenceSliceReducer,
        settings:settingsSliceReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>
export default store