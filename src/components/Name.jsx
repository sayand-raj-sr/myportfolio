import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import sayand from '../assets/sayandimg.jpg';

function Name() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-900 px-6'>
      <div className='max-w-6xl grid md:grid-cols-2 gap-8 items-center'>

        <div className='space-y-4'>
          <h1 className='text-5xl font-bold text-white'>Hi,</h1>
          <h1 className='text-4xl md:text-5xl font-semibold text-white'>I&apos;m Sayand Raj</h1>
          <h2 className='text-3xl md:text-4xl font-medium text-gray-300'>Web Developer</h2>

          <button href="/contact" className='mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>
            Contact Me
          </button>

         
          <div className='flex gap-4 mt-6'>
            <a 
              href="https://github.com/sayand-raj-sr" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-white text-3xl hover:text-gray-300 transition duration-300'
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.instagram.com/sayandraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-pink-500 text-3xl hover:text-pink-700 transition duration-300'
            >
              <FaInstagram /> 
            </a>
            <a 
              href='https://www.linkedin.com/in/sayand-raj-s-r'  
              target="_blank" 
              rel="noopener noreferrer"
              className='text-blue-700 text-3xl hover:text-blue-900 transition duration-300'
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className='flex justify-center md:justify-end'>
          <div className='w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full shadow-xl '>
            <img 
              src={sayand} 
              alt="Sayand Raj"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Name;
