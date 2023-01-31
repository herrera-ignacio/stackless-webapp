import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Animation from '@components/Animation';
import HeaderWithAnimation from '@components/HeaderWithAnimation';
import './contact.scss';

const ContactSection = () => {
  return (
    <section id='contact'>
      <Container>
      <HeaderWithAnimation text="Contact" />   
        <Row className='links-row'>
          <Col className='link-col' md={4}>
            <Animation animation='fadeIn' delay={500}>
              <div className='info-box'>
                <div className='icon-container'>
                  <EnvelopeIcon />
                </div>
                <div className='info-text'>
                  <h4>Email</h4>
                  <div className='link-box'>
                    <a href='mailto:ignacioromanherrera@gmail.com'>ignacioromanherrera@gmail.com</a>
                  </div>
                </div>
              </div>
            </Animation>
          </Col>
          <Col className='link-col' md={4}>
            <Animation animation='fadeIn' delay={1000}>
              <div className='info-box'>
                <div className='icon-container'>
                  <PhoneIcon />
                </div>
                <div className='info-text'>
                  <h4>Telephone</h4>
                  <div className='link-box'>
                    <a href='tel:(123)123-1234'>(123) 456-6789</a>
                  </div>
                </div>
              </div>
            </Animation>
          </Col>
          <Col className='link-col' md={4}>
            <Animation animation='fadeIn' delay={1500}>
              <div className='info-box'>
                <div className='icon-container'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='info-text'>
                  <h4>LinkedIn</h4>
                  <div className='link-box'>
                    <a target='_blank' href='https://www.linkedin.com/in/ignacioromanherrera/'>
                      Stackless LLC
                    </a>
                  </div>
                </div>
              </div>
            </Animation>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection;