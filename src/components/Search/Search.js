import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from 'prop-types';
const Search = () => {
    return (
        <>
            <form className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14">
                <button className="p-2"> <AiOutlineSearch className="text-gray-500"></AiOutlineSearch> </button>
                <input className="outline-none" type="text" placeholder='Filter By Name' />
            </form>
        </>
    )
}

Search.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};


export default Search