import React from "react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiTestinglibrary } from "react-icons/si";
import { AiFillRobot } from "react-icons/ai";

const skills = [
  { name: "React", icon: <FaReact className="text-purple-400" />, description: "A JavaScript library for building user interfaces." },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, description: "High-level programming language for the web." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, description: "Utility-first CSS framework for rapid UI development." },
  { name: "Django", icon: <SiDjango className="text-green-400" />, description: "A high-level Python framework for web development." },
  { name: "Penetration Testing", icon: <SiTestinglibrary className="text-red-400" />, description: "Skills in identifying and exploiting security vulnerabilities." },
  { name: "AI & ML", icon: <AiFillRobot className="text-purple-400" />, description: "Expertise in Artificial Intelligence and Machine Learning technologies." },
];

function Skills() {
  return (
    <section
      id="skills"
      className="p-10 md:p-20 bg-black text-gray-200"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ name, icon, description }) => (
          <div
            key={name}
            className="p-6 bg-gray-800 rounded-lg shadow-md border-2 border-transparent hover:border-purple-500 hover:bg-gray-700 transition-transform duration-500 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-5xl mb-4 flex justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-sm text-gray-400 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
