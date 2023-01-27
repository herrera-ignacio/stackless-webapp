import React, { useState } from 'react';
import scrollToElement from 'scroll-to-element';
import NavItem from './NavItem';

const sections = [
  'home',
  'about',
  'services',
  'testimonials',
  'clients',
  'team',
  'contact',
];

const Navbar = () => {
  const collapse = useState(false);
  const sticky = useState(false);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 2000,
      });
    }
  };

  return (
    <>
      {
        sections.map((sectionName) => (
          <NavItem key={sectionName} title={sectionName} onClick={() => navigate(sectionName)} />
        ))
      }
    </>
  );
};

export default Navbar;
