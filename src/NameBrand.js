import React, { Component } from 'react';
import './NameBrand.css';

class NameBrand extends Component {
  render() {
    return (
     <div className='NameBrand'>
      <h1> McEwen Hardy</h1>
      <h2>A driven Web Developer, I always prefer 
      to take a risk in pursuit of growth than acquiesce 
      to the status quo. Persistent in pursuit of not the 
      easy answer but the right answer, and driven to see 
      new ideas through to their conclusions.</h2>
      {/* <img className='background' src='https://i.imgur.com/MQBfrC0.jpg'/> */}
    </div>
    );
  }
}

export default NameBrand;