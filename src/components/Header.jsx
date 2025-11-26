import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">SAYAND RAJ S R</h1>
          </div>


          <div className="flex-1 flex justify-center space-x-8">
            <a href='/' className="text-gray-300 hover:text-white font-medium">Home</a>
            <a href='/about' className="text-gray-300 hover:text-white font-medium">About</a>
            <a href="/projects" className="text-gray-300 hover:text-white font-medium">Project</a>
            <a href="/skills" className="text-gray-300 hover:text-white font-medium">Skills</a>
            <a href="/contact" className="text-gray-300 hover:text-white font-medium">Contact</a>
          </div>


          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-transparent text-white shadow-md">
          <a href="#about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">About</a>
          <a href="#projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Project</a>
          <a href="#skills" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Skills</a>
          <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Contact</a>
        </div>
      )}


      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <a
          href="/contact"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-lg font-medium"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
