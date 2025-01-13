// src/pages/CODEDOOR.jsx
import React from 'react'
import { Link } from 'react-router-dom'

// Example blurred background image (dark in-game scene):
import codedoorBg from '../assets/codedoor-bg.png'

// Example screenshot images:
import screenshot1 from '../assets/codedoor-1.png'
import screenshot2 from '../assets/codedoor-2.png'
import screenshot3 from '../assets/codedoor-3.png'
import screenshot4 from '../assets/codedoor-4.png'


import steamLogo from '../assets/steam-logo.svg'
import itchLogo from '../assets/itchio-logo.svg'

function CODEDOOR() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        /* Dark blurred background using the codedoorBg image */
        background: `url(${codedoorBg}) center center / cover no-repeat`,
        backgroundColor: 'rgba(0,0,0,0.7)',   // Dark overlay
        backgroundBlendMode: 'darken',        // Mix the overlay with the image
      }}
    >
      {/* --- NAVIGATION BAR (TOP SECTION) --- */}
      <header className="flex items-center justify-left px-8 py-4 bg-black bg-opacity-0">
        {/* Left side: brand or empty */}
        <div></div>
        {/* Right side: nav links */}
        <nav>
          <ul className="flex space-x-8 md:text-2xl">
            <li>
              <Link
                to="/projects"
                className="text-pink-400 font-bold hover:text-pink-300"
              >
                Back
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        {/* --- TITLE SECTION (HEADER) --- */}
        <h1 className="text-5xl md:text-6xl font-bold uppercase text-center mb-32">
          CODEDOOR
        </h1>

        {/* Grid: Left side = Description, Right side = Screenshot Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* --- LEFT: GAME DESCRIPTION --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Game Description</h2>
            <p className="leading-relaxed mb-6 text-lg">
              <strong>CODEDOOR</strong> is a post-apocalyptic survival and puzzle game
              built with Unreal Engine 5. Players must solve random container codes, 
              fend off zombies, and manage scarce ammo to survive. Reach Wave 10 or 30 kills 
              to witness the nuclear ending. Strategic puzzle-solving meets intense combat 
              in a world where every bullet counts.
            </p>
            <p className="leading-relaxed mb-6 text-lg">
              <strong>Key Mechanics:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Procedurally generated container codes</li>
                <li>Fast-paced gunplay vs. relentless zombie AI</li>
                <li>Resource management for ammo & health</li>
                <li>Nuclear ending triggers at kill thresholds</li>
              </ul>
            </p>
            <p className="leading-relaxed text-lg">
              Will you crack the code and escape, or face an undead horde?
            </p>
          </div>

          {/* --- RIGHT: SCREENSHOT GALLERY --- */}
          <div className="grid grid-cols-2 gap-2">
                    <img
                    src={screenshot1}
                    alt="CODEDOOR Screenshot 1"
                    className="w-fill h-128 object-cover rounded shadow-md hover:scale-105 transition-transform"
                    />
                    <img
                    src={screenshot2}
                    alt="CODEDOOR Screenshot 2"
                    className="w-fill h-128 object-cover rounded shadow-md hover:scale-105 transition-transform"
                    />
                    <img
                    src={screenshot3}
                    alt="CODEDOOR Screenshot 3"
                    className="w-fill h-128 object-cover rounded shadow-md hover:scale-105 transition-transform"
                    />
                    <img
                    src={screenshot4}
                    alt="CODEDOOR Screenshot 4"
                    className="w-fill h-128 object-cover rounded shadow-md hover:scale-105 transition-transform"
                    />
            </div>
        </div>

        {/* --- DOWNLOAD BUTTONS (BOTTOM SECTION) --- */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 space-y-4 md:space-y-0 md:space-x-6">
          {/* Steam button */}
          <a
            href="https://store.steampowered.com/app/CODEDOOR"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              bg-black text-white
              px-6 py-3
              rounded-lg shadow
              hover:bg-gray-900
              transition
            "
          >
            {/* Steam Logo */}
            <img
              src={steamLogo}
              alt="Steam Logo"
              className="w-6 h-6 mr-2"
            />
            Steam
          </a>

          {/* Itch.io button */}
          <a
            href="https://itch.io/codedoor"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              bg-red-600 text-white
              px-6 py-3
              rounded-lg shadow
              hover:bg-red-700
              transition
            "
          >
            {/* Itch.io Logo */}
            <img
              src={itchLogo}
              alt="Itch.io Logo"
              className="w-6 h-6 mr-2"
            />
            Itch.io
          </a>
        </div>
      </div>
    </div>
  )
}

export default CODEDOOR
