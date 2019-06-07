import React from 'react';
import {Link} from 'react-router-dom';
import SubNavItem from './SubNavItem';

const SubNav = props => {
  return(
    <div className="sub-nav">
      {props.selected.subItems.map(item => (
        <Link key={item.id} to="/">
          <SubNavItem key={item.id} item={item}/>
        </Link>
      ))}
    </div>
  )
}

export default SubNav;
