import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 border-t border-gray-800 mt-16 h-30">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">


                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white">SAYAND RAJ S R</h2>

                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>

                    <div className="flex items-center gap-2 text-blue-400">
                        <FaPhone />
                        <a href="tel:+916282972147" className="hover:text-white">
                            +91 9947347048
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-blue-400">
                        <FaEnvelope />
                        <a href="mailto:rakurakesh396@gmail.com" className="hover:text-white">
                            sayandrajsr@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex justify-center gap-8 text-sm">
                    <a href="/about" className="text-blue-400 hover:text-white transition">About</a>
                    <a href="/projects" className="text-blue-400 hover:text-white transition">Projects</a>
                    <a href="/contact" className="text-blue-400 hover:text-white transition">Contact</a>
                </div>


                <div className="flex justify-center md:justify-end gap-6 text-xl text-blue-400">
                    <a href="https://github.com/sayand-raj-sr" target="_blank" className="hover:text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sayand-raj-s-r" target="_blank" className="hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/sayandraj" target="_blank" className="hover:text-white">
                        <FaInstagram />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;

