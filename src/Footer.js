import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
     <nav className='links' >
      <Link to="https://www.linkedin.com/in/mcewen-hardy-49506622/" className="one"><img classname='four' src="#"/>LinkedIn</Link>
      <Link to="https://github.com/creativesplit" className="item4"><img classname='four' src="#"/>Github</Link>
      <Link to="http://foolish-liquid.surge.sh/" className="item4"><img classname='four' src="#"/>Resume</Link>
     </nav>
    );
  }
}

export default Footer;