import React from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="p-10 md:p-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Get in Touch
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Whether you have a question, a project, or just want to connect, I’d love to hear from you!
      </p>
      <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-8">
        {/* Name Field */}
        <div className="relative">
          <FaUser className="absolute left-4 top-3.5 text-purple-400 text-lg" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 pl-12 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-3.5 text-green-400 text-lg" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 pl-12 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <FaComment className="absolute left-4 top-3.5 text-indigo-400 text-lg" />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 pl-12 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex justify-center mt-6">
          <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg hover:from-pink-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400">
            <FaPaperPlane className="mr-2 text-xl" />
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
