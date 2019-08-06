import React from 'react';
import '../App.css';
import logo from '.././op.png';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';
const Header =()=>{
	return(
          	<Navbar className="header" bg="dark" expand="lg">
			  <a href="/"><Navbar.Brand >News</Navbar.Brand></a>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			    </Nav>
			    <Form inline>
			    	<div className="menu">
				    	<span style={{"fontWeight":"bold","padding":"5px"}}><a style={{"fontWeight":"bold","padding":"5px","color":"black","cursor":"pointer"}} href="#features">Features</a></span>
				    	<span style={{"fontWeight":"bold","padding":"5px"}}>Contact</span>
				    </div>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
		);
}
export default Header;