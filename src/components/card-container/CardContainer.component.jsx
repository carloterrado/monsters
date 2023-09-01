// import { Component } from "react";
import './card-container.css';

const CardContainer = ({ monster: { name, id ,sprites: {back_default}, types} }) => {
    const pokemonTypes = types.map(type => <em className='font-semibold'>{`${type.type.name} `}</em>)
   
    return (
        <div className="card-container text-start">
            <img src={back_default} alt={`Pokemon ${name}`} />
            <h1 className="font-semibold text-2xl"> {name}</h1>
            <div className=' flex flex-col '>
                <span >ID: <em className='font-semibold'>{id}</em> </span>
                <span>type: {pokemonTypes}</span>
                <span></span>
            </div>
        </div>
    );
}



export default CardContainer;