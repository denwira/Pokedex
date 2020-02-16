import React,{Component} from 'react';
import './PokeDex.css';
import PokeCard from '../PokeCard'
import PokemonData from '../../assets/Pokemon.json'

class PokeDex extends Component{
  static defaultProps = {
    pokemon : PokemonData
  }
  render(){
    const {pokemon} = this.props
    return(
      <div className="PokeDex">
        <h2>Pokedex</h2>
        <div className="PokeDex-Cards"> 
        {this.props.pokemon.map((p) => (
        <PokeCard id={p.id} name={p.name} type={p.type}/>
        ))}
        </div>
        </div>
    )
  }
}

export default PokeDex; 