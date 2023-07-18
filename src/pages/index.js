
import Cards from "../components/Cards/Cards.js";
import Filter from "../components/Filter/Filter.js";
import Search from "../components/Search/Search.js";
import { useState, useEffect } from "react";

export default function Home() {

  let [pageNumber, setPageNumer] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let [Serch, setSerch] = useState('');
  let [Status, setStatus] = useState('')
  let [Species, setSpicies] = useState('robot')//'alien' 'human' 'humanoid' 'robot'
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${Serch}&status=${Status}&species=${Species}`;

  const loadMore = () => {
    setPageNumer(x => x + 1);
  }

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      //console.log(data.results);
      console.log(fetchData);
      updateFetchData(data);
    })();
  }, [api]);

  let { info, results } = fetchData;
  console.log(fetchData);


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
            <Search setSerch={setSerch}></Search>
            <Filter> </Filter>
          </section>


          <section className='mt-8 grid grid-cols-4 justify-center gap-4 '>
            <Cards result={results} />
          </section>

          <button onClick={loadMore}>Load More</button>
        </main>
        <footer>

        </footer>
      </div>
    </main>
  )
}
