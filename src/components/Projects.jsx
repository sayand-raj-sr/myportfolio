import React, { useState } from "react";

const projects = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/024/789/969/original/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-and-retro-camera-illustration-vector.jpg",
    tag: "Frontend",
    title: "Responsive React Movie Review Website",
    date: "Nov 2025",
    link: "https://moviereview-omega.vercel.app/",
  },
  {
    id: 2,
    image:
      "https://images.hindustantimes.com/tech/img/2020/07/01/1600x900/Untitled_design_(1)_1593583074188_1593583082908.png",
    tag: "Frontend",
    title: "Bookmyshow Clone Website",
    date: "Oct 2025",
    link: " https://sayand-raj-sr.github.io/Bookmyshow/",
  },
  {
    id: 3,
    image:
      "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/04/06121223/full-form-of-bank-and-trivia-questions-sixteen_nine.jpg",
    tag: "JavaScript",
    title: "Online Banking Website",
    date: "Nov 2025",
    link: "https://sayand-raj-sr.github.io/onlinebank/",
  },
  {
    id: 4,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.iTqn8yDQDzXer9EeJTYi7wHaEo?w=612&h=383&rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "API",
    title: "Weather App",
    date: "Nov 2025",
    link: "https://sayand-raj-sr.github.io/weatherapp/",
  },
  {
    id: 5,
    image:
      "https://th.bing.com/th/id/OIP.ga0Wk_nsVxUFuA59rrqzrQHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    tag: "DOM",
    title: "BMI Calculator",
    date: "Sept 2025",
    link: "https://sayand-raj-sr.github.io/newbmi/",
  },
];

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="bg-[#050505] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md">
          Projects
        </h1>

        <section>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden bg-[#0c0c0c] shadow-xl border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover border-b border-gray-700"
                />

                <div className="p-6 space-y-4 text-white">
                  <span className="text-sm text-purple-400 font-semibold">
                    {project.tag}
                  </span>

                  <h3 className="text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{project.date}</p>

                  <a
                    href={project.link}
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-center py-2 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < projects.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleShowMore}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition font-medium"
              >
                Show More
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Projects;
