import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <NavBar className="NavBar">
        <Container>
          <Nav>
          <NavBar.Brand href="/" >
            <img src='../../logo.png' className="d-inline-block align-top" width='60px' alt="Mannion Farms logo" />
            </NavBar.Brand>
            <Nav.Link href="./">
              <span>Home</span>
            </Nav.Link>
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
