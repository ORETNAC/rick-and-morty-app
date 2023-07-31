import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link';///
import { getDetails, getEpisodes, setDetailID, clearDetails } from '@/store/character';
import { useEffect, useState } from 'react';
import Image from 'next/image'

const Details = () => {
    const { characterDetails, episodes, isLoading } = useSelector(state => state.characters);

    const [localLoading, setLocalLoading] = useState(isLoading)

    const router = useRouter()
    // console.log(router.query.id)
    const id = router.query.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDetailID({ detailId: id }))
        dispatch(getDetails());
        // dispatch(getEpisodes());
    }, [])

    useEffect(() => {
        setLocalLoading(isLoading)
    }, [isLoading])

    const clickClear = () => {
        dispatch(clearDetails());
    }


    return (
        <>
            <main className="bg-gray-50 text-black min-h-screen font-roboto">

                <Link onClick={clickClear} className='flex items-center mt-11 sm: ml-6 md:ml-52 ' href='/'>
                    <img src="/backArrow.svg" alt="Logo" className=" sm:h-6 sm:w-6 " />
                    <h3 className='font-karla text-lg font-bold'>GO BACK</h3>
                </Link>
                {localLoading ? <img className='m-auto h-4/6 w-4/6 animate-spin' src='/loading.svg'></img> :
                    <div className='flex flex-col min-h-screen relative pb-14 '>
                        <main className=" top-0 flex flex-col justify-center mx-auto">
                            <article className='relative top-0'>
                                <div className="flex flex-col text-center justify-center p-4">
                                    <div className="relative mx-auto  w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-detail-img lg:h-detail-img ">
                                        <img className=' rounded-full' src={characterDetails.image} alt={characterDetails.name} />
                                    </div>
                                    <h2 className="mt-4 text-3xl text-detail-name font-semibold">{characterDetails.name}</h2>
                                </div>
                                <aside className='md:flex md:justify-between md:mx-auto' >
                                    <div>
                                        <h3 className='text-gray-400 text-xl font-thin'>Informations</h3>
                                        <ul className='ml-5 mt-9 w-96'>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Gender
                                                </h4>
                                                <p className='text-gray-500 text-sm'>{characterDetails.gender}</p>
                                                <hr />
                                            </li>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Status
                                                </h4>
                                                <p className='text-gray-500 text-sm'>{characterDetails.status}</p>
                                                <hr />
                                            </li>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Spicie
                                                </h4>
                                                <p className='text-gray-500 text-sm'>{characterDetails.species}</p>
                                                <hr />
                                            </li>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Origin
                                                </h4>
                                                <p className='text-gray-500 text-sm'>{characterDetails.origin.name}</p>
                                                <hr />
                                            </li>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Type
                                                </h4>
                                                {
                                                    characterDetails.type === "" ? (
                                                        <p className='text-gray-500 text-sm'>Unknown</p>) : <p className='text-gray-500 text-sm'>{characterDetails.type}</p>
                                                }
                                                <hr />
                                            </li>
                                            <li className='py-2'>
                                                <h4 className='font-bold'>
                                                    Location
                                                </h4>
                                                <p className='text-gray-500 text-sm'>{characterDetails.location.name}</p>
                                                <hr />
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-gray-400 text-xl font-thin'>Episodes</h3>
                                        <ul className='ml-5 mt-9 w-96'>
                                            {
                                                episodes.map((epi) => (
                                                    <li key={epi.id} className='py-2'>
                                                        <h4 className='font-bold'>
                                                            {epi.episode}
                                                        </h4>
                                                        {/* {console.log('CharDitail=========>', epi)} */}
                                                        <p className='text-gray-500 text-sm'>{epi.name}</p>
                                                        <p className='text-amber-950 text-xs'>{epi.air_date}</p>
                                                        <hr />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </aside>
                            </article>
                        </main>
                    </div>
                }
            </main>

        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    // console.log('query:', query)
    return {
        props: {

        }
    }
}

export default Details
