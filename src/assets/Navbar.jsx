import React from "react";
import { Link } from "react-router-dom";
import githubLogo from '../images/github_logo.png';
import linkedinLogo from '../images/linkedin_logo.webp';
import emailLogo from '../images/email_logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="pages">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>

            <ul className="icons">
                <li>
                    <a href="https://github.com/castleaaron" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
                        <img src={githubLogo} alt="Github" className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/aaron-castle-850175269" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <img src={linkedinLogo} alt="LinkedIn" className="icon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:castleaaron@icloud.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <img src={emailLogo} alt="Email" className="icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
