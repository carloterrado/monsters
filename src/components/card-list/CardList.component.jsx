
import CardContainer from "../card-container/CardContainer.component";

import './card-list.css';

const CardList = ({ monsters}) =>
(
    <div className={`m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6`}> 
        {monsters.map((monster) => <CardContainer key={monster.id} monster={monster} />)}
    </div>
);

export default CardList;