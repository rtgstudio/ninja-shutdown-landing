import React,{Component} from 'react';
import logo from './op.png';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return (
      <div className="App">
        <header id="header">
          <div id="logo-name">
            <img id="header-img" src={logo} alt="company-logo" height="50px" />
              <p id="company-name">R.T.G. Studios</p>
          </div>
          <nav id="nav-bar">
            <ul class="ul-container">
              <li><a class="nav-link" href="#services">Services</a></li>
              <li><a class="nav-link" href="#features">Features</a></li>
            </ul>
          </nav>
        </header>
        <form id="form" action="https://www.freecodecamp.com/email-submit">
          <h1 id="form-h1"><p>A simple to use application which allows<br /> you to easily schedule the computer shutdown
but also trigger the system reboot or
log off on demand</p></h1>
          <input type="email" name="email" id="email" placeholder="Enter your Email" required />
          <input type="submit" id="submit" value="Get Started" />
        </form>
        <div class="container">
          <section id="services">
            <div className="grid-header">
              <h1>Our <span>services</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br />nibh euismod tincidunt ut laoreet dolore magna.</p>
            </div>
            <div class="hidden-grid">
              <div class="item-box">
                <div class="icon">
                  <img class="img-icon" alt="content-writing" src="https://image.flaticon.com/icons/svg/660/660756.svg" />
                </div>
                <h2>Content writing</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
              </div>
              <div class="item-box">
                <div class="icon">
                  <img class="img-icon" alt="web-development" src="https://image.flaticon.com/icons/svg/831/831737.svg" />
                </div>
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    ); 
  }
}

export default App;
