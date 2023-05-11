import React from 'react';

const Personalinfo = ({onChange}) => {
  let rows = [];
  const sections = [['First Name', 'first-name'], ['Last Name', 'last-name'], ['Title', 'title'], ['Address', 'address'], ['Phone Number', 'phone-number'], ['Email', 'email']]
  for (let i = 0; i < sections.length; i++) {
    rows.push(<input type='text' placeholder={sections[i][0]} name={sections[i][1]} onChange={onChange} key = {sections[i][1]}></input>)
  }
  return (
    <div className='input-section'>
        <div className='input-title-text'>Personal Information</div>
        {rows}
    </div>
  )
}

export default Personalinfo;