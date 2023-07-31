import Head from 'next/head'
import { getChars } from "@/store/character";
import Cards from "../components/Cards/Cards.js";
import Filter from "../components/Filter/Filter.js";
import Search from "../components/Search/Search.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Home() {


  const { detailId, charactersList } = useSelector(state => state.characters)

  const dispatch = useDispatch();

  useEffect(() => {
    if (charactersList.length > 0) return
    dispatch(getChars());
  }, [])




  return (
    <>
      <Head>
        <title>Cantero's Rick And Morty Tecnical Test</title>
        <link rel='icon' href='/rick-morty-navbar.svg' />
      </Head>
      <main className="bg-white text-black min-w-full min-h-screen font-roboto">
        <div className='flex flex-col min-h-screen relative pb-14 '>
          <main className="flex flex-col justify-center m-auto">
            <div className="lg:flex lg:justify-center">
              <img src="/logo.svg" alt="Logo" className=" lg:h-logo lg:w-logo lg:mt-6 mx-auto" />
            </div>

            <section className="mt-8 flex flex-col mx-auto gap-2 sm:grid sm:grid-cols-2 sm:justify-center sm:gap-4 sm:mx-auto lg:grid-cols-4">
              <Search></Search>
              <Filter></Filter>
            </section>

            <section className='flex flex-col mx-auto gap-4 mt-8 w-full sm:grid sm:grid-cols-2 sm:justify-center md:grid md:grid-cols-3 md:justify-center lg:grid lg:grid-cols-4 lg:justify-center  '>
              <Cards />
            </section>

          </main>
        </div>
      </main>
    </>
  )
}
