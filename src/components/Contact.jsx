import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';
import swal from 'sweetalert';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      swal("Oops!", "All fields are required.", "warning");
      return;
    }
    const details = { name, email, message };
    localStorage.setItem(email, JSON.stringify(details));
    swal("Sent!", "Message received successfully!", "success");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <section className="bg-[#050505] text-white py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in touch<span className="text-indigo-500">.</span></h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's talk about it.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h4 className="text-indigo-500 font-semibold uppercase tracking-widest text-sm mb-2">Email me</h4>
                <a href="mailto:sayandrajsr@gmail.com" className="text-2xl hover:text-indigo-400 transition-colors">
                  sayandrajsr@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-indigo-500 font-semibold uppercase tracking-widest text-sm mb-2">WhatsApp</h4>
                <a href="https://wa.me/919947521948" target="_blank" rel="noreferrer" className="text-2xl hover:text-green-400 transition-colors">
                  +91 99475 21948
                </a>
              </div>
            </div>

            <div className="flex space-x-6 mt-12 md:mt-0">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com/in/sayand-raj-s-r" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"><FaLinkedin size={20} /></a>
              <a href="https://github.com/sayand-raj-sr" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"><FaGithub size={20} /></a>
              <a href="https://wa.me/919947521948" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          <form onSubmit={formsubmit} className="space-y-6">
            <div className="border-b border-gray-800 focus-within:border-indigo-500 transition-colors py-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-gray-600"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="border-b border-gray-800 focus-within:border-indigo-500 transition-colors py-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-gray-600"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="border-b border-gray-800 focus-within:border-indigo-500 transition-colors py-2">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-gray-600 resize-none"
                onChange={e => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-10 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20 opacity-50">
        <Footer />
      </div>
    </section>
  );
}

export default Contact;