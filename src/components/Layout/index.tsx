import React, { ReactNode } from 'react';
import '@scss/global.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main>
    {children}
  </main>
);

export default Layout;
