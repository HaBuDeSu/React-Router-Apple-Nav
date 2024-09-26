import React from 'react';

const SubNavItem = props => {
  return(
    <div className="sub-nav-item">
      <div>{props.item.img}</div>
      <div>{props.item.id}</div>
      <div className="new-tag">{props.item.new ? "New" : ""}</div>
    </div>
  )
}

export default SubNavItem;
