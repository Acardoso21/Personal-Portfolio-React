import React from 'react';
import { Typed } from 'react-typed'; // Named import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';

// Import components
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';  // Create this if it doesn't exist
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header should be visible on all pages */}
        <Header />

        {/* Main content area where routes will be rendered */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
