import React from 'react';

const MainNavItem = props => {
  return(
    <div onClick={props.onClick}>
      {props.item.content}
      {props.item.new ? "New" : ""}
    </div>
  )
}

export default MainNavItem;
