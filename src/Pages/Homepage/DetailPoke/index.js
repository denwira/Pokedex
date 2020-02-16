import React,{Component} from 'react'
import './DetailPoke.css'

class DetailPoke extends Component{
  render(){
    return(
      <div className='row'>
      <div className="col1">
      <div className="itemLo nambahinDoooong">
      <div className="DetailPoke-Wrap">
        <div className="DetailPoke-image">
          <img src={this.props.location.state.data.image} alt='Pokemon'/>
        </div>
      </div>
      </div>
      </div>
      <div className='col1'>
        <div className="itemLo">
        <div className="DetailPoke-Title">
          <h2>{this.props.location.state.data.name}</h2>
          <span>{this.props.location.state.data.type}</span>
        </div>
        {/* <div className="DetailPoke-Type">
          <h3>Type: </h3>
        </div> */}
        <div className="DetailPoke-Desc">
          <p>{this.props.location.state.data.desc}</p>
        </div>      
      </div>
      </div>
      </div>

    )
  }
}

export default DetailPoke;