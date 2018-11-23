import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom'
class Portfolio extends Component {
  render() {
    return (
     <div className="grid-container">
        <Link to="http://karaokeroulette.com" className="item1"><img classname='one' src="#"/>1</Link>
        <Link to="http://my-music-dna.com" className="item2"><img classname='two' src="#"/>2</Link>
        <Link to="http://karaokeroulette.com" className="item3"><img classname='three' src="#"/>3</Link>
        <Link to="http://foolish-liquid.surge.sh/" className="item4"><img classname='four' src="#"/>4</Link>
     </div>
    );
  }
}

export default Portfolio;