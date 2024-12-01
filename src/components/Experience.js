import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "IEEE Bombay Section",
      duration: "2 Months",
      description:
        "Worked on building and maintaining web applications, enhancing performance, and ensuring scalability.",
    },
    {
      role: "Security Analyst & Frontend Developer",
      company: "Meta Craft Lab",
      duration: "1 Month",
      description:
        "Conducted security analysis and developed user-friendly frontend interfaces to improve user experience.",
    },
  ];

  return (
    <section id="experience" className="p-10 md:p-20 bg-black text-gray-200">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
        Experience
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-gray-800 border-2 border-transparent hover:border-purple-500 transition duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-blue-500 text-2xl mr-4" />
              <h3 className="text-2xl font-bold">{exp.role}</h3>
            </div>
            <p className="text-lg font-semibold text-gray-400">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
