// src/pages/Home.jsx
import React from 'react'
import profileImage from '../assets/profile.jpg' // Ensure this path matches your actual file

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="pt-64 flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-16">
        
        {/* LEFT SIDE: Text */}
        <div className="text-center md:text-left md:mr-16">
          <h1 className="text-6xl font-bold mb-4">
            Hello, I’m Yazeed
          </h1>
          <p className="text-xl md:text-3xl md:text-center">Game Developer &</p>
          <p className="text-xl md:text-4xl md:text-center">Data Science Student</p>
        </div>

        {/* RIGHT SIDE: Profile Image */}
        <div className="mt-8 md:mt-0">
          <img
            src={profileImage}
            alt="Yazeed's profile"
            className="w-128 h-128 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Connect with Me Section */}
      <div className="mt-16 flex flex-col items-center text-white px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
        <ul className="space-y-2 text-xl">
          <li>
            <a
              href="mailto:me@yazeed.ca"
              className="underline hover:text-gray-300"
            >
              me@yazeed.ca
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yazeedalfaris"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf" // or wherever your résumé is hosted
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
