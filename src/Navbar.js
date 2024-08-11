import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Navbar = () => {
    return (
    <nav>
        <ul>
          <li className="pages"><Link to="/">Home</Link></li>
          <li className="pages"><Link to="/about">About</Link></li>
          <li className="pages"><Link to="/resume">Resume</Link></li>
          <li className="pages"><Link to="/projects">Projects</Link></li>
          <li className="Icons" style={{ marginLeft: 'auto' }}><a href="https://github.com/castleaaron" target="_blank" rel="noopener noreferrer"><img src={require('./images/github_logo.png')} alt="Github" style={{ width: '50px', filter: 'invert(100%)' }} /></a></li>
          <li className="Icons"><a href="https://linkedin.com/in/aaron-castle-850175269" target="_blank" rel="noopener noreferrer"><img src={require('./images/linkedin_logo.webp')} alt="LinkedIn" style={{ width: '50px', filter: 'invert(100%)' }} /></a></li>
          <li className="Icons"><a href="mailto:castleaaron@icloud.com" target="_blank" rel="noopener noreferrer"><img src={require('./images/email_logo.png')} alt="Email" style={{ width: '50px', filter: 'invert(100%)'}} /></a></li>
        </ul>
      </nav>
    );
}

export default Navbar;