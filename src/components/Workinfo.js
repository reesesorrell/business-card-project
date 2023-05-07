import React, {Component} from 'react';

class Workinfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    const sections = [['Position', 'position'], ['Company', 'company'], ['Start Date', 'work-start'], ['End Date', 'work-end']]
    for (let i = 0; i < sections.length; i++) {
      rows.push(<input type='text' placeholder={sections[i][0]} name={sections[i][1]} onChange={this.props.onChange} key = {sections[i][1]}></input>)
    }
    return (
        <div className='input-section'>
            <div className='input-title-text'>Current Work Information</div>
            {rows}
        </div>
    )
  }
}

export default Workinfo;