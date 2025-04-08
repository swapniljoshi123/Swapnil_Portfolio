import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faLaptopCode,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", to: "home", icon: faHome, color: "text-red-500" },
    { name: "About", to: "about", icon: faUser, color: "text-yellow-500" },
    { name: "Skills", to: "skills", icon: faLaptopCode, color: "text-green-500" },
    { name: "Projects", to: "projects", icon: faProjectDiagram, color: "text-blue-500" },
    { name: "Contact", to: "contact", icon: faEnvelope, color: "text-purple-500" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-50 bg-gray-100 dark:bg-gray-800 backdrop-blur-lg shadow-lg transition duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          <span className="text-blue-500">My</span>Portfolio
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="text-lg font-medium flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={item.icon} className={`${item.color}`} />
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          <svg
            className={`w-6 h-6 text-gray-800 dark:text-gray-300 transition-transform ${
              menuOpen ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-100 dark:bg-gray-800 backdrop-blur-lg shadow-md rounded-lg space-y-4 py-4 px-6 absolute top-16 right-4 left-4">
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={item.icon} className={`${item.color}`} />
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex justify-center">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;