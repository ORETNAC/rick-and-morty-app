import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getChars, clearChars } from '@/store/character';

import { clearList, setSearch } from "@/store/character";


const Search = () => {

    const { page, charList = [], isLoading, search } = useSelector(state => state.characters)
    const dispatch = useDispatch();

    const inputChange = (a) => {
        //console.log('valor de a:', a.target.value)
        dispatch(clearList())
        dispatch(setSearch({ search: a.target.value }));
        dispatch(getChars())
    }

    return (
        <>
            <form className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14">
                <button
                    className='col-span-4'
                    disabled={isLoading}
                    onClick={(a) => {
                        a.preventDefault();
                    }
                    }
                >
                    <AiOutlineSearch className="text-black contrast-50 h-6 w-6"></AiOutlineSearch>
                </button>
                <input
                    onChange={inputChange}
                    value={search}
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