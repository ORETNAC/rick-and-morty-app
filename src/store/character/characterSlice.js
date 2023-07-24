import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        page: 0 ,
        charList: [],
        findCh: [],
        finalPage:null,
        isLoading: false,
        search: '',
        species: '',
        gender: '',
        status: ''
    },
    reducers: {
        startLoadingChars: (state, /* action */) => {
            state.isLoading = true
        },
        setChars: (state, action) => {
            state.isLoading = false;
            state.charList = action.payload.charList;
            state.finalPage = action.payload.finalPage;
            // state.page = action.payload.page;
        },
        clearList: (state, action) => {
            state.charList = [];
            console.log('pagina', state.page);
            state.page = 1;
            console.log('borrado')
            console.log('pagina', state.page);
        },
        setPage: (state, action) => {
            state.page = action.payload.page
        },
        setSearch: (state, action) => {
            state.search = action.payload.search;
        },
        setSpecies: (state, action) => {
            state.species = action.payload.species;
        },
        setGender: (state, action) => {
            state.gender = action.payload.gender;
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        }
    }
});
export const {setGender, setStatus, setSpecies, setSearch, setPage, startLoadingChars, setChars, clearList } = characterSlice.actions;