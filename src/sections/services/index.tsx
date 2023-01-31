import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  DeviceTabletIcon,
  LightBulbIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import HeaderWithAnimation from '@components/HeaderWithAnimation';
import Animation from '@components/Animation';
import './services.scss';

const ServicesSection = () => (
  <section id="services">
    <Container>
      <HeaderWithAnimation text="Our Services" highlightIdx={1} />      
      <Row>
        <Col md={4}>
          <Animation animation='fadeInLeft' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <ComputerDesktopIcon />
              </div>
              <h4 className='service-heading'>Web & Desktop</h4>
              <div className='service-separator' />
                <ul>
                  <li>
                    Mobile-first & PWAs
                  </li>
                  <li>
                    CSR or SSR
                  </li>
                  <li>
                    SEO Optimization
                  </li>
                </ul>
              </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInDown' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <DeviceTabletIcon />
              </div>
              <h4 className='service-heading'>Mobile</h4>
              <div className='service-separator' />
                <ul>
                  <li>
                    Android & iOS
                  </li>
                  <li>
                    Payments & subscriptions
                  </li>
                  <li>
                    Publish to stores
                  </li>
                </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInRight' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <CpuChipIcon />
              </div>
              <h4 className='service-heading'>Backend</h4>
              <div className='service-separator' />
              <ul>
                <li>
                  System design
                </li>
                <li>
                  Distributed systems
                </li>
                <li>
                  SQL & NoSQL
                </li>
              </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInLeft' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <ServerStackIcon />
              </div>
              <h4 className='service-heading'>DevSecOps</h4>
              <div className='service-separator' />
                <ul>
                  <li>
                    CI/CD pipelines
                  </li>
                  <li>
                    Infrastructure as code
                  </li>
                  <li>
                    Secure developlment
                  </li>
                </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInUp' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <LightBulbIcon />
              </div>
              <h4 className='service-heading'>UI/UX</h4>
              <div className='service-separator' />
                <ul>
                  <li>
                    Design systems
                  </li>
                  <li>
                    Branding
                  </li>
                  <li>
                    Accessibility
                  </li>
                </ul>
            </div>
          </Animation>
        </Col>
        <Col md={4}>
          <Animation animation='fadeInRight' delay={200}>
            <div className='service-element'>
              <div className='service-icon'>
                <ShieldCheckIcon /> 
              </div>
              <h4 className='service-heading'>Compliance</h4>
              <div className='service-separator' />
                <ul>
                  <li>
                    Solutions for U.S. companies
                  </li>
                  <li>
                    HIPAA, HITRUST, NIST SP800-171
                  </li>
                  <li>
                    Accessibility (ADA & WCAG 2.0)
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
