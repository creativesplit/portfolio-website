import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import NameBrand from './NameBrand'
import Portfolio from './Portfolio'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
     <div>
       <NameBrand />
       <Portfolio />
       <Footer />
     </div>
    );
  }
}

export default App;
