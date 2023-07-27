import { getChars, setPage } from '@/store/character';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import Link from 'next/link';///

const Cards = () => {
    //console.log(result);

    const dispatch = useDispatch();
    const { page, charactersList = [], isLoading, } = useSelector(state => state.characters)


    ///////////////////////////////////////////////////////////////////////////
    // if (isLoading) {
    //     <div className=''>
    //         <img src="/loading.svg" alt="" />
    //     </div>
    // } else {
    //     return (
    //         <>
    //             {
    //                 charactersList.map(char => (
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
                charactersList.map(char => (
                    <Link key={char.id} href={`/details/${char.id}`} >
                        <div className='flex items-center justify-center w-max-w-card m-auto relative '>
                            <div className='border overflow-hidden shadow-xl'>
                                <img className='mx-auto' alt={char.name} src={char.image}></img>
                                <div className='px-6 py-4'>
                                    <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap '>{char.name}</h3>
                                    <p className='text-base font-normal '>{char.species}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            {!isLoading && (<button
                className='col-span-4 border mx-auto w-40 h-9 text-blue-500 font-medium shadow-xl backdrop-blur-sm'
                onClick={(a) => {
                    dispatch(setPage({ page: page + 1 }));
                    dispatch(getChars());
                }}
            >
                Load More
            </button>)}


            {/* <button
                className='col-span-4'
                disabled={isLoading}
                onClick={() => {
                    dispatch(clearList())
                }
                }
            >
                Clean
            </button> */}
        </>
    )

}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards