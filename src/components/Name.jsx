import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import sayand from '../assets/sayandimg.jpg';

function Name() {
  return (
    <section id="home" className='relative min-h-screen flex items-center justify-center bg-[#050505] px-6 overflow-hidden'>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className='relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center'>

        <div className='space-y-6 text-center md:text-left order-2 md:order-1'>
          <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 font-mono text-xs uppercase tracking-widest mb-2">
            // MERN Stack Developer
          </div>
          
          <h1 className='text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter'>
            Hi, I'm <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600'>
              Sayand Raj
            </span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3">
             <div className="h-[1px] w-12 bg-blue-500 hidden md:block"></div>
             <h2 className='text-xl md:text-2xl font-light text-blue-500 tracking-[0.2em] uppercase font-mono'>
               Ready to Code
             </h2>
          </div>

          <p className='text-gray-500 max-w-md mx-auto md:mx-0 text-lg leading-relaxed font-light'>
            Specializing in high-performance web applications with a focus on clean architecture and user experience.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-8 pt-6'>
            <a 
              href="#contact" 
              className='relative overflow-hidden group px-10 py-4 bg-white text-black font-bold rounded-sm transition-all duration-300'
            >
              <span className="relative z-10">HIRE ME</span>
              <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <div className='flex gap-6'>
              <SocialIcon href="https://github.com/sayand-raj-sr" icon={<FaGithub />} color="hover:text-blue-500" />
              <SocialIcon href="https://www.instagram.com/sayand_raj_" icon={<FaInstagram />} color="hover:text-white" />
              <SocialIcon href="https://www.linkedin.com/in/sayand-raj-s-r" icon={<FaLinkedinIn />} color="hover:text-blue-500" />
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-end order-1 md:order-2'>
          <div className='relative group'>
            <div className='absolute -inset-2 bg-gradient-to-b from-white/20 to-transparent rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-500'></div>
            
            <div className='relative w-72 h-96 md:w-80 md:h-[450px] bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]'>
              <img 
                src={sayand} 
                alt="Sayand Raj"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const SocialIcon = ({ href, icon, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-gray-600 text-2xl transition-all duration-300 transform hover:-translate-y-1 ${color}`}
  >
    {icon}
  </a>
);

export default Name;