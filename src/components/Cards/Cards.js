
import PropTypes from 'prop-types';

const Cards = ({ result }) => {
    console.log(result);
    let display = 'Cards';

    if (result) {
        display = result.map(x => {
            let { id, name, image, species } = x;
            return (
                <div key={id} className='flex items-center justify-center'>
                    <div className='max-w-sm m-5 border p-5 overflow-hidden shadow-xl'>
                        <img className='w-full' alt={name} src={image}></img>

                        <div className='px-6 py-4'>
                            <h3 className='text-xl font-bold'>{name}</h3>
                            <p className='text-base'>{species}</p>
                        </div>

                    </div>

                </div>

            )
        });
    } else {
        display = 'No characters Found';
    }

    return <>{display}</>

}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards