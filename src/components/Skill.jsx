import React from 'react';

function Skills() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-indigo-400 font-bold mb-8">Professional Skills</h2>
        <p className="text-lg text-gray-300 mb-12">
          Some of the technical skills I've honed over time. Constant learning is key to growth!
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center">
        
        
          <div className="space-y-8 md:w-2/3">
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300">HTML</span>
              <span className="text-sm text-gray-400">90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '90%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300">CSS</span>
              <span className="text-sm text-gray-400">85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300">JavaScript</span>
              <span className="text-sm text-gray-400">80%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300">React</span>
              <span className="text-sm text-gray-400">75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300">Node.js</span>
              <span className="text-sm text-gray-400">70%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/3">
            <img
              src="https://educationviewindia.com/wp-content/uploads/2024/09/Untitled-design-8.jpg"
              alt="Person working on a laptop"
              className="w-full h-120 rounded-xl rounded-xl  pl-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
