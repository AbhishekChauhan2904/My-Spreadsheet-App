'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white w-full p-4 m-0">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; 2024 My Spreadsheet App. All rights reserved.</p>
        <nav className="mt-4 md:mt-0 flex justify-center space-x-4">
          <a href="#" className="text-white">Privacy Policy</a>
          <a href="#" className="text-white">Terms of Service</a>
          <a href="#" className="text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
