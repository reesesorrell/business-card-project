import React, {Component} from 'react';
import '../styles/formholder.css';
import '../styles/header.css';
import Personalinfo from './Personalinfo';
import Educationinfo from './Educationinfo';
import Workinfo from './Workinfo';

class Formholder extends Component {
  constructor() {
    super();

    this.state = {
      info: {
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
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      info: editDictItem(this.state.info, name, value),
    })

    function editDictItem(dict, key, value) {
      dict[key] = value;
      return dict;
    }
  }



  render() {
    return (
      <div className='Formholder'>
        <form>
            <div className='input-section'>
                <Personalinfo />
                <Educationinfo />
                <Workinfo />
            </div>
        </form>
      </div>
    )
  }
}

export default Formholder;