import React,{Component} from 'react';
import './PokeCard.css'
// import {Link} from 'react-router-dom';

const POKE_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'


class PokeCard extends Component {

  addClassWrapper = (type) => {
    if(type === 'Fire') return 'Fire';
    if(type === 'Water') return 'Water';
    if(type === 'Grass') return 'Grass';
    if(type === 'Bug') return 'Bug';
    if(type === 'Fairy') return 'Fairy';
    if(type === 'Poison') return 'Poison';
    if(type === 'Flying') return 'Flying';
    if(type === 'Electric') return 'Electric';

    return 'Normal';
  }

  navigateToDetail = (data) => {
    // console.log(this.props)
    this.props.history.push(`/detail/${this.props.id}`, {
      data
    })
  }
  render(){
    let imgSrc = `${POKE_IMG}${this.props.id}.png`
    return(
           
      // <div className="PokeDex row">
      // <div className="row">
        <div onClick={() => this.navigateToDetail(this.props.data)} className="Card">
          <div className={`Card-Item ${this.addClassWrapper(this.props.type)}`}>
            <div className="Card-Thumbnail">
              <img src={imgSrc} alt='test'/>
            </div>
            <div className="Card-Body">
              <h2>{this.props.name}</h2>
              <span>{this.props.type}</span>
            </div>
          </div>
        </div>
      // </div>
      // </div>

      // <div className="poke-row">
      //   <div onClick={() => this.navigateToDetail(this.props.data)} className='PokeCard'>
      //     <div className={`PokeCard-Item ${this.addClassWrapper(this.props.type)}`}>
      //       <h3 className="PokeCard-Title">{this.props.name}</h3>
      //       <img src={imgSrc} alt={this.props.title} align="right"/>
      //       <p className="PokeCard-Desc">{this.props.type}</p>
      //     </div>
      //   </div>
      //   </div>
      )
  }
}

export default PokeCard;