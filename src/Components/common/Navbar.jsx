import React, { useState } from 'react';
import logo from "../../assets/logo/logo.jpg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto ml-10" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
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

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium mr-10">
          <a href="#groceries" className="hover:text-red-600 transition duration-200">Groceries</a>
          <a href="#clothes" className="hover:text-green-600 transition duration-200">Clothes</a>
          <a href="#medicines" className="hover:text-green-600 transition duration-200">Medicines</a>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden text-gray-700 font-medium">
          <a href="#groceries" className="hover:text-green-600 transition duration-200">Groceries</a>
          <a href="#clothes" className="hover:text-green-600 transition duration-200">Clothes</a>
          <a href="#medicines" className="hover:text-green-600 transition duration-200">Medicines</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
