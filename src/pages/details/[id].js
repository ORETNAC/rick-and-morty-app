import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link';///
import { getDetails, getEpisodes, setDetailID } from '@/store/character';
import { useEffect } from 'react';


const Details = () => {
    const { characterDetails, episodes } = useSelector(state => state.characters);
    // console.log('charlist:', charactersList);
    const router = useRouter()
    console.log(router.query.id)
    const id = router.query.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDetailID({ detailId: id }))
        dispatch(getDetails());
        // dispatch(getEpisodes());
    }, [])




    return (

        <main className="bg-gray-50 text-black min-h-screen font-roboto">
            <Link href='/'>Volver</Link>
            <div className='flex flex-col min-h-screen relative pb-14 '>
                <main className=" top-0 flex flex-col justify-center mx-auto">
                    <article className='relative top-0'>
                        <div className="text-center p-4">
                            <div className="relative mx-auto w-detail-img h-detail-img ">
                                <img className=' rounded-full' src={characterDetails.image} alt="rick" />
                            </div>
                            <h2 className="mt-4 text-3xl text-detail-name font-semibold">{characterDetails.name}</h2>
                        </div>
                        <aside className='flex justify-between mx-auto' >
                            <div>
                                <h3 className='text-gray-400 text-xl font-thin'>Informations</h3>
                                <ul className='ml-5 mt-9 w-96'>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Gender
                                        </h4>
                                        <p>{characterDetails.gender}</p>
                                        <hr />
                                    </li>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Status
                                        </h4>
                                        <p>{characterDetails.status}</p>
                                        <hr />
                                    </li>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Spicie
                                        </h4>
                                        <p>{characterDetails.species}</p>
                                        <hr />
                                    </li>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Origin
                                        </h4>
                                        <p>{characterDetails.origin.name}</p>
                                        <hr />
                                    </li>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Type
                                        </h4>
                                        {
                                            characterDetails.type === "" ? (
                                                <p>Unknown</p>) : <p>{characterDetails.type}</p>
                                        }

                                        <hr />
                                    </li>
                                    <li className='py-2'>
                                        <h4 className='font-bold'>
                                            Location
                                        </h4>
                                        <p>{characterDetails.location.name}</p>
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
                                                {console.log('CharDitail=========>', epi)}
                                                <p>{epi.name}</p>
                                                <p>{epi.air_date}</p>
                                                <hr />
                                            </li>
                                        ))
                                    }

                                </ul>

                            </div>

                        </aside>
                    </article>

                    <section className="mt-8 grid grid-cols-4 justify-center gap-4">

                    </section>





                </main>
                <footer>

                </footer>
            </div>
        </main>

    )
}

export const getServerSideProps = async ({ query }) => {
    console.log('query:', query)
    return {
        props: {

        }
    }
}

export default Details
