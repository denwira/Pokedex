import React,{Component} from 'react';
import './Search.css';

class Search extends Component {
  render(){    
    let filtered
    return(
      <div className="search-container">
        <input type="text" placeholder="Search.." name="search"/>
      </div>
    )
  }
}

export default Search;
