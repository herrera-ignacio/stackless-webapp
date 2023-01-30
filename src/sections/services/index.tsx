import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeaderWithAnimation from '@components/HeaderWithAnimation';
import Animation from '@components/Animation';
import './services.scss';

const ServicesSection = () => (
  <section id="services">
    <Container>
      <HeaderWithAnimation text="Our Services" />      
      <Row>
        <Col md={4}>
          <Animation animation='fadeInLeft' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
              </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInDown' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInRight' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInLeft' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInUp' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInRight' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                
              </div>
              <h4 className='service-heading'>Service</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  In vitae ultricies lacus vitae
                </li>
                <li>
                  Pellentesque blandit libero
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ServicesSection;
