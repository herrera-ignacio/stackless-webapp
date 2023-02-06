import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@scss/global.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer/>
  </>
);

export default Layout;
