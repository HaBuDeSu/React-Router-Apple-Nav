import React from 'react';
import {Link} from 'react-router-dom';
import MainNavItem from './MainNavItem';
import './nav.css';

const MainNav = props => {
  return(
    <div className="main-nav">
      {props.navItems.map(item => (
        <Link key={item.main} to={`/${item.main}`}>
          <MainNavItem key={item.main} item={item} onClick={() => props.navSelector(item)}/>
        </Link>
      ))}
    </div>
  )
}

export default MainNav;
