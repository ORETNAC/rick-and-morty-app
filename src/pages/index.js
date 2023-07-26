import { getChars } from "@/store/character";
import Cards from "../components/Cards/Cards.js";
import Filter from "../components/Filter/Filter.js";
import Search from "../components/Search/Search.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


let info;
let results = [];
let tempFix = 0;

export default function Home() {
  {/** 
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let [allCards, setAllCards] = useState([]);

  let [search, setSearch] = useState('');
  let [status, setStatus] = useState('')
  let [species, setSpicies] = useState('')//'alien' 'human' 'humanoid' 'robot' 'animal''Cronenberg' 'unknown' 'Mythological Creature' 'Poopybutthole' 'Disease'
  let [gender, setGender] = useState('');//'genderless' 'male' 'female' 'unknown'
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
*/}






  ////////////////////////////////////////////////////////////////

  {/*
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchData(data);
      results = data.results;

      if (tempFix < 1) {
        tempFix++;
        //console.log('----------------TempFix----------------:', tempFix);
      } else {
        setAllCards(prevCards => [...prevCards, ...results]);
      }

    })();
  }, [api]);
*/}
  ///////////////////////////////////////////////////////////////

  const { page, charList = [], search, finalPage, species } = useSelector(state => state.characters)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChars());
  }, [])



  // info = fetchData.info;

  // console.log('AllCards', allCards)
  // console.log('results', results)
  // console.log('info', info)




  return (
    <main className="bg-gray-50 text-black min-h-screen">
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
        <main className="flex flex-col justify-center m-auto">


          <div className="sm:flex sm:justify-center">
            <img src="/logo.svg" alt="Logo" className=" sm:h-logo sm:w-logo sm:mt-6 " />
          </div>

          <section className="mt-8 grid grid-cols-4 justify-center gap-4">
            <Search></Search>
            <Filter></Filter>
          </section>



          <section className='mt-8 grid grid-cols-4 justify-center gap-4 '>

            {/* {!isLoading ? <div className=''><img src="/loading.svg" alt="" /></div> : <Cards />} */}


            <Cards />



          </section>


        </main>
        <footer>

        </footer>
      </div>
    </main>
  )
}
