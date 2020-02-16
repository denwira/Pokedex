import React,{Component} from 'react';
import '../../components/PokeDex/PokeDex.css';
import PokeCard from '../../components/PokeCard'
import PokemonData from '../../assets/Pokemon.json';
// import Search from './Search';
import './index.css';

class Homepage extends Component{
  static defaultProps = {
    pokemon : PokemonData
  }

  state = {
    filterSearch: ''
  }

  handleOnChange = (e) => {
    this.setState({
      filterSearch: e.target.value
    }, () => console.log(this.state.filterSearch))
  }

  render(){
    const {filterSearch} = this.state
    const {pokemon} = this.props
    const dataFilter = PokemonData.filter(
      dataItem => dataItem.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
      )
    console.log(dataFilter)

    
    return(
      <div className="PokeDex row">
        <div className="search-container">
          <input onChange={this.handleOnChange} type="text" placeholder="Search.." name="search"/>
        </div>
         {/* <div className="row">
           <div className="Card">
             <div className="Card-Item">
               <div className="Card-Thumbnail">
                 <img src="https://img.pokemondb.net/artwork/large/zeraora.jpg"/>
               </div>
               <div className="Card-Body">
                 <h2>Pikachu</h2>
                 <span>Electric</span>

               </div>
             </div>
           </div>
         </div> */}

       <div className="PokeDex-Cards"> 
        {dataFilter.map((data, i) => {
          return (
              <PokeCard data={data} {...this.props} url={`/detail/${data.name}`} id={data.id} name={data.name} type={data.type} key={i}/>
          )
        })}
        </div>
    </div>
    )
  }
}

export default Homepage; 