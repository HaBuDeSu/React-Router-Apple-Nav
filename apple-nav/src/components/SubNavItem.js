import React from 'react';

const SubNavItem = props => {
  return(
    <div className="sub-nav-item">
      {props.item.img}
      {props.item.new ? "New" : ""}
      {props.item.id}
    </div>
  )
}

export default SubNavItem;
