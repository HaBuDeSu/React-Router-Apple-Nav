import React from 'react';

const SubNavItem = props => {
  return(
    <div>
    {props.item.img}
    {props.item.new ? "New" : ""}
    </div>
  )
}

export default SubNavItem;
