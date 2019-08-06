import React from "react";
import "../App.css";
import logo from ".././op.png";
import { Navbar, Nav,Form } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="header" bg="" expand="lg">
      <a href="/">
        <img className="company-logo" src={logo} height="70px" alt="" />
        <Navbar.Brand id="company-name">R.T.G Studios</Navbar.Brand>
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Form inline>
          <div className="menu">
            <span style={{ fontWeight: "bold", padding: "5px" }}>
              <a
                style={{
                  fontWeight: "bold",
                  padding: "5px",
                  color: "black",
                  cursor: "pointer"
                }}
                href="#features"
              >
                Features
              </a>
            </span>
            <span style={{ fontWeight: "bold", padding: "5px" }}>
              <a
                style={{
                  fontWeight: "bold",
                  padding: "5px",
                  color: "black",
                  cursor: "pointer"
                }}
                href="#contact"
              >
                Contact
              </a>
            </span>
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
