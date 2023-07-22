import { rickAndMortyApi } from '@/api/rickAndMortiApi'
import { startLoadingChars, setChars } from '@/store/character/'

export const getChars = (pageNumber = 0, search = '', status = '', species = '', gender = '') => {
    return async (dispatch, getState) => {
        console.log('1',getState.state)
        dispatch(startLoadingChars());
        console.log('2')
        const resp = await rickAndMortyApi.get(`character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`);

        dispatch(setChars({ page: pageNumber + 1, charList: resp.data.results }));
        console.log(resp)
    }

}