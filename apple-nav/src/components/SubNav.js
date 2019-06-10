import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SubNavItem from './SubNavItem';

class SubNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.selected)
  }

  render() {
    return(
      <div className="sub-nav">
        {this.props.selected.subItems.map(item => (
          <Link key={item.id} to="/">
            <SubNavItem key={item.id} item={item}/>
          </Link>
        ))}
      </div>
    )
  }
}

export default SubNav;
