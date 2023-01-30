import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { CodeBracketIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import './hero.scss';

const HeroSection = () => (
  <section id="hero">
    <div id="content">
      <Container>
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
    </div>
    <div id="services">
      <Container>
        <Row>
          <Col className='service' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <CodeBracketIcon />
              </div>
              <h3 className='service-heading'>Web</h3>
              <div className='service-separator' />
              <p className='service-description'>
                Web applications with blazing fast performance and beautiful UIs.
              </p>
            </div>
          </Col>
          <Col className='service' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <DevicePhoneMobileIcon />
              </div>
              <h3 className='service-heading'>Mobile</h3>
              <div className='service-separator' />
              <p className='service-description'>
                Whether you need a native app or a PWA, we'll publish your application to the world.
              </p>
            </div>
          </Col>
          <Col className='service no-border' md={4}>
            <div className='service-content'>
              <div className='service-icon'>
                <RocketLaunchIcon />
              </div>
              <h3 className='service-heading'>Agile</h3>
              <div className='service-separator' />
              <p className='service-description'>
                Speed and efficiency while delivering high quality and future-proof solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default HeroSection;
