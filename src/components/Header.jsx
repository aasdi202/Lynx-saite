import React from 'react';
import logo from '@/public/images/logo.png';

function Header() {
  return (
    <header className="p-4 bg-white shadow-md">
      <img src={logo} alt="Logo" className="h-10"/>
    </header>
  );
}

export default Header;
