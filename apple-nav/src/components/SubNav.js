import React from 'react';
import {Link} from 'react-router-dom';
import SubNavItem from './SubNavItem';

const SubNav = props => {
  return(
    <div>
      {props.selected.subItems.map(item => (
        <Link to="/">
          <SubNavItem key={item.id} item={item}/>
        </Link>
      ))}
    </div>
  )
}

export default SubNav;
