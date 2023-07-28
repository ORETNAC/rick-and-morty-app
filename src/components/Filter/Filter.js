import { setSpecies, setGender, setStatus, clearList, getChars } from "@/store/character";

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";



const Filters = () => {
    const { species, gender, status } = useSelector(state => state.characters)
    const dispatch = useDispatch();

    const speciesChangeValue = (event) => {
        console.log(event.target.value)
        dispatch(clearList());
        dispatch(setSpecies({ species: event.target.value }));
        dispatch(getChars());
    }

    const genderChangeValue = (event) => {
        console.log(event.target.value)
        dispatch(setGender({ gender: event.target.value }));
        dispatch(clearList());
        dispatch(getChars());
    }

    const statusChangeValue = (event) => {
        console.log(event.target.value)
        dispatch(setStatus({ status: event.target.value }));
        dispatch(clearList());
        dispatch(getChars());
    }

    return (
        <>

            <select onChange={speciesChangeValue} placeholder='Species' id="species" className='className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center"'
                value={species}>
                <option value="">Species:</option>
                <option value="alien">Alien</option>
                <option value="animal">Animal</option>
                <option value="Cronenberg">Cronenberg</option>
                <option value="Disease">Disease</option>
                <option value="human">Human</option>
                <option value="humanoid">Humanoid</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="Poopybutthole">Poopybutthole</option>
                <option value="robot">Robot</option>
                <option value="unknown">Unknown</option>
            </select>

            <select onChange={genderChangeValue} placeholder='Gender' id="gender" className='className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center"'
                value={gender}>
                <option value="">Gender:</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="male">Male</option>
                <option value="unknown">Unknown</option>
            </select>

            <select onChange={statusChangeValue} placeholder='Status' id="status" className='className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center"'
                value={status}>
                <option value="">Status:</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>




        </>
    )
}

Filters.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};


export default Filters