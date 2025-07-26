import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="relative flex items-center justify-between px-4 md:px-10 py-2">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Center: Desktop Menu Links (except Contact) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-600 transition duration-200">
            Home
          </Link>
          <Link
            to="/groceries"
            className="hover:text-red-600 transition duration-200"
          >
            Groceries
          </Link>
          <Link
            to="/clothes"
            className="hover:text-red-600 transition duration-200"
          >
            Clothes
          </Link>
          <Link
            to="/medicines"
            className="hover:text-red-600 transition duration-200"
          >
            Medicines
          </Link>
        </div>

        {/* Right: Contact Link */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="border border-red-500  text-black-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Right (Mobile): Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden text-gray-700 font-medium px-6 pb-4">
          <Link
            to="/"
            className="hover:text-red-600 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/groceries"
            className="hover:text-red-600 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Groceries
          </Link>
          <Link
            to="/clothes"
            className="hover:text-green-600 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Clothes
          </Link>
          <Link
            to="/medicines"
            className="hover:text-green-600 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Medicines
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
