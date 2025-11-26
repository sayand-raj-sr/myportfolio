import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';
import swal from 'sweetalert';



function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const formsubmit = (e) => {
    e.preventDefault()
    if (name == "" || email == "" || message == "") {
      swal("Error", "Please fill the form", "error");
    }
    else {
      const details = {
        name: name,
        email: email,
        message: message
      }

      localStorage.setItem(email, JSON.stringify(details))

      swal("Good job!", "message send successfully", "success");
       
      setEmail("")
      setMessage("")
      setName("")
    }
  }
  return (

    <section className="bg-[#050505] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-indigo-400 font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
        <form className="space-y-6" onSubmit={formsubmit}>


          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="w-full md:w-1/2">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                onChange={e => setName(e.target.value)}  value={name||""}/>
            </div>
            <div className="w-full md:w-1/2 ">
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                onChange={e => setEmail(e.target.value)} value={email||""} />
            </div>
          </div>

          <div>
            <textarea placeholder="Your Message" rows="6" className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              onChange={e => setMessage(e.target.value)} value={message||""}></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit"
              className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-3 px-8 rounded-lg shadow-xl hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>


      <div className="flex justify-center space-x-6 mt-12">


        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-indigo-300 hover:text-indigo-500 transition duration-300" />
        </a>


        <a
          href="https://linkedin.com/in/sayand-raj-s-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-indigo-300 hover:text-indigo-500 transition duration-300" />
        </a>


        <a
          href="https://github.com/sayand-raj-sr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="text-indigo-300 hover:text-indigo-500 transition duration-300" />
        </a>


        <a
          href="https://wa.me/919947521948"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-indigo-300 hover:text-indigo-500 transition duration-300" />
        </a>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
