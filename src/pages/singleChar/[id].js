import { useRouter } from 'next/router'

const Details = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <main className="bg-gray-50 text-black min-h-screen font-roboto">
            <div className='flex flex-col min-h-screen relative pb-14 '>
                <header className='flex flex-col bg-white-600  items-center justify-start sm:flex-row sm:justify-start sm:relative sm:h-header sm:border-b  sm:shadow-sm'>
                    <nav className='flex justify-self-end '>
                        <img
                            src="/rick-morty-navbar.svg"
                            alt="rick and morty navbar icon"
                            className="h-11 w-12 sm:ml-52  "
                        />
                    </nav>
                </header>
                <main className=" top-0 flex flex-col justify-center mx-auto">
                    <article className='relative top-0'>
                        <div className="text-center p-4">
                            <div className="relative mx-auto w-detail-img h-detail-img ">
                                <img className='    rounded-full' src={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} alt="rick" />
                            </div>
                            <h2 className="mt-4 text-3xl text-detail-name font-semibold">Rick Sanchez</h2>
                        </div>
                    </article>

                    <section className="mt-8 grid grid-cols-4 justify-center gap-4">

                    </section>



                    <section className='mt-8 grid grid-cols-4 justify-center gap-4 '>





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
