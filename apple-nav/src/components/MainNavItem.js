import React from 'react';

const MainNavItem = props => {
  return(
    <div>
      {props.item.content}
      {props.item.new ? "New" : ""}
    </div>
  )
}

export default MainNavItem;
