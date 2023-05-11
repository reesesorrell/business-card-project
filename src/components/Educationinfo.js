import React from 'react';

const Educationinfo = ({onChange}) => {
  let rows = [];
  const sections = [['University', 'university'], ['City', 'city'], ['State', 'state'], ['Degree', 'degree'], ['Start Date', 'school-start'], ['End Date', 'school-end']]
  for (let i = 0; i < sections.length; i++) {
    rows.push(<input type='text' placeholder={sections[i][0]} name={sections[i][1]} key = {sections[i][1]} onChange={onChange}></input>)
  }
  return (
      <div className='input-section'>
          <div className='input-title-text'>Education Information</div>
          {rows}
      </div>
          
  )
}

export default Educationinfo;