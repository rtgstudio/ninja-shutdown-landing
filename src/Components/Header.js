import React from 'react';
import '../App.css';
import logo from '.././op.png';
const Header =()=>{
	return(
		<header id="header">
          <div id="logo-name">
            <img id="header-img" src={logo} alt="company-logo" height="60px" />
              <p id="company-name">R.T.G. Studios</p>
          </div>
          <nav id="nav-bar">
            <ul class="ul-container">
              <li><a class="nav-link" href="#services">Services</a></li>
              <li><a className="nav-link" href="#features">Features</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
		);
}
export default Header;