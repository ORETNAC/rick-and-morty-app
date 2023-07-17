
import Cards from "../components/Cards/Cards.js";
import Filter from "../components/Filter/Filter.js";
import { useState, useEffect } from "react";

export default function Home() {

  let [pageNumber, setPageNumer] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;



  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      //console.log(data.results);
      updateFetchData(data);
    })();
  }, [api]);

  let { info, results } = fetchData;
  console.log(results);


  return (
    <main className="bg-gray-50 text-black min-h-screen">
      <div className='flex flex-col min-h-screen relative pb-14'>
        <header className='flex flex-col bg-white-600  items-center justify-start sm:flex-row sm:justify-start sm:relative sm:h-header sm:border-b sm:border-gray-950 sm:border-opacity-25'>
          <nav className=''>
            <img
              src="/rick-morty-navbar.svg"
              alt="rick and morty navbar icon"
              className="h-11 w-12 sm:ml-52"
            />
          </nav>
        </header>
        <main className="flex flex-col justify-center">


          <div className="sm:flex sm:justify-center">
            <img src="/logo.svg" alt="Logo" className=" sm:h-logo sm:w-logo sm:mt-6 " />
          </div>

          <section>
            
          </section>


          <section className='grid grid-cols-4 gap-5 '>
            <Cards result={results} />
          </section>

        </main>
        <footer>

        </footer>
      </div>
    </main>
  )
}
