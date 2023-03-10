import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Particles from '@components/Particles';
import Counter from '@components/Counter';
import Animation from '@components/Animation';
import './about.scss';

const AboutSection = () => (
  <section id='about'>
    <Particles id='about-particles' />
    <Container id='content'>
      <Row>
        <Col id="slogan" md={6}>
          <h1>
            The right<br/><span className='colored'>tech stack</span><br/>
            for your<br/><span className='colored'>solution</span>
           </h1>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <Animation animation='fadeInLeft'>
                <Counter value={8} duration={5}  symbol="+" description="Years" />
              </Animation>
            </Col>
            <Col md={6}>
              <Animation animation='fadeInRight'>
                <Counter value={999} duration={5} symbol="+" description="Commits" />
              </Animation>
            </Col>
            <Col md={6}>
              <Animation animation='fadeInRight'>
                <Counter value={15} duration={5} symbol="+" description="Projects" />
              </Animation>
            </Col>
            <Col md={6}>
              <Animation animation='fadeInRight'>
                <Counter value={5} duration={5} symbol="" description="Countries" />
              </Animation>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;
