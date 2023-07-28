import { getChars, setPage } from '@/store/character';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Cards = () => {

    const dispatch = useDispatch();
    const { page, charactersList = [], finalPage } = useSelector(state => state.characters)
    const [localFinalPage, setlocalFinalPage] = useState(finalPage);

    useEffect(() => {
        setlocalFinalPage(finalPage);
    }, [finalPage,]);
    return (
        <>
            {
                charactersList.map(char => (
                    <Link key={char.id} href={`/details/${char.id}`} >
                        {/* <div className='flex items-center justify-center w-full m-auto relative lg:flex lg:items-center lg:justify-center lg:w-max-w-card lg:m-auto lg:relative '>
                            <div className='w-3/4 aspect-square border overflow-hidden shadow-xl'>
                                <img className='mx-auto ' alt={char.name} src={char.image}></img>
                                <div className='px-6 py-2'>
                                    <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap h-6'>{char.name}</h3>
                                    <p className='h-4 text-base font-normal '>{char.species}</p>
                                </div>
                            </div>
                        </div> */}
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

            {localFinalPage === null ? null : (<button
                className='col-span-4 border mx-auto w-40 h-9 text-blue-500 font-medium shadow-xl backdrop-blur-sm'
                onClick={(a) => {
                    dispatch(setPage({ page: page + 1 }));
                    dispatch(getChars());
                }}
            >
                Load More
            </button>)}
        </>
    )
}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards