import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        page: 1,
        charactersList: [],
        detailId: 0,
        characterDetails: {
            id: 0,
            name: '',
            status: '',
            spicie: '',
            type: '',
            gender: '',
            origin: [],
            location: [],
            episode: [],
        },
        episodes: [],
        finalPage: null,
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
            state.charactersList = action.payload.charactersList;
            state.finalPage = action.payload.finalPage;
        },
        setDetailID: (state, action) => {
            state.detailId = action.payload.detailId;
        },
        setDetails: (state, action) => {
            state.characterDetails = action.payload.characterDetails;
            state.isLoading = false;
        },
        setEpisodes: (state, action) => {
            state.episodes = action.payload.episodes;
            state.isLoading = false;
        },
        clearDetails: (state, action) => {
            state.detailId = 999;
            state.characterDetails = {
                id: 0,
                name: '',
                status: '',
                spicie: '',
                type: '',
                gender: '',
                origin: [],
                location: [],
                episode: [],
            },
                state.episodes = [];
        },
        clearList: (state, action) => {
            state.charactersList = [];
            state.page = 1;
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
export const { clearDetails, setDetailID, setEpisodes, setDetails, setGender, setStatus, setSpecies, setSearch, setPage, startLoadingChars, setChars, clearList } = characterSlice.actions;