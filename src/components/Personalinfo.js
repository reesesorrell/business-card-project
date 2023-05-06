import React, {Component} from 'react';

class Personalinfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='input-section'>
          <div className='input-title-text'>Personal Information</div>
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Last Name'></input>
          <input type='text' placeholder='Title'></input>
          <input type='text' placeholder='Address'></input>
          <input type='text' placeholder='Phone Number'></input>
          <input type='text' placeholder='Email'></input>
      </div>
    )
  }
}

export default Personalinfo;