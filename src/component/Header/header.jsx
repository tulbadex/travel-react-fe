import React from 'react';
import appLogo from '../../assets/logo.svg';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <img src={appLogo} alt="Tripma Logo" className="h-8" />
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Flights</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Hotels</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Packages</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Sign in</a>
        <a href="#" className="bg-[#605DEC] text-white px-4 py-2 rounded">Sign up</a>
      </nav>
    </header>
  );
}

export default Header;