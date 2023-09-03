
import './card-container.css';
import Type from '../type/Type.component';

const CardContainer = ({ monster }) => {
    const { name, id, sprites, types, base_experience } = monster;
    const { front_default } = sprites.other['official-artwork']


    return (
        <div className="card-container text-start ">
            <h1 className="font-semibold text-2xl  text-center "> {name}</h1>
            <img src={front_default} alt={`Pokemon ${name}`} className=' h-60 sm:h-44' />
            <p><em className='font-semibold text-sm flex justify-between'>
                <span>{`#${(id + '').padStart(4, '0')}`}</span> /
                
                <span className='flex gap-1'>{
                    types.map((pokemon, i) => {
                        return <Type key={i} type={pokemon.type.name} padding={i === types.length - 1 ? '' : '•'} />
                    })
                }
                </span> /
                <span>{`${base_experience ?? 0} exp`}</span>


            </em> </p>
        </div>
    );
}

export default CardContainer;