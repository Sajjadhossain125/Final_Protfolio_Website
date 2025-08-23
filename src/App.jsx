// src/App.js
// This is the main component that orchestrates the entire application.
// It now uses react-router-dom for navigation and lazy loading for optimization.

import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Eagerly loaded components (used immediately or globally)
import Header from './components/Common/Header';
import ThreeJsBackground from './components/Background/ThreeJsBackground';

// Lazily loaded components (only loaded when needed)
const HomePage = lazy(() => import('./components/sections/HomePage'));
const Education = lazy(() => import('./page/Education'));
const ProjectPage = lazy(() => import('./page/ProjectPage'));
const Contact = lazy(() => import('./page/ContactPage'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  // State to control the visibility of the resume modal remains
  const [showResume, setShowResume] = useState(false);
  
  return (
    <div className="min-h-screen w-full text-white font-sans">
      {/* The animated background component is always rendered */}
      <ThreeJsBackground />
      
      {/* The main content container sits on top of the background */}
      <div className="relative z-10">
        {/* Header no longer needs routing props */}
        <Header />
        
        <main className="p-8 md:p-16 lg:px-24">
          {/* Use Suspense to handle lazy-loaded routes */}
          <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

       
      </div>
      
      {/* Lazy loaded resume viewer conditionally */}
      {showResume && (
        <Suspense fallback={<div>Loading resume...</div>}>
          <ResumeViewer setShowResume={setShowResume} />
        </Suspense>
      )}
       {/* Lazy loaded Footer */}
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
