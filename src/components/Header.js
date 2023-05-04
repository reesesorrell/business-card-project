import React, {Component} from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Header'>
        <div className='header-text'>
            CV Creator
        </div>
      </div>
    )
  }
}

export default Header;