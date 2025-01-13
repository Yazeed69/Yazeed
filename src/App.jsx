// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages (Under the "main" layout)
import Home from './pages/Home'
import Projects from './pages/Projects'

// Standalone pages (No header, no gradient theme)
import Monopoly from './pages/Monopoly'
import Codedoor from './pages/CODEDOOR'

// Header
import Header from './components/Header'

// Import the theme CSS (the animated gradient + Bebas Neue or IBM Plex Sans)
import './theme.css'

function LayoutWithHeader({ children }) {
  return (
    <div id="main-gradient">
      <Header />
      {children}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main routes using the gradient theme + header */}
        <Route
          path="/"
          element={
            <LayoutWithHeader>
              <Home />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/projects"
          element={
            <LayoutWithHeader>
              <Projects />
            </LayoutWithHeader>
          }
        />

        {/* Monopoly + Codedoor => No LayoutWithHeader => No gradient */}
        <Route path="/monopoly" element={<Monopoly />} />
        <Route path="/codedoor" element={<Codedoor />} />
      </Routes>
    </Router>
  )
}

export default App
