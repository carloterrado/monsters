import { Component } from "react";

class SearchBox extends Component {
    render() {   

        const {searchMonster} = this.props;
       
        return (<input type="search" className='search-box' placeholder='Search Monster' onChange={searchMonster} />);
    }
}

export default SearchBox;