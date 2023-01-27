import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Particles from '@components/Particles';

const AboutSection = () => (
  <section id="about">
    <Particles />
    <Container id="content">
      <Row>
        <Col md={6}>
          <h1>About</h1>
        </Col>
        <Col md={6}>
          <div>
            <p>Some more stuff</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;
