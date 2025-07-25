import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto ml-10" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none mr-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium mr-10">
          <Link to="/groceries" className="hover:text-red-600 transition duration-200">Groceries</Link>
          <Link to="/clothes" className="hover:text-green-600 transition duration-200">Clothes</Link>
          <Link to="/medicines" className="hover:text-green-600 transition duration-200">Medicines</Link>
          <Link to="/contact" className="hover:text-blue-600 transition duration-200">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden text-gray-700 font-medium px-6 pb-4">
          <Link to="/groceries" className="hover:text-red-600 transition duration-200" onClick={() => setMenuOpen(false)}>Groceries</Link>
          <Link to="/clothes" className="hover:text-green-600 transition duration-200" onClick={() => setMenuOpen(false)}>Clothes</Link>
          <Link to="/medicines" className="hover:text-green-600 transition duration-200" onClick={() => setMenuOpen(false)}>Medicines</Link>
          <Link to="/contact" className="hover:text-blue-600 transition duration-200" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
