import React from 'react';
import sayand1 from '../assets/white.jpg';
import resume from '../assets/sayand raj sr resume.pdf'
import Name from './Name';
function About() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 className="text-center text-5xl font-extrabold text-white mb-12">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">


          <div className="w-full md:w-1/3">
            <img
              src={sayand1}
              alt="Profile"
              className="w-80 h-110 rounded-xl"
            />
          </div>


          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-4xl font-semibold mb-4">
              A Web Developer With a Passion for Designing
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Hi, I’m Sayand Raj S R, a passionate web developer and BCA graduate with a strong foundation in the MEARN stack.
              I specialize in building responsive, user-friendly web applications using technologies like HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I am constantly learning new technologies and crafting seamless experiences that align with client goals. Whether it’s front-end or back-end, I’m dedicated to delivering high-quality, scalable solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Let’s connect and bring your ideas to life!
            </p>


            <a
              href={resume}
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-xl"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
