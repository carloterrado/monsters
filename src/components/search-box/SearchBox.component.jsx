// import { Component } from "react";
import './search-box.css';

const SearchBox = ({ searchMonster }) =>
(
    <input type="search" className='search-box px-4 py-2 max-w-xs w-full h-12 rounded-md' placeholder='search pokemon name' onChange={searchMonster} />
);

export default SearchBox;