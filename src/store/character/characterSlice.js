import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        page: 0,
        charList: [],
        isLoading: false
    },
    reducers: {
        startLoadingChars: (state, /* action */) => {
            state.isLoading = true
        },
        setChars: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.charList = action.payload.charList;
        }

    }
});
export const { startLoadingChars, setChars } = characterSlice.actions;