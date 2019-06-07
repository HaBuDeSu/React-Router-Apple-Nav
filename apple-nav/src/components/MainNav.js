import React from 'react';
import {Link} from 'react-router-dom';
import MainNavItem from './MainNavItem';
import './nav.css';

const MainNav = props => {
  return(
    <div className="main-nav">
      {props.navItems.map(item => (
        <Link to="/">
          <MainNavItem item={item}/>
        </Link>
      ))}
    </div>
  )
}

export default MainNav;
