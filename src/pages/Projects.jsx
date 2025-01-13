// src/pages/Projects.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="pt-24 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* FEATURED PROJECTS (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Monopoly C++ */}
          <Link
            to="/monopoly"  
            className="
              hover:bg-opacity-30 transition 
              flex flex-col items-center
            "
          >
            <img
              src="src/assets/monopoly-preview.png"
              alt="Monopoly C++ Preview"
              className="
                w-full h-full object-cover mb-4 
                rounded 
                hover:scale-105 transition-transform
              "
            />
            <h3 className="text-xl font-semibold">Monopoly C++</h3>
          </Link>

          {/* CODEDOOR */}
          <Link
            to="/codedoor"
            className="
              hover:bg-opacity-00 transition
              flex flex-col items-center
            "
          >
            <img
              src="/src/assets/codedoor-preview.png" 
              alt="CODEDOOR Preview"
              className="
                w-full h-full object-cover mb-4 
                rounded
                hover:scale-105 transition-transform
              "
            />
            <h3 className="text-xl font-semibold">CODEDOOR</h3>
          </Link>
        </div>

        {/* SECONDARY PROJECTS (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* World War */}
          <a
            href="https://github.com/Yazeed69/WorldWar"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:bg-opacity-30 transition
              flex flex-col items-center
            "
          >
            <img
              src="src/assets/world-war-preview.png"
              alt="World War Preview"
              className="
                w-fll h-full object-cover mb-4
                rounded 
                hover:scale-105 transition-transform
              "
            />
            <h4 className="text-lg font-semibold">World War</h4>
          </a>

          {/* Interactive Quiz */}
          {/* <a
            href="https://github.com/yourusername/interactive-quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:bg-opacity-30 transition
              flex flex-col items-center
            "
          >
            <img
              src="src/assets/interactive-quiz-preview.png"
              alt="Interactive Quiz Preview"
              className="
                w-fll h-full object-cover mb-4
                rounded 
                hover:scale-105 transition-transform
              "
            />
            <h4 className="text-lg font-semibold">Interactive Quiz</h4>
          </a> */}

          {/* Solar System */}
          {/* <a
            href="https://github.com/yourusername/solar-system"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:bg-opacity-30 transition
              flex flex-col items-center
            "
          >
            <img
              src="src/assets/solar-system-preview.png"
              alt="Solar System Preview"
              className="
                w-fll h-full object-cover mb-4
                rounded 
                hover:scale-105 transition-transform
              "
            />
            <h4 className="text-lg font-semibold">Solar System</h4>
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
