import React from "react";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center p-20 h-screen bg-black text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="w-72 h-72 bg-indigo-700 opacity-20 rounded-full absolute top-10 left-10 blur-3xl"></div>
        <div className="w-96 h-96 bg-purple-700 opacity-20 rounded-full absolute bottom-10 right-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 italic tracking-wide">
  Hi, I'm Swapnil Joshi
</h1>


<p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium italic">
  I’m a Frontend Developer with expertise in React, Tailwind CSS, Database Development, and Backend Development. I’m also passionate about Penetration Testing and Machine Learning, creating efficient and scalable solutions.
</p>

        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/3 left-10 animate-pulse">
        <svg
          className="w-10 h-10 text-indigo-400 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.341A8 8 0 118.659 4.573"
          />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-bounce">
        <svg
          className="w-10 h-10 text-purple-400 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L15 12.5m-5.25 0L15 8"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
