import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import '@scss/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main>
    <Navbar />
    {children}
    {/*
      <Hero />
      <AboutOne />
      <ServicesOne />
      <PortfolioOne />
      <TestimonialsOne />
      <TeamOne />
      <ClientsOne />
      <ContactCreative />
    */}
  </main>
);

export default Layout;
