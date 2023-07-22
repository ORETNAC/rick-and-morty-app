import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useRef } from 'react';

const Search = ({ setSearch, pageNumber }) => {

    const barRef = useRef(null);

    const reset = () => {
        setSearch('');
    }

    const pageReset = () => {
        console.log('act')
        setPageNumer(1);
    }

    return (
        <>
            <form className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setSearch('');
                        barRef.current.value = '';
                    }}
                    className="p-2"> <AiOutlineSearch className="text-gray-500"></AiOutlineSearch> </button>
                <input
                    ref={barRef}
                    onChange={e => {
                        pageNumber(1);
                        setSearch(e.target.value);

                    }}
                    className="outline-none"
                    type="text"
                    placeholder='Filter By Name' />
            

            </form>
        </>
    )
}

Search.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};


export default Search