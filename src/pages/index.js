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
    <main className="bg-gray-50 text-black min-w-full min-h-screen font-roboto">
      <div className='flex flex-col min-h-screen relative pb-14 '>
        <main className="flex flex-col justify-center m-auto">

          <div className="lg:flex lg:justify-center">
            <img src="/logo.svg" alt="Logo" className=" lg:h-logo lg:w-logo lg:mt-6 " />
          </div>

          <section className="mt-8 flex flex-col mx-auto gap-2 lg:grid lg:grid-cols-4 lg:justify-center lg:gap-4 lg:mx-0">
            <Search></Search>
            <Filter></Filter>
          </section>

          <section className='flex flex-col mx-auto gap-4 mt-8 w-full lg:grid lg:grid-cols-4 lg:justify-center  '>
            <Cards />
          </section>

        </main>
      </div>
    </main>
    </>
  )
}
