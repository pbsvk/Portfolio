import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../App.css";

const NavBar = ({ theme, toggleTheme }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
      offset: -50,
    },
    {
      id: 3,
      link: "education",
      offset: -150,
    },
    {
      id: 4,
      link: "experience",
      offset: -150,
    },
    {
      id: 5,
      link: "Projects",
      offset: -150,
    },
    {
      id: 6,
      link: "contact",
      offset: -150,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center w-full h-20 px-4 bg-transparent z-50">
      <button
  onClick={toggleTheme}
  className="text-gray dark:text-white bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 mr-4 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
>
  {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
</button>

      <ul className="degree-name text-gray hidden md:flex">
        {links.map(({ id, link, offset }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray relative after:bg-gray after:absolute after:h-1 after:w-0 after:bottom-0 after:left-4 hover:after:w-3/4 after:transition-all after:duration-700"
          >
            <Link
              to={link}
              smooth
              duration={500}
              offset={offset}
              className="block py-2"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-gray via-gray to-gray text-gray z-40"
        >
          {links.map(({ id, link, offset }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={offset}
                className="block"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
