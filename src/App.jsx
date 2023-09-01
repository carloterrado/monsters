
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';


import { useState, useEffect } from "react";


const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const filterMonster = (monsters, searchValue, key) => monsters.filter(monster => monster[key].toString().toLowerCase().includes(searchValue.toLowerCase()));

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [searchIDValue, setIDSearchValue] = useState(searchValue);
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  const searchMonster = event => setSearchValue(event.target.value);
  const searchMonsterID = event => setIDSearchValue(event.target.value);

  useEffect(() => {
    getJSON('https://pokeapi.co/api/v2/pokemon?limit=200').then(jSONResults => jSONResults.results).then(pokemons => pokemons.map(pokemon => getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`))).then(arrPokemon => Promise.all(arrPokemon)).then(monsters => setMonsters(monsters));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = filterMonster(monsters, searchValue, 'name');
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchValue]);

  useEffect(() => {
    const newFilteredMonsters = filterMonster(monsters, searchIDValue, 'id');
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchIDValue]);


  return (
    <div className="p-4  w-full min-h-[100vh] sm:p-8  body ">

      <div className='flex flex-col md:flex-row gap-6 justify-between items-center mb-8 w-[85vw] mx-auto '>
        <h1 className='text-4xl text-white tracking-widest font-bigelow font-extrabold '>Pokemon Monsters</h1>
        <SearchBox searchMonster={searchMonsterID} placeholder={'search pokemon id'} type={'number'} />
        <SearchBox searchMonster={searchMonster} placeholder={'search pokemon name'} type={'search'} />
      </div>

      <CardList monsters={filteredMonster} />
    </div>
  );
}




export default App;


