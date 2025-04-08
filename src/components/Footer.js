import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing React Icons

function Footer() {
  return (
    <footer className="bg-black text-gray-200 p-8 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="text-center text-gray-400 text-sm">
          &copy; 2024 <span className="font-semibold">MyPortfolio</span>. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com"
            className="text-gray-400 hover:text-blue-500 transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          
          {/* GitHub Icon */}
          <a
            href="https://www.github.com"
            className="text-gray-400 hover:text-green-500 transition duration-300 flex items-center space-x-2"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          
          {/* Email Icon */}
          <a
            href="mailto:example@mail.com"
            className="text-gray-400 hover:text-red-500 transition duration-300 flex items-center space-x-2"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
