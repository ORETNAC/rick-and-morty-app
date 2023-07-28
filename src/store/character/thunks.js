import { rickAndMortyApi } from '@/api/rickAndMortiApi'
import { startLoadingChars, setChars, setPage, clearList, setDetails, setEpisodes } from '@/store/character/'



export const getChars = () => {
    return async (dispatch, getState) => {
        const { page, charactersList, search, species, gender, status } = getState().characters
        try {
            dispatch(startLoadingChars());
            const resp = await rickAndMortyApi.get(`character/?page=${page}&name=${search}&species=${species}&gender=${gender}&status=${status}`);
            const allchs = [...charactersList, ...resp.data.results]
            dispatch(setChars({ charactersList: allchs, finalPage: resp.data.info.next }));
        } catch {
            console.error('no hay coincidencias en su busqueda')
            ///////Display del logo de carga/////////////////////////////////////////////
        }
    }
}

export const getDetails = () => {
    return async (dispatch, getState) => {
        // console.log("Ejecutando el primer thunk");
        const { detailId } = getState().characters
        try {
            dispatch(startLoadingChars());
            const resp = await rickAndMortyApi.get(`character/${detailId}`);
            const data = resp.data
            dispatch(setDetails({ characterDetails: data }))
        } catch {
            console.error('no hay coincidencias en su busqueda de detalles')
            ///////Display del logo de carga/////////////////////////////////////////////
        }
        await dispatch(getEpisodes())
        // console.log("Finalizando el primer thunk");
    }
}

export const getEpisodes = () => {
    return async (dispatch, getState) => {
        const { episodes, characterDetails } = getState().characters
        // console.log("Ejecutando el segundo thunk");
        let epi = [];
        try {
            for (let i = 0; i < characterDetails.episode.length; i++) {
                const url = characterDetails.episode[i];
                const parts = url.split('/');
                const lastPart = parts[parts.length - 1];
                const resp = await rickAndMortyApi.get(`episode/${lastPart}`);
                epi.push(resp.data)
                dispatch(setEpisodes({ episodes: [...epi] }));
            }

        } catch {
            console.error('no hay coincidencias en su busqueda de detalles')
            ///////Display del logo de carga/////////////////////////////////////////////
        }
        // console.log("Finalizando el segundo thunk");
    }
}
