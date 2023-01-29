import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { CodeBracketIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const HeroSection = () => (
  <section id="hero">
    <Container id="content">
      <h1>Experts in</h1>
      <h2>Software Development</h2>
      <div id="separator" />
      <div id="typing">
        <Typewriter
          options={{
            strings: [
              'Developers',
              'UI/UX',
              'DevOps',
              'SecOps'
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </Container>
    <div id="services">
      <Container>
        <Row>
          <Col className='service' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <CodeBracketIcon />
              </div>
              <h3 className='service-heading'>Web</h3>
              <p className='service-description'>
                Web applications with blazing fast performance and beautiful UIs. We take care of everything for you: design, development, and infrastructure. We'll build the right solution for your particular needs.
              </p>
            </div>
          </Col>
          <Col className='service' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <DevicePhoneMobileIcon />
              </div>
              <h3 className='service-heading'>Mobile</h3>
              <p className='service-description'>
                Mobile applications for iOS and Android. Whether you need a native app or a PWA, we'll find what works better for your needs and publish your application to the world.
              </p>
            </div>
          </Col>
          <Col className='service no-border' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <RocketLaunchIcon />
              </div>
              <h3 className='service-heading'>Agile</h3>
              <p className='service-description'>
                No matter what type of product you want to build, we'll leverage Agile frameworks to create fast feedback cycles, achieve your goals quickly efficiently while delivering high quality and future-proof solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default HeroSection;
