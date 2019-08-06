import React,{Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Productlogo from './assets/op.png';
import SweetAlert from 'sweetalert';
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
    SweetAlert("Thanks","We got You","Success");
  }
  render(){
    return (
      <div className="App">

        <Header />

        <div className="product">
          <div className="product-heading">
            <img className="product-image" src={Productlogo} alt="" height="140px" />
            <h1> R.T.G. Ninja Shutdown</h1>
          </div>
          <p style={{"color":"black","fontWeight":"bold"}}>A simple to use application which allows you to easily schedule<br /> the computer shutdown
            but also trigger the system reboot or
            log off on demand.
          </p>
        </div>
        <div class="container">
          <section id="features">
              <Card />
          </section>
        </div>

        <section id="contact">
          <div id="form">
            <h1 id="form-h1"><p><br />Enter Your Email to get more info.  </p></h1>
            <input type="email" name="email" id="email" placeholder="Enter your Email" onChange={this.onSearchChange} required />
            <input type="submit" id="submit" value="Submit" onClick={this.onSubmit}  />
            
          </div>
        </section>
        <Footer />

      </div>
    ); 
  }
}

export default App;
