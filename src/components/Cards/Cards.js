
import PropTypes from 'prop-types';

const Cards = ({ result }) => {
    //console.log(result);
    let display = 'Cards';

    if (result) {
        display = result.map(x => {
            let { id, name, image, species } = x;
            return (
                <div key={id} className='flex items-center justify-center w-max-w-card m-auto relative '>
                    <div className='border overflow-hidden shadow-xl'>
                        <img className='mx-auto' alt={name} src={image}></img>
                        <div className='px-6 py-4'>
                            <h3 className='text-xl font-bold overflow-hidden whitespace-nowrap '>{name}</h3>
                            {/* <h3 className="absolute font-medium text-black text-opacity-87 text-[100%] tracking-[0.15px]">
                            {name}
                            </h3> */}

                            <p className='text-base'>{species}</p>
                        </div>
                    </div>
                </div>
            )
        });
    } else {
        display = <div className='col-span-4'><img src="/loading.svg" alt="" /></div>

    }

    return <>{display}</>

}

Cards.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};

export default Cards