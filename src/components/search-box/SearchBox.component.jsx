// import { Component } from "react";
import './search-box.css';

const SearchBox = ({ searchMonster, placeholder, type }) =>
(
    <input type={type} className='search-box px-4 py-2 max-w-xs w-full h-12 rounded-md' placeholder={placeholder} onChange={searchMonster} />
);

export default SearchBox;