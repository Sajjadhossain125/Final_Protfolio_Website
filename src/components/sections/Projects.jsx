import React, { useState, useEffect, useRef } from 'react';
import { Github, Youtube, ExternalLink, Code, Zap, Star, Sparkles } from 'lucide-react';

import { Link } from "react-router-dom";

const projects = [
  {
    category: "MERN Stack",
    items: [
      {
        image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
        name: "E-Commerce Website",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        description: "A full-featured online store with cart, payment, and admin panel.",
        github: "#",
        youtube: "#",
        featured: true,
        status: "Live"
      },
      {
        image: "https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg",
        name: "E-Commerce Platform",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        description: "Advanced e-commerce solution with real-time inventory and analytics.",
        github: "#",
        youtube: "#",
        featured: false,
        status: "Development"
      },
    ],
  },
  {
    category: "Django",
    items: [
      {
        image: "https://via.placeholder.com/400x300/1f2937/ffffff?text=Blog+CMS",
        name: "Blog CMS",
        tech: ["Django", "Bootstrap", "SQLite"],
        description: "A powerful blog platform for creating, editing, and managing articles with SEO optimization.",
        github: "#",
        youtube: "#",
        featured: false,
        status: "Live"
      },
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-400/50 relative transform opacity-0 translate-y-10 animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'Live' 
            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
            : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
        }`}>
          <div className={`w-2 h-2 rounded-full inline-block mr-2 ${
            project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400 animate-pulse'
          }`}></div>
          {project.status}
        </div>
      </div>
      
      {/* Image container with enhanced effects */}
      <div className="h-48 overflow-hidden relative">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700/50 to-gray-800/50">
            <div className="text-center">
              <Code className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <span className="text-gray-400 text-sm">Project Preview</span>
            </div>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
        
        {/* Animated overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float-up opacity-70"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 relative">
        {/* Project name with enhanced styling */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
          {project.name}
        </h3>
        
        {/* Tech stack with improved design */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full border border-yellow-500/30 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-yellow-400/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>
        
        {/* Enhanced action buttons */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-700/30">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Repository"
            className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 hover:from-gray-600/60 hover:to-gray-500/60 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600/30 hover:border-gray-500/50"
          >
            <Github className="text-lg group-hover/btn:animate-bounce" />
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href={project.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube Video"
            className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 hover:from-red-600/60 hover:to-red-500/60 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600/30 hover:border-red-500/50"
          >
            <Youtube className="text-lg group-hover/btn:animate-bounce" />
            <span className="font-medium">Demo</span>
          </a>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const ProjectSection = () => {
  const starsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  
  // Trigger animations on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate enhanced stars for background
  useEffect(() => {
    if (!starsRef.current) return;
    
    const starsContainer = starsRef.current;
    const starCount = 80;
    
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 4 + 1;
      const delay = Math.random() * 8;
      const duration = Math.random() * 4 + 3;
      
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8 mt-8 rounded-md py-20 border-t border-gray-600/30 backdrop-blur-sm bg-gradient-to-br from-black/40 via-gray-900/60 to-black/40 relative overflow-hidden">
      {/* Enhanced stars background */}
      <div ref={starsRef} className="stars absolute inset-0 pointer-events-none z-0" />
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400/10 to-yellow-500/15 blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/15 blur-2xl animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl animate-float"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-white relative z-10">
        {/* Enhanced Header Section */}
        <div className={`flex flex-col items-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Animated decorative elements */}
          <div className="flex items-center space-x-4 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-center relative">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 relative">
              Projects
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transform scale-x-0 animate-scale-in"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 text-center mb-8 opacity-90 max-w-2xl leading-relaxed">
            Explore My Work by Tech Stack - Building innovative solutions with modern technologies
          </p>
          
          <div className="flex items-center space-x-2">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <Code className="w-5 h-5 text-yellow-400 animate-bounce" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex space-x-2 bg-gray-800/30 backdrop-blur-sm rounded-full p-2 border border-gray-700/30">
            {projects.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {activeCategory === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 animate-pulse"></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {category.category}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {projects.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`mb-16 transition-all duration-700 ${
              activeCategory === categoryIndex ? 'block' : 'hidden'
            }`}
          >
            {/* Category header with enhanced styling */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-1 bg-gradient-to-r from-transparent to-yellow-400"></div>
                <h3 className="text-3xl font-bold text-white relative">
                  {category.category}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0"></div>
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
            </div>
            
            {/* Mobile: Enhanced Card Grid */}
            <div className="grid grid-cols-1 md:hidden gap-8">
              {category.items.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
            
            {/* Desktop: Enhanced Table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-700/30 bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-sm shadow-xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800/60 to-gray-900/60">
                    <th className="py-6 px-8 text-left text-gray-300 font-bold text-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        Preview
                      </div>
                    </th>
                    <th className="py-6 px-8 text-left text-gray-300 font-bold text-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                        Project Details
                      </div>
                    </th>
                    <th className="py-6 px-8 text-left text-gray-300 font-bold text-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
                        Actions
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((project, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-gray-700/30 last:border-0 hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-600/30 transition-all duration-500 group"
                    >
                      {/* Enhanced Image Cell */}
                      <td className="py-6 px-8">
                        <div className="w-32 h-20 overflow-hidden rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 relative">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              e.target.parentNode.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center rounded-xl"><span class="text-gray-400 text-xs">Preview</span></div>';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </td>
                      
                      {/* Enhanced Name + Tech Cell */}
                      <td className="py-6 px-8">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                            {project.name}
                          </div>
                          {project.featured && (
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full ml-2">
                              <Star className="w-3 h-3 inline mr-1 fill-current" />
                              Featured
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full border border-yellow-500/30 hover:border-yellow-400/50 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {project.description}
                        </p>
                        
                        {/* Status indicator */}
                        <div className="mt-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                              : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400 animate-pulse'
                            }`}></div>
                            {project.status}
                          </span>
                        </div>
                      </td>
                      
                      {/* Enhanced Links Cell */}
                      <td className="py-6 px-8">
                        <div className="flex gap-3">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub Repository"
                            className="group/icon flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 hover:from-gray-600/60 hover:to-gray-500/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600/30 hover:border-gray-500/50"
                          >
                            <Github className="text-lg group-hover/icon:animate-bounce" />
                          </a>
                          <a 
                            href={project.youtube} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="YouTube Video"
                            className="group/icon flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 hover:from-red-600/60 hover:to-red-500/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600/30 hover:border-red-500/50"
                          >
                            <Youtube className="text-lg group-hover/icon:animate-bounce" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-3xl p-8 border border-gray-700/30 relative overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-emerald-400/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                Want to See More?
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover more projects and dive deeper into my development journey. Each project tells a story of innovation and technical excellence.
              </p>
              <Link to='/projects' className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View All Projects
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes float-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-40px) scale(0.5); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.2; transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.05; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.15; transform: scale(1.05) rotate(-180deg); }
        }
        
        @keyframes scale-in {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-up {
          animation: float-up 3s ease-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 10s infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out 2s forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .star {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: twinkle 4s infinite;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(0.8); 
          }
          75% { 
            opacity: 0.9; 
            transform: scale(1.1); 
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;