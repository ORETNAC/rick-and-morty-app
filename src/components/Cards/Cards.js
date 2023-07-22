import { getChars } from '@/store/character';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";





const Cards = () => {
    //console.log(result);

    const dispatch = useDispatch();
    const { page, charList = [], isLoading } = useSelector(state => state.characters)



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

                    <div key={char.id} className='flex items-center justify-center w-max-w-card m-auto relative '>
                        <div className='border overflow-hidden shadow-xl'>
                            <img className='mx-auto' alt={char.name} src={char.image}></img>
                            <div className='px-6 py-4'>
                                <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap '>{char.name}</h3>
                                <p className='text-base'>{char.species}</p>
                            </div>
                        </div>
                    </div>
                ))

            }
            <button
                className='col-span-4'
                disabled={isLoading}
                onClick={() => dispatch(getChars(page))}
            >
                Load Mores
            </button>
        </>
    )

}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards