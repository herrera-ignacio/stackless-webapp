import React from 'react';

interface NavItemProps {
  title: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, onClick }) => (
  <button type="button" onClick={onClick}>
    {title}
  </button>
);

export default NavItem;
