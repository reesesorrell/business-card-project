import React, {Component} from 'react';
import Header from './components/Header';
import Formholder from './components/Formholder';
import './app.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Formholder />
      </div>
    )
  }
}

export default App;