import React, { useState } from "react";
import { links } from "../constant";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-semibold text-lg">EVENTMAN</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger */}
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block h-1 bg-white"></span>
            <span className="block h-1 bg-white"></span>
            <span className="block h-1 bg-white"></span>
          </div>
        </button>

        {/* Navigation Links for Desktop */}
        <div className={`lg:flex items-center space-x-6 hidden`}>
          {links.map((link) => (
            <a href={link.url} key={link.id} className="hover:text-gray-200">
              {link.text}
            </a>
          ))}
          <a
            href="#"
            className="bg-white px-6 py-2 text-blue-600 rounded-lg hover:text-red-500"
          >
            <span className="transition-all duration-200 transform hover:scale-105 inline-block">
              Sign in
            </span>
          </a>

          <a
            href="#"
            className="border-2 text-white px-5 py-2 rounded-lg hover:bg-red-500"
          >
            New Account
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              href={link.url}
              key={link.id}
              className="hover:text-gray-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.text}
            </a>
          ))}
          <a
            href="#"
            className="bg-white px-6 py-2 text-blue-600 rounded-lg hover:text-red-500 text-center"
          >
            <span className="transition-all duration-200 transform hover:scale-105 inline-block ">
              Sign in
            </span>
          </a>

          <a
            href="#"
            className="border-2 text-white px-5 py-2 rounded-lg hover:bg-red-500 text-center"
          >
            New Account
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
