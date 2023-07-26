import { getChars, setPage } from '@/store/character';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";


import { clearList } from "@/store/character";


const Cards = () => {
    //console.log(result);

    const dispatch = useDispatch();
    const { page, charList = [], isLoading, search, finalPage, species, gender, status } = useSelector(state => state.characters)
    console.log('finalPage', finalPage)


    ///////////////////////////////////////////////////////////////////////////
    // if (isLoading) {
    //     <div className=''>
    //         <img src="/loading.svg" alt="" />
    //     </div>
    // } else {
    //     return (
    //         <>
    //             {
    //                 charList.map(char => (
    //                     <div key={char.id} className='flex items-center justify-center w-max-w-card m-auto relative '>
    //                         <div className='border overflow-hidden shadow-xl'>
    //                             <img className='mx-auto' alt={char.name} src={char.image}></img>
    //                             <div className='px-6 py-4'>
    //                                 <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap '>{char.name}</h3>
    //                                 <p className='text-base'>{char.species}</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))
    //             }
    //             <button className='col-span-4' onClick={() => (s)/*loadMore*/}>Load Mores</button>
    //         </>
    //     )
    // }
    //////////////////////////////////////////////////////////////////////

    return (
        <>
            {



                charList.map(char => (
                    <a key={char.id} href=''>
                        <div className='flex items-center justify-center w-max-w-card m-auto relative '>
                            <div className='border overflow-hidden shadow-xl'>
                                <img className='mx-auto' alt={char.name} src={char.image}></img>
                                <div className='px-6 py-4'>
                                    <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap '>{char.name}</h3>
                                    <p className='text-base'>{char.species}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))
            }
            {true && (<button
                className='col-span-4'
                disabled={isLoading}
                onClick={(a) => {
                    dispatch(setPage({ page: page + 1 }));
                    dispatch(getChars());
                }}
            >
                Load Mores
            </button>)}


            <button
                className='col-span-4'
                disabled={isLoading}
                onClick={() => {
                    dispatch(clearList())
                }
                }
            >
                Clean
            </button>
        </>
    )

}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards