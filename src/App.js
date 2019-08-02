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
            <img id="header-img" src={logo} alt="company-logo" height="60px" />
              <p id="company-name">R.T.G. Studios</p>
          </div>
          <nav id="nav-bar">
            <ul class="ul-container">
              <li><a class="nav-link" href="#services">Services</a></li>
              <li className="nav-link">Features</li>
              <li className="nav-link">Contact</li>
            </ul>
          </nav>
        </header>
        <form id="form">
          <h1 id="form-h1"><p>We'll be here with our product Ninja Shutdown in some days.<br />Enter Your Email to get more info.  </p></h1>
          <input type="email" name="email" id="email" placeholder="Enter your Email" required />
          <input type="submit" id="submit" value="Submit" />
        </form>
        <div class="container">
          <section id="features">
            <ol>
              <li className="about-list">
                RTG NINJA AUTO SHUTDOWN allows you to schedule the system shutdown, with ease. You simply need to enter the desired hour and let the application power off the computer while you are already away. The application is lightweight and can silently run in the background until the time comes for shutting down the PC.
                Simple to use shutdown scheduler
              </li>
              <li>RTG NINJA AUTO SHUTDOWN can come in handy in many situations, all which imply the need to shutdown the system, with a certain delay. If you are away from your desk and cannot shutdown the system, you can simply open RTG NINJA AUTO SHUTDOWN, set the desire hour and leave the application to run on the desktop or in the background.
                Whether you wish to protect your privacy, save power or control the time your children spend on the computer, this simple application can help you shutdown the computer at the desired time. Moreover, it allows you to set a scheduler, as well as manually give it the command to shutdown, restart or log off.
                Scheduler or instant command
              </li>
              <li>
                wel
              </li>
            </ol>
          </section>
        </div>
      </div>
    ); 
  }
}

export default App;
