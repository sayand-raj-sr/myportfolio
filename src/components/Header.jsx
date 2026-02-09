import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">SAYAND RAJ S R</h1>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white font-medium">Project</a>
            <a href="#skills" className="text-gray-300 hover:text-white font-medium">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-2">
          <a href="#about" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">About</a>
          <a href="#projects" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Project</a>
          <a href="#skills" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Skills</a>
          <a href="#contact" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;