import React,{Component} from 'react';
import {Header, PokeDex} from './components';
import Homepage from './Pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DetailPoke from './Pages/Homepage/DetailPoke';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="Container">
        <Header/>
        <Switch>
          <Route path='/detail/:name' component={DetailPoke}/>
          <Route path='/' component={Homepage}/>
        </Switch>
        </div>
      </Router>    
    )
  }
}


export default App;
