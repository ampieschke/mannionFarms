import React, { Component } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class SubContent extends Component {
  render() {
    return (
      <div className = 'container'>
          <Row>
          <Col lg='8' md='12'sm='12'>
              <Row className = 'subRow'>
                <Col md="8" sm='10' xs='10' className="contentRow">
                    <h3>An Article!</h3>
                </Col>
                <Col>
                    <Button variant="secondary"> Go </Button>
                </Col>
              </Row>
              <Row className = 'subRow'>
                <Col md="8" sm='10' xs='10' className="contentRow">
                    <h3>An Article!</h3>
                </Col>
                <Col>
                    <Button variant="secondary"> Go </Button>
                </Col>
              </Row>
          </Col>
          <Col lg='4' sm='12' className ='standings'>
              <h2>
                  Standings
              </h2>
              <Row><h4>SFC Hickory</h4></Row>
              <Row ><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><h4>SFC Glen Oak</h4></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><h4>MFC Heritage</h4></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><h4>MFC Spicer</h4></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
              <Row><p>TBD</p><p>(0-0-0)</p></Row>
          </Col>
          </Row>
      </div>
    );
  }
}

export default SubContent;
