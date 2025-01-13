import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-0 backdrop-blur-sm z-10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center"> {/* Centered nav */}
            <ul className="flex space-x-8 text-white md:text-2xl">
            {/* HOME (bold if active) */}
            <li>
                <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'font-bold' : 'hover:text-gray-300'
                }
                >
                Home
                </NavLink>
            </li>
            {/* PROJECTS */}
            <li>
                <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive ? 'font-bold' : 'hover:text-gray-300'
                }
                >
                Projects
                </NavLink>
            </li>
            </ul>
        </nav>
    </header>

  );
};

export default Header
