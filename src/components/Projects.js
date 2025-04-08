import React from "react";
import { FaBrain, FaChartLine, FaLock } from "react-icons/fa";

const projects = [
  {
    title: "Mental Health Analysis",
    description:
      "A comprehensive system analyzing mental health using multimodal data: audio, video, text, and questionnaire inputs.",
    icon: <FaBrain className="text-purple-400 text-5xl" />,
    link: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "Developed for financial budgeting and future academic institute predictions using robust data handling techniques.",
    icon: <FaChartLine className="text-green-400 text-5xl" />,
    link: "#",
  },
  {
    title: "Text Encryption and Decryption",
    description:
      "A secure system employing AES and DES algorithms for encrypting and decrypting sensitive information.",
    icon: <FaLock className="text-red-400 text-5xl" />,
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="p-10 md:p-20 bg-black text-gray-200">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-white text-center">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 text-center">
              {project.description}
            </p>
            <div className="text-center">
              <a
                href={project.link}
                className="text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
