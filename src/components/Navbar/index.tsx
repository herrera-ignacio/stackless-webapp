import React, { useState, useEffect } from 'react';
import scrollToElement from 'scroll-to-element';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import './navbar.scss';

const sections = [
  { name: 'home', id: 'hero' },
  { name: 'about', id: 'about' },
  { name: 'services', id: 'services' },
  { name: 'team', id: 'team' },
  { name: 'contact', id: 'contact' },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const navigate = (id: string) => {
    const el = document.querySelector(`section#${id}`);
    if (el) {
      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 100,
      });
    }
  };

  // navbar-* classes are provided by bootstrap.
  return (
    <div id='navbar-wrapper' className={`header${sticky ? ' sticky' : ''}`}>
      <Container id='navbar-container'>
        <div id='logo-wrapper' className='logo'>
          <img id='logo' alt='logo' src='img/logo.svg' />
        </div>
        <button
          id='toggler'
          className='navbar-toggler navbar-toggler-right'
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faBars} className="bars" />
        </button>
        <nav className={`navbar navbar-expand-sm ${collapsed ? 'expand' : 'hidden-mobile'}`}>
          <div id='nav-inner' className={`navbar-collapse collapse ${collapsed ? 'show' : ''}`}>
            <div className="navbar-nav">
              {
                sections.map((section) => (
                  <NavItem key={section.id} title={section.name} onClick={() => navigate(section.id)} />
                ))
              }
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
