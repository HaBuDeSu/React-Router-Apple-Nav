import React, {Component} from 'react';
import './App.css';
import MainNav from './components/MainNav.js';
import SubNav from './components/SubNav.js';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <MainNav />
        <Route
          path='/:id'
          render={props => <SubNav {...props}/>}
        />
      </div>
    )
  }
}

export default App;
