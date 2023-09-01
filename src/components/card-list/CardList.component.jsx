
// import { Component } from "react";
import CardContainer from "../card-container/CardContainer.component";
import './card-list.css';

const CardList = ({ monsters }) =>
(
    <div className="card-list grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monsters.map((monster) => <CardContainer key={monster.id} monster={monster} />)}
    </div>
);



export default CardList;