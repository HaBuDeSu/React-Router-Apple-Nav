import React from 'react';
import {Link} from 'react-router-dom';
import SubNavItem from './SubNavItem';

const SubNav = props => {
  return(
    <div className="sub-nav">
      {props.navItems.find(item => item.main === props.match.params.id).subItems.map(item => (
        <Link key={item.id} to="/">
          <SubNavItem key={item.id} item={item}/>
        </Link>
      ))}
    </div>
  )
}

export default SubNav;
