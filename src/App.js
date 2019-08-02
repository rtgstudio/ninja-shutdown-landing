import React,{Component} from 'react';
import Productlogo from './assets/op.png';
import logo from './op.png';
import './App.css';
var emails=[]
class App extends Component{
  constructor(){
    super();
    this.state={
      email:''
    }
  }
  onSearchChange = (e)=>{
    this.setState({email:e.target.value});
  }
  onSubmit = ()=>{
    emails.push(this.state.email);
    this.setState({email:''})
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
              <li><a className="nav-link" href="#features">Features</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className="product">
          <div className="product-heading">
            <img className="product-image" src={Productlogo} alt="" height="140px" />
            <h1> R.T.G. Ninja Shutdown</h1>
          </div>
          <p style={{"color":"white","fontWeight":"bold"}}>A simple to use application which allows you to easily schedule<br /> the computer shutdown
but also trigger the system reboot or
log off on demand</p>
          <h2 style={{"color":"white","fontWeight":"bold"}}> Product Launching Soon....</h2>
        </div>
        <div class="container">
          <section id="features">
            <ul>
              <li className="about-list">
                RTG NINJA AUTO SHUTDOWN allows you to schedule the system shutdown, with ease. You simply need to enter the desired hour and let the application power off the computer while you are already away. The application is lightweight and can silently run in the background until the time comes for shutting down the PC.
                Simple to use shutdown scheduler
              </li>
              <li className="about-list">RTG NINJA AUTO SHUTDOWN can come in handy in many situations, all which imply the need to shutdown the system, with a certain delay. If you are away from your desk and cannot shutdown the system, you can simply open RTG NINJA AUTO SHUTDOWN, set the desire hour and leave the application to run on the desktop or in the background.
                Whether you wish to protect your privacy, save power or control the time your children spend on the computer, this simple application can help you shutdown the computer at the desired time. Moreover, it allows you to set a scheduler, as well as manually give it the command to shutdown, restart or log off.
                Scheduler or instant command
              </li>
              <li className="about-list">
                RTG NINJA AUTO SHUTDOWN can run in silent mode, if you click the HIDE button and cannot be found in the System Tray. This option can constitute a reliable security measure, in case your children wish to use the computer, for example. Thus, if they cannot find the application, they cannot disable the schedule.
              </li>
            </ul>
          </section>
        </div>
        <section id="contact">
          <div id="form">
            <h1 id="form-h1"><p>We'll be here with our product Ninja Shutdown in some days.<br />Enter Your Email to get more info.  </p></h1>
            <input type="email" name="email" id="email" placeholder="Enter your Email" onChange={this.onSearchChange} required />
            <input type="submit" id="submit" value="Submit" onClick={this.onSubmit}  />
          </div>
        </section>
        <footer className="footer">
          Get In Touch<br />

          Just Give Us A Miss Call On +(91)-889-5193-795 And
          We Will We Their To Help You Just Anytime You Need .<br />
          Or Mail Us To support@rtgstudios.in<br />
          <span><br />COPYRIGHT R.T.G STUDIOS All Rights Reserved</span>
        </footer>

      </div>
    ); 
  }
}

export default App;
