import React, { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    id: 0,
    image: "https://i.pinimg.com/736x/a5/67/88/a56788b086071792e61b397561b6f02a.jpg", 
    tag: "MERN Stack",
    title: "Traditio: Explore Kerala's Soul",
    date: "Current Project",
    status: "In Progress",
    description: "A cultural exploration platform to book traditional events and discover the history of Theyyam, Kathakali, and more.",
    link: "", 
  },
  {
    id: 1,
    image: "https://static.vecteezy.com/system/resources/previews/024/789/969/original/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-and-retro-camera-illustration-vector.jpg",
    tag: "Frontend",
    title: "Responsive React Movie Review",
    date: "Nov 2025",
    link: "https://moviereview-omega.vercel.app/",
  },
  {
    id: 2,
    image: "https://images.hindustantimes.com/tech/img/2020/07/01/1600x900/Untitled_design_(1)_1593583074188_1593583082908.png",
    tag: "Frontend",
    title: "Bookmyshow Clone",
    date: "Oct 2025",
    link: "https://sayand-raj-sr.github.io/Bookmyshow/",
  },
  {
    id: 3,
    image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/04/06121223/full-form-of-bank-and-trivia-questions-sixteen_nine.jpg",
    tag: "JavaScript",
    title: "Online Banking System",
    date: "Nov 2025",
    link: "https://sayand-raj-sr.github.io/onlinebank/",
  },
  {
    id: 4,
    image: "https://tse2.mm.bing.net/th/id/OIP.iTqn8yDQDzXer9EeJTYi7wHaEo?w=612&h=383&rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "API",
    title: "Weather Forecast App",
    date: "Nov 2025",
    link: "https://sayand-raj-sr.github.io/weatherapp/",
  },
  {
    id: 5,
    image: "https://th.bing.com/th/id/OIP.ga0Wk_nsVxUFuA59rrqzrQHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    tag: "DOM",
    title: "Modern BMI Calculator",
    date: "Sept 2025",
    link: "https://sayand-raj-sr.github.io/newbmi/",
  },
];

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="projects" className="bg-[#050505] min-h-screen py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-blue-500 text-sm tracking-[0.3em] uppercase mb-2">// My_Work</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">PROJECTS</h2>
          <div className="h-1 w-20 bg-blue-600 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl bg-[#0a0a0a] border ${project.status ? 'border-blue-500/40' : 'border-white/10'} overflow-hidden hover:border-blue-500/50 transition-all duration-500`}
            >
              {/* Status Badge for MERN project */}
              {project.status && (
                <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">
                  {project.status}
                </div>
              )}

              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase py-1 px-3 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    {project.tag}
                  </span>
                  <span className="text-xs text-gray-600 font-mono">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description added for Traditio */}
                {project.description && (
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn mt-2"
                >
                  {project.status ? "PREVIEW REPO" : "VIEW CASE STUDY"} 
                  <FaExternalLinkAlt className="text-blue-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="relative px-12 py-4 bg-transparent text-white font-bold tracking-widest border border-white/20 hover:border-blue-500 transition-all overflow-hidden group"
            >
              <span className="relative z-10">LOAD MORE</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;