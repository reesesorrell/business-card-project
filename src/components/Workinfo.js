import React, {Component} from 'react';

class Workinfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className='input-section'>
            <div className='input-title-text'>Work Information</div>
            <input type='text' placeholder='Position'></input>
            <input type='text' placeholder='Company'></input>
            <input type='text' placeholder='Start Date'></input>
            <input type='text' placeholder='End Date'></input>
        </div>
    )
  }
}

export default Workinfo;