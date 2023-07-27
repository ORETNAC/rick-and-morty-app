import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getChars, clearChars } from '@/store/character';

import { clearList, setSearch } from "@/store/character";


const Search = () => {
    const barRef = useRef('hey');

    const { page, charList = [], isLoading, search } = useSelector(state => state.characters)
    const dispatch = useDispatch();


    const clicked = (barRef) => {
        // console.log('1', page)
        console.log('soy un onclick', barRef.current.value)
        //dispatch(clearList())
        // console.log('2', page)
        //console.log(a.target.value)
        //dispatch(setSearch({ search: barRef.current.value }))
        //console.log('soy un Onclick',barRef.current.value);

        // dispatch(clearChars())
        // dispatch(getChars(page, charList, search))
    }


    const inputChange = (a) => {
        //console.log('valor de a:', a.target.value)
        dispatch(clearList())
        dispatch(setSearch({ search: a.target.value }));
        console.log('inputChange',search)
        dispatch(getChars())
        //dispatch(getChars(page, charList, search))

        //dispatch(getChars(page, charList, a.target.value))

        //dispatch(clearChars());
        //dispatch(clearChars());

        //dispatch(getChars(page, charList, a.target.value))
        //clicked();////////////////////////////////////////////////////
        //console.log(a.target.value)
        // dispatch(getChars(page, charList))
    }

    // const keyUp = (a) => {
    //     const key = a.key.toLowerCase();
    //     const isLetter = /^[a-z]$/i.test(key);
    //     if (search !== '' && isLetter && !a.ctrlKey) {
    //         //dispatch(getChars(page, charList, search))
    //         // dispatch(getChars({pageNumber:page, charList:charList,search}))
    //     } else {
    //         dispatch(clearList())
    //         console.log('not a lett')
    //     }
    //     // console.log('1', page)
    //     //console.log('soy un keyUp', a)
    //     ////////////////////////////////////
    //     //dispatch(clearList())
    //     // console.log('2', page)
    //     //console.log(a.target.value)
    //     //dispatch(setSearch({ search: barRef.current.value }))
    //     //console.log('soy un keyDown',a.current.value);
    //     //dispatch(setSearch({ search: a.target.value }));
    //     // dispatch(clearChars())
    //     /////////////////////////////////////


    // }


    return (
        <>
            <form className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14">
                <button
                    className='col-span-4'
                    disabled={isLoading}
                    onClick={(a) => {
                        a.preventDefault();
                        clicked(barRef);
                    }
                    }
                >
                    <AiOutlineSearch className="text-black contrast-50 h-6 w-6"></AiOutlineSearch>
                </button>

                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        inputChange();
                        // barRef.current.value = '';
                    }}
                    className="p-2"> <AiOutlineSearch className="text-gray-500"></AiOutlineSearch>
                </button> */}

                <input
                    ref={barRef}
                    onChange={inputChange}
                    // onKeyUp={(a) => {
                    //     //a.preventDefault();
                    //     // clicked({/*barRef*/ });

                    //     // keyUp(barRef);
                    //     // keyUp(a)
                    // }
                    // }
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