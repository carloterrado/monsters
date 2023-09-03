import icon from '../../assets/icon';

const Type = ({ type, padding }) => {

    return (
        <>
            <img className='w-4' src={icon[type]} alt={type} />
            {padding}
        </>
    );
}

export default Type;