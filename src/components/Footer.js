import React, {Component} from 'react';
import '../styles/footer.css';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Footer'>
        <div className='footer-text'>
            Copyright © 2023 reesesorrell
        </div>
      </div>
    )
  }
}

export default Footer;