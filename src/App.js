import { Component } from 'react';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(monsters => this.setState(state => state.monsters = monsters));
  }

  _displayMonster() {
    const { monsters, searchValue } = this.state;
    return monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

  }
  _searchMonster(e) {
    this.setState((state) => state.searchValue = e.target.value);
  }

  render() {
    return (
      <div className="App">
        <SearchBox searchMonster={this._searchMonster.bind(this)} />
        <CardList monsters={this._displayMonster()} />
      </div>
    );
  }

}

export default App;


