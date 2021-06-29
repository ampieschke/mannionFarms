import React, { Component } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Subnews extends Component {
  render() {
    return (
      <div className = 'container'>
          <Row>
          <Col lg='8'>
              <Row>
                <Col md="10" sm='10' xs='10' className="contentRow">
                    <h3>An Article!</h3>
                </Col>
                <Col>
                    <Button variant="secondary"> Go </Button>
                </Col>
              </Row>
              <Row>
                <Col md="10" sm='10' xs='10' className="contentRow">
                    <h3>An Article!</h3>
                </Col>
                <Col>
                    <Button variant="secondary"> Go </Button>
                </Col>
              </Row>
          </Col>
          <Col lg='4' className ='standings'>
              <h2>
                  Standings
              </h2>
            
          </Col>
          </Row>
      </div>
    );
  }
}

export default Subnews;
