// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Brand Information */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Passionate Developer & Problem Solver®</h2>
            <p className="text-gray-400 mb-4">
              Building innovative solutions with MERN Stack, Django, and AI technologies.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} Md Sajjad Hossen. All rights reserved.</p>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Get In Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                sajjadkhan1647315@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +880 1624592483
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>House-06/Alignogor/UttorBadda Road<br/>Dhaka-1212, Bangladesh</span>
              </li>
            </ul>
          </div>
          
          {/* Connect & Skills Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end">
            {/* Connect with me */}
            <div className="text-center lg:text-right mb-8 w-full">
              <h3 className="text-lg font-bold mb-3">LET'S BUILD SOMETHING AMAZING!</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <a 
                  href="https://www.sajjadhossen.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors"
                >
                  VIEW PORTFOLIO
                </a>
                <a 
                  href="mailto:sajjadkhan1647315@gmail.com"
                  className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold py-2 px-4 rounded transition-colors"
                >
                  HIRE ME
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="text-center lg:text-right w-full">
              <p className="text-gray-400 mb-3">CONNECT WITH ME</p>
              <div className="flex space-x-6 justify-center lg:justify-end">
                <a 
                  href="https://linkedin.com/sajjadhossen8254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Sajjadhossain125" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://codeforces.com/profile/sajjadhossen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  title="Codeforces"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm7.5 0C12.828 7.5 13.5 8.172 13.5 9v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zm7.5 0C20.328 7.5 21 8.172 21 9v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zM12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"/>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/sajjadhossen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  title="LeetCode"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.824 2.165 8.072 0l2.406-2.354a1.374 1.374 0 0 0-.basilar-2.319 1.373 1.373 0 0 0-.961.438l-2.406 2.354a2.613 2.613 0 0 1-3.693 0l-4.277-4.193a2.978 2.978 0 0 1-.633-.896 2.98 2.98 0 0 1-.184-.66c0-.033-.007-.068-.01-.101a2.718 2.718 0 0 1 .063-1.155 2.718 2.718 0 0 1 .726-1.206l3.854-4.126c.007-.007.014-.014.021-.022l5.79-5.79a3.106 3.106 0 0 1 4.394 0l3.025 3.025a3.106 3.106 0 0 1 0 4.394l-9.351 9.351a1.374 1.374 0 0 0 1.942 1.942L22.249 8.164a5.853 5.853 0 0 0 0-8.279l-3.025-3.025A5.853 5.853 0 0 0 13.483 0z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Current Status */}
            <div className="mt-6 text-center lg:text-right">
              <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for Projects
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Skills Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>MERN Stack Developer</span>
            <span>•</span>
            <span>Django Expert</span>
            <span>•</span>
            <span>AI Enthusiast</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Problem Solver</span>
            <span>•</span>
            <span>Green University Graduate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;