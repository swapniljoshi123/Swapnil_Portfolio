import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative p-10 md:p-20 bg-black text-gray-200"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-700 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
          I'm a passionate developer with expertise in{" "}
          <span className="font-semibold text-indigo-400">React</span>,{" "}
          <span className="font-semibold text-teal-400">Tailwind CSS</span>,{" "}
          and advanced skills in{" "}
          <span className="font-semibold text-green-400">Django</span>,{" "}
          <span className="font-semibold text-red-400">
            Penetration Testing
          </span>, and{" "}
          <span className="font-semibold text-purple-400">AI/ML</span>. I aim to
          deliver impactful digital experiences by exploring cutting-edge
          technologies and crafting elegant solutions.
        </p>
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
