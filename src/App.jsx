
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';
import { useState, useEffect } from "react";

// Return JSON data from API call
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Return a new array of pokemon
const filterMonster = (monsters, searchValue, key) => monsters.filter(monster => monster[key].toString().toLowerCase().includes(searchValue.toLowerCase()));

// Add Pokemon by 50 when button is click
const addPokemon = async (totalMonster, monsters, setMonsters) => {
  try {
    const data = await totalMonster.slice(monsters.length, monsters.length + 50).map(pokemon => getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`))
    const addedPokemon = await Promise.all(data);
    return setMonsters([...monsters, ...addedPokemon])

  } catch (e) {
    alert('Unable to add pokemon! Try again...')
  }


}



const App = () => {


  const [searchValue, setSearchValue] = useState('');
  const [searchIDValue, setIDSearchValue] = useState(searchValue);
  const [totalMonster, setTotalMonster] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  
  const searchMonster = event => setSearchValue(event.target.value);
  const searchMonsterID = event => setIDSearchValue(event.target.value);

  const onClickHandler = () => addPokemon(totalMonster, monsters, setMonsters);

  useEffect(() => {
    getJSON('https://pokeapi.co/api/v2/pokemon?limit=10').then(jSONResults => {
      setTotalMonster(Array.from({ length: jSONResults.count }, (_, i) => i + 1));
      return jSONResults.results;
    }).then(pokemons => pokemons.map(pokemon => getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`))).then(arrPokemon => Promise.all(arrPokemon)).then(monsters => setMonsters(monsters)).catch((e) => window.location.reload());
  }, []);

  useEffect(() => {
    const newFilteredMonsters = filterMonster(monsters, searchIDValue, 'id');
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchIDValue]);

  useEffect(() => {
    const newFilteredMonsters = filterMonster(monsters, searchValue, 'name');
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchValue]);

 

  return (
    <div className="p-4  w-full min-h-[100vh] sm:p-8  body ">

      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-[85vw] mx-auto '>
        <div className='text-4xl flex  gap-2 text-white tracking-widest font-bigelow font-extrabold '>
          <h1>Pokemon Monsters</h1> 
          <span className=' text-xl tracking-normal grid'>
            <em className='not-italic tracking-widest'>Total</em>
            <em className='not-italic'>{`${monsters.length}`}</em>
          </span>
        </div>
        <SearchBox searchMonster={searchMonsterID} placeholder={'search pokemon id'} type={'number'} />
        <SearchBox searchMonster={searchMonster} placeholder={'search pokemon name'} type={'search'} />
        <button type="button" className='text-white bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 max-w-xs w-full h-12 rounded-md font-bigelow text-2xl font-extrabold tracking-widest hover:scale-110 transition-all duration-300 ease-out ' onClick={onClickHandler}>Add 50 pokemon</button>
      </div>

      <CardList monsters={filteredMonster} />
    </div>
  );
}




export default App;


