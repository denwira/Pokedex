import React,{Component} from 'react';
import './Header.css';
import Menu from './Menu';
import Image from '../../assets/pokemon-logo.png';

class Header extends Component {
  render(){
    return(
      <div className="Header">
      <div className="Container">
        
        <div className="Header-row">
          <div className="Header-Logo">
            <img src={Image} alt='Pokedex'/>
          </div>
          <div className="Header-Search">
            {/* <Menu/> */}
        </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Header;