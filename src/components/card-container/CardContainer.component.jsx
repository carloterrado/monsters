// import { Component } from "react";
import './card-container.css';

const CardContainer = ({ monster: { name, id ,sprites: {front_default}, types, base_experience} }) => {
    const pokemonTypes = types.map((type, i) => <em key={i} className='font-semibold'>{`${type.type.name} `}</em>)
   
    return (
        <div className="card-container text-start">
            <img src={front_default} alt={`Pokemon ${name}`} />
            <h1 className="font-semibold text-2xl"> {name}</h1>
            <div className=' flex flex-col '>
                <div className='flex justify-between'>

                <span >ID: <em className='font-semibold'>{id}</em> </span>
                <span>base exp: <em className='font-semibold'>{base_experience}</em></span>
                </div>
                <span>type: {pokemonTypes}</span>
                <span></span>
            </div>
        </div>
    );
}



export default CardContainer;