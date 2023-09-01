
import './card-container.css';

const CardContainer = ({ monster }) => {
    const { name, id, sprites: { front_default }, types, base_experience } = monster;
    const pokemonId = id + '';
    const attributes = {
        water: '💧', fire: '🔥', grass: '🌿', poison: '💀', flying: '🦅', bug: '🐞', normal: '🐽', electric: '⚡', ground: '🌋', fairy: '🧚‍♀️', fighting: '🥊', psychic: '🔮', rock: '💎', steel: '🦾', ice: '🧊', ghost: '👻', dragon: '🐲', dark: '🌑',
    }
    const pokemonTypes = types.map((type, i) => {
        return `${attributes[type.type.name]} ${i === types.length - 1 ? '' : '• '}`;
    }).reduce((current, attr) => current + attr, '');



    return (
        <div className="card-container text-start ">
            <h1 className="font-semibold text-2xl sm:text-4xl text-center "> {name}</h1>
            <img src={front_default} alt={`Pokemon ${name}`} />
            <p><em className='font-semibold text-sm flex justify-between'>
                <span>{`#${pokemonId.padStart(4, '0')}`}</span> /
                <span>{pokemonTypes}</span> /
                <span>{`${base_experience} exp`}</span>
            </em> </p>
        </div>
    );
}

export default CardContainer;