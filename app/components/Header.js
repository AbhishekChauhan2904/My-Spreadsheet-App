'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white w-full p-4 m-0 fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Spreadsheet App</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white px-2">Home</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white px-2">About</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white px-2">Contact</a>
        </nav>
      </div>
    </header>
  );
}
