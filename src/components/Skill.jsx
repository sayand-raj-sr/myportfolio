import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { SiMongodb } from "react-icons/si";


function Skills() {
  const skillSet = [
    { name: 'HTML5', level: '75%', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', level: '75%', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', level: '75%', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React.js', level: '80%', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', level: '70%', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express', level: '65%', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', level: '70%', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Tailwind', level: '65%', icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  return (
    <section id="skills" className="bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-blue-500 text-sm tracking-widest uppercase mb-2">// Technical_Stack</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">My_Skills</h2>
          <p className="text-gray-500 mt-4 max-w-lg font-light">
            I specialize in the MERN ecosystem, building scalable and performant web applications with modern styling.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillSet.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-bold tracking-tight">{skill.name}</h3>
                <div className="mt-2 w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                   <div 
                     className="bg-blue-500 h-full transition-all duration-1000 group-hover:bg-blue-400" 
                     style={{ width: skill.level }}
                   ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-neutral-900 border border-white/10 p-2 rounded-3xl">
                <img
                  src="https://educationviewindia.com/wp-content/uploads/2024/09/Untitled-design-8.jpg"
                  alt="Work station"
                  className="w-full h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;