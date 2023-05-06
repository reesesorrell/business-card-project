import React, {Component} from 'react';

class Educationinfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    const sections = [['University', 'university'], ['City', 'city'], ['State', 'state'], ['Degree', 'degree'], ['Start Date', 'school-start'], ['End Date', 'school-end']]
    for (let i = 0; i < sections.length; i++) {
      rows.push(<input type='text' placeholder={sections[i][0]} name={sections[i][1]} key = {sections[i][1]} onChange={this.props.onChange}></input>)
    }
    return (
        <div className='input-section'>
            <div className='input-title-text'>Education Information</div>
            {rows}
        </div>
            
    )
  }
}

export default Educationinfo;