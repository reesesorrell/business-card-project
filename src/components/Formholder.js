import React, {useState, useEffect} from 'react';
import '../styles/formholder.css';
import '../styles/header.css';
import Personalinfo from './Personalinfo';
import Educationinfo from './Educationinfo';
import Workinfo from './Workinfo';
import GeneratedCV from './GeneratedCV';
import Footer from './Footer';

const Formholder = () => {
    const [info, setInfo] = useState({
      'first-name': '',
      'last-name': '',
      'title': '',
      'address': '',
      'phone-number': '',
      'email': '',
      'university': '',
      'city': '',
      'state': '',
      'degree': '',
      'school-start': '',
      'school-end': '',
      'position': '',
      'company': '',
      'work-start': '',
      'work-end': '',
    })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({...info, [name]: value});
  }


  return (
    <div>
      <form className='Formholder'>
          <div className='input-section'>
              <Personalinfo onChange={handleChange}/>
              <Educationinfo onChange={handleChange}/>
              <Workinfo onChange={handleChange}/>
          </div>
      </form>
      <GeneratedCV info={info}/>
      <Footer />
    </div>
  )
}

export default Formholder;