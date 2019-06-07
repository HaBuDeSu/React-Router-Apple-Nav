import React, {Component} from 'react';
import './App.css';
import MainNav from './components/MainNav.js';
import SubNav from './components/SubNav.js';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: [],
      selected: ""
    };
  }

  render() {
    return (
      <div>
        <Route
          path='/'
          render={props => <MainNav {...props} navItems={this.state.navItems}/>}
        />
        <Route
          path='/:id'
          render={props => <SubNav {...props} selected={this.state.selected}/>}
        />
      </div>
    )
  }
}

export default App;
