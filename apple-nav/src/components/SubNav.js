import React from 'react';

const SubNav = props => {
  componentDidMount() {
    const id = this.props.match.params.id;
  }

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
