import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";

class Navbar extends Component {
  render() {
    return (
      <NavBar className="NavBar">
        <Container>
          <Nav className="selection">
            <Nav.Link href="./">
              <span>Home</span>
            </Nav.Link>
            {/* <Nav.Link href="./Register"><span className="glyphicon glyphicon-user"></span>Sign Up</Nav.Link>
              <Nav.Link href="./Login"><span className="glyphicon glyphicon-log-in"></span>Login</Nav.Link> */}
            <Nav.Link href="./content">
              <span>Content</span>
            </Nav.Link>
            <Nav.Link href="./history">
              <span>Historical Data</span>
            </Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    );
  }
}

export default Navbar;
