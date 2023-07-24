import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './character/characterSlice'

export const store = configureStore({
    reducer: {
        characters: characterSlice.reducer,
    },
})