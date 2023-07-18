import PropTypes from 'prop-types';
const Filters = () => {
    return (
        <>

            <div className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center">Species</div>
            <div className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center">Gender</div>
            <div className="flex justify-center w-max-w-card border border-gray-500 rounded-md h-14 items-center">Status</div>




        </>
    )
}

Filters.propTypes = {
    //result: PropTypes.object.isRequired
    result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // Modifica el PropTypes para permitir undefined
};


export default Filters