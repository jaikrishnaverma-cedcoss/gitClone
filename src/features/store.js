import { configureStore } from '@reduxjs/toolkit'
import gitSlice from './slice'

export const store = configureStore({
    reducer:{
        gitSlice
    }
})