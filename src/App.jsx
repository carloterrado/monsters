
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';
import './App.css';

import { useState, useEffect } from "react";


const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  const searchMonster = event => setSearchValue(event.target.value);

  useEffect(() => {

    const getJSON =  function (url, errorMsg = 'Something went wrong') {
      return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
      });
    };

    getJSON('https://pokeapi.co/api/v2/pokemon?limit=30').then(jSONResults => jSONResults.results).then(pokemons => pokemons.map(pokemon => getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`))).then(arrPokemon => Promise.all(arrPokemon)).then(monsters => {
console.log(monsters)
      setMonsters(monsters)
    }
   );

  }, []);

  // console.log('render monster')
  // const displayMonster = (monsters, searchValue) => monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchValue]);

  return (
    <div className="p-2 sm:p-8 pt-4 ">
      <div className='flex flex-col md:flex-row gap-6 justify-between items-center mb-8 w-[85vw] mx-auto'>
        <h1 className='text-4xl text-white tracking-widest font-bigelow font-extrabold'>Pokemon Monsters</h1>
        <SearchBox searchMonster={searchMonster} />
      </div>

      <CardList monsters={filteredMonster} />
      {/* <CardList monsters={displayMonster(monsters, searchValue)} /> */}
    </div>
  );
}




export default App;


