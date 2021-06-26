import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Jumbo extends Component {
  render() {
    return (
      <div className = 'container'>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
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
