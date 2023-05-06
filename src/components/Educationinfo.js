import React, {Component} from 'react';

class Educationinfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className='input-section'>
            <div className='input-title-text'>Education Information</div>
            <input type='text' placeholder='University'></input>
            <input type='text' placeholder='City'></input>
            <input type='text' placeholder='State'></input>
            <input type='text' placeholder='Degree'></input>
            <input type='text' placeholder='Start Date'></input>
            <input type='text' placeholder='End Date'></input>
        </div>
            
    )
  }
}

export default Educationinfo;