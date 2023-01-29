import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@scss/global.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default Layout;
