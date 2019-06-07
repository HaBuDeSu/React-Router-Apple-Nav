import React, {Component} from 'react';
import './App.css';
import MainNav from './components/MainNav.js';
import SubNav from './components/SubNav.js';
import {Route} from 'react-router-dom';
import navItems from './navData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: navItems,
      selected: ""
    };
  }

  navSelector = e => {
    this.setState({
      selected: e.target
    })
  }

  render() {
    return (
      <div>
        <Route
          path='/'
          render={props => <MainNav {...props} navItems={this.state.navItems} navSelector={this.navSelector}/>}
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
