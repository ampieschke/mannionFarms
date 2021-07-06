import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

class Jumbo extends Component {
  render() {
    return (
      <div className = 'container'>
      <Jumbotron id='main'>
        <h1>Welcome!</h1>
        <p>
        Hello and welcome to the new Mannion Farms Fantasy Football League site!
        </p>
        <p>
          <Button variant="secondary">Learn more</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
