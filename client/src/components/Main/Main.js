import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';

export default class Main extends React.Component {
  render() {
    return (
      <Container>

        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
        </Row>
      </Container>
    );
  }
}