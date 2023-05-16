import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools:true
})

export default store