import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap p-3 bg-indigo-800  ">
      <a href="/" className="inline-flex items-center p-2 mr-4 ">
        <span className="text-xl text-white font-bold tracking-wide">
          Mi contrato
        </span>
      </a>
      <button
        className=" inline-flex p-3 rounded lg:hidden text-white ml-auto outline-none hover:bg-carolinaBlue "
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <NavLink
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center buttonsNavBar hover:text-white "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center buttonsNavBar hover:text-white "
            to="/usuarios"
          >
            Usuarios
          </NavLink>

          <NavLink
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center buttonsNavBar hover:text-white "
            to="/preguntas"
          >
            Preguntas
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
