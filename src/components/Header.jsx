import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 pt-6">
      <div className="max-w-5xl mx-auto bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl px-6 py-4 flex justify-between items-center">
        
        {/* Logo/Name */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-black tracking-tighter text-white">
            SAYAND<span className="text-blue-500">.</span>
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col space-y-4 text-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeMenu} 
              className="text-gray-300 hover:text-white uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;