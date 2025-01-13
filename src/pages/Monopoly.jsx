// src/pages/Monopoly.jsx
import React from 'react'
import { Link } from 'react-router-dom'

import monopolyBg from '../assets/monopoly-bg.png'   // A grayscale Monopoly mascot image
import monopolyCli from '../assets/monopoly-cli.png' // The CLI screenshot

function Monopoly() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        /* Faded grayscale Monopoly background with white overlay */
        background: `url(${monopolyBg}) center center / cover no-repeat`,
        backgroundColor: 'rgba(255,255,255,0.1)', 
        backgroundBlendMode: 'darken',
      }}
    >
      {/* --- NAVIGATION BAR --- */}
      <header className="flex items-center justify-left px-8 py-4 bg-black bg-opacity-0">
        <nav>
          <ul className="flex space-x-8 md:text-2xl">
            <li>
              {/* or if you prefer going back to Projects */}
              <Link 
                to="/projects" 
                className="text-pink-500 font-bold hover:text-pink-400"
              >
                Back
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16 text-gray-800">
        {/* --- TITLE --- */}
        <h1 className="text-5xl md:text-6xl font-bold uppercase text-center mb-32">
          MONOPOLY C++
        </h1>

        {/* Grid: Left = Description, Right = CLI Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* --- LEFT: PROJECT DESCRIPTION --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <p className="leading-relaxed mb-6 text-lg">
              <strong>Monopoly C++</strong> is a command-line (CLI) adaptation of the
              classic Monopoly board game, built using object-oriented programming
              (OOP) principles in C++. Players roll dice, move around the board,
              buy and manage properties, and handle in-game transactions through a
              straightforward text-based interface.
            </p>
            <p className="leading-relaxed text-lg">
              This project demonstrates modular, structured code design,
              showcasing how classes and inheritance can replicate core
              Monopoly mechanics such as rent, mortgages, and trading. By
              leveraging a CLI approach, <strong>Monopoly C++</strong> highlights
              efficient memory usage, clear separation of logic, and a focus on
              problem-solving rather than complex graphics.
            </p>
          </div>

          {/* --- RIGHT: CLI SCREENSHOT --- */}
          <div className="flex flex-col items-center">
            <img
              src={monopolyCli}
              alt="Monopoly C++ CLI Screenshot"
              className="w-full object-cover hover:scale-105 transition-transform border border-gray-300"
            />
            <span className="mt-2 text-lg font-semibold text-gray-700 text-center">
              Command Line UI
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Monopoly
