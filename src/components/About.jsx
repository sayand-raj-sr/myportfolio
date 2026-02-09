import React from 'react';
import sayand1 from '../assets/white.jpg';
import resume from '../assets/sayand_raj_sr_fullstack.pdf';

function About() {
  return (
    <section id="about" className="bg-[#050505] text-white py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">About_Me</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative justify-self-center">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl z-0"></div>
            <div className="relative z-10 w-72 h-96 overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
              <img
                src={sayand1}
                alt="Sayand Raj"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-semibold leading-tight text-blue-400">
              MERN Stack Developer <br />
              <span className="text-white">& Problem Solver.</span>
            </h3>

            <div className="space-y-4 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Hi, I’m <span className="text-white font-medium">Sayand Raj S R</span>. As a BCA graduate and a dedicated
                MERN Stack fresher, I thrive on the logic and structure of coding.
              </p>

              <p>
                My approach is simple: write <span className="italic text-gray-300">clean code</span>, build
                <span className="italic text-gray-300"> user-centric designs</span>, and never stop learning.
                I specialize in turning ideas into fully functional web applications using the latest JavaScript tools.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-blue-300">#MongoDB</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-blue-300">#Express</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-blue-300">#React</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-blue-300">#Node</span>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <a
                href={resume}
                download
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-lg"
              >
                Get Resume
              </a>
              <div className="hidden sm:block h-10 w-[1px] bg-gray-800"></div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest leading-tight">
                Ready to contribute <br /> to your next big idea
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;