import { rickAndMortyApi } from '@/api/rickAndMortiApi'
import { startLoadingChars, setChars, setPage, clearList } from '@/store/character/'
import { useSelector, useDispatch } from 'react-redux'


export const getChars = (pageNumber = 0, charList = [], search = '', finalPage, species = '',gender = '', status = '') => {
    return async (dispatch, getState) => {

        try {
            dispatch(startLoadingChars());
            // console.log('thunk page:', pageNumber)
            // console.log('thunk search:', search)
            // console.log('thunk finalPage:', finalPage)
            const resp = await rickAndMortyApi.get(`character/?page=${pageNumber}&name=${search}&species=${species}&gender=${gender}&status=${status}`);


            const allchs = [...charList, ...resp.data.results]

            dispatch(setPage({ page: pageNumber }))

            dispatch(setChars({ charList: allchs, finalPage: resp.data.info.next }));


            console.log(resp)
            //console.log(resp.data.info.next)

        } catch {
            console.error('no hay coincidencias en su busqueda')
            ///////Display del logo de carga/////////////////////////////////////////////
        }
    }

}

export const clearChars = () => {
    return async (dispatch, getState) => {

        dispatch(clearList());
        // console.log('thunk 2 page:', pageNumber)
        // console.log('thunk 2 search:', search)
        // console.log('thunk 2 finalPage:', finalPage)


        //const allchs = []

        // dispatch(setPage({ page: pageNumber + 1 }))

        //dispatch(setChars({ charList: allchs }));


        //console.log(resp)


    }

}