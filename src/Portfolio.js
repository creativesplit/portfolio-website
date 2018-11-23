import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom'
class Portfolio extends Component {
  render() {
    return (
     <div className='grid-container'>
        <Link to="http://karaokeroulette.com" className='grid-item'><img src='https://i.imgur.com/EvMyZe4.png' alt='Towers of Hanoi'/></Link>
        <Link to="http://my-music-dna.com" className='grid-item'><img src='https://i.imgur.com/TXURZ9d.jpg' alt='Music DNA'/></Link>
        <Link to="http://karaokeroulette.com" className='grid-item'><img src='https://i.imgur.com/yX89qjr.jpg' alt='Apartment Guidepost'/></Link>
        <Link to="http://foolish-liquid.surge.sh/" className='grid-item'><img src='https://i.imgur.com/XFMkKjR.jpg' alt='Karaoke Roulette'/></Link>
     </div>
    );
  }
}

export default Portfolio;