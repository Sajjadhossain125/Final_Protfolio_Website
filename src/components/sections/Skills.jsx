// src/components/sections/Skills.js
import React, { useState, useEffect, useRef } from 'react';

// Data for the skills, including learning resources, importance, and side
const skillsData = {
  frontend: [
    { name: 'ReactJS', imgSrc: 'https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png', source: 'https://react.dev/', importance: 'High', side: 'Client' },
    { name: 'JavaScript', imgSrc: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', importance: 'High', side: 'Client' },
    { name: 'HTML & CSS', imgSrc: 'https://dyma.fr/_next/image?url=%2Fimages%2Fformations%2Fhtml-css%2F240x240.png&w=640&q=100', source: 'https://developer.mozilla.org/en-US/docs/Web/HTML', importance: 'High', side: 'Client' },
    { name: 'Flutter', imgSrc: 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png', source: 'https://flutter.dev/', importance: 'Medium', side: 'Client' },
  ],
  backend: [
    { name: 'Python', imgSrc: 'https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png', source: 'https://www.python.org/', importance: 'High', side: 'Server' },
    { name: 'Django', imgSrc: 'https://www.svgrepo.com/show/353657/django-icon.svg', source: 'https://www.djangoproject.com/', importance: 'High', side: 'Server' },
    { name: 'PHP', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', source: 'https://www.php.net/', importance: 'Medium', side: 'Server' },
    { name: 'Java', imgSrc: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png', source: 'https://www.java.com/', importance: 'High', side: 'Server' },
    { name: 'GoLang', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png', source: 'https://go.dev/', importance: 'Medium', side: 'Server' },
    { name: 'C Programming', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png', source: 'https://en.cppreference.com/w/c/language', importance: 'Medium', side: 'Server' },
  ],
  database: [
    { name: 'MySQL', imgSrc: 'https://www.svgrepo.com/show/303251/mysql-logo.svg', source: 'https://www.mysql.com/', importance: 'High', side: 'Database' },
    { name: 'SQLite', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1024px-Sqlite-square-icon.svg.png', source: 'https://www.sqlite.org/index.html', importance: 'Medium', side: 'Database' },
    { name: 'PostgreSQL', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', source: 'https://www.postgresql.org/', importance: 'High', side: 'Database' },
    { name: 'MongoDB', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png', source: 'https://www.mongodb.com/', importance: 'Medium', side: 'Database' },
  ],
};

// Enhanced Mobile Skill Card Component
const MobileSkillCard = ({ name, imgSrc, source, importance, side, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150); // Staggered animation
    
    return () => clearTimeout(timer);
  }, [index]);
  
  // Get importance color
  const getImportanceColor = (level) => {
    switch(level) {
      case 'High': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  // Get side color
  const getSideColor = (side) => {
    switch(side) {
      case 'Client': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Server': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Database': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  return (
    <div 
      className={`group relative p-6 rounded-2xl border border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md mb-6 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
          <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping opacity-50"></div>
        </>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={imgSrc}
              alt={name}
              className="h-16 w-16 object-contain mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/64x64/1f2937/FFFFFF?text=${name.charAt(0)}`;
              }}
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{name}</h4>
            <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getImportanceColor(importance)}`}>
            {importance} Priority
          </span>
          <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getSideColor(side)}`}>
            {side} Side
          </span>
        </div>
        
        <div>
          <a 
            href={source} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group/link inline-flex items-center gap-2 text-base px-4 py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 hover:from-yellow-400/20 hover:to-yellow-500/20 hover:text-yellow-400 hover:scale-105"
          >
            <span>Learn More</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Enhanced Desktop Table Row Component
const SkillTableRow = ({ name, imgSrc, source, importance, side, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 120); // Staggered animation
    
    return () => clearTimeout(timer);
  }, [index]);
  
  // Get importance color
  const getImportanceColor = (level) => {
    switch(level) {
      case 'High': return 'bg-green-500/20 text-green-400 border-green-500/30 shadow-green-500/20';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 shadow-yellow-500/20';
      case 'Low': return 'bg-red-500/20 text-red-400 border-red-500/30 shadow-red-500/20';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  // Get side color
  const getSideColor = (side) => {
    switch(side) {
      case 'Client': return 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-blue-500/20';
      case 'Server': return 'bg-purple-500/20 text-purple-400 border-purple-500/30 shadow-purple-500/20';
      case 'Database': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30 shadow-cyan-500/20';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  return (
    <tr 
      className={`group border-b border-gray-700/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-transparent hover:scale-[1.02] hover:shadow-lg`}
    >
      <td className="py-6 px-6 text-white text-lg font-medium group-hover:text-yellow-400 transition-colors duration-300">
        {name}
        <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
      </td>
      <td className="py-6 px-6">
        <div className="relative">
          <img
            src={imgSrc}
            alt={name}
            className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/64x64/1f2937/FFFFFF?text=${name.charAt(0)}`;
            }}
          />
          <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </td>
      <td className="py-6 px-6">
        <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-110 shadow-lg ${getSideColor(side)}`}>
          {side}
        </span>
      </td>
      <td className="py-6 px-6">
        <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-110 shadow-lg ${getImportanceColor(importance)}`}>
          {importance}
        </span>
      </td>
      <td className="py-6 px-6">
        <a 
          href={source} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group/link inline-flex items-center gap-2 text-base px-4 py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 hover:from-yellow-400/20 hover:to-yellow-500/20 hover:text-yellow-400 hover:scale-105 hover:shadow-lg"
        >
          <span>Learn</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </td>
    </tr>
  );
};

const SkillsCategory = ({ title, icon, skills, categoryIndex }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, categoryIndex * 300); // Staggered animation by category
    
    return () => clearTimeout(timer);
  }, [categoryIndex]);
  
  return (
    <div className={`mb-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div 
        className="flex items-center mb-8 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-1.5 h-10 bg-gradient-to-b from-yellow-400 to-yellow-600 mr-4 transition-all duration-300 group-hover:w-2 group-hover:shadow-lg group-hover:shadow-yellow-400/50"></div>
        <h3 className="text-3xl font-bold text-white flex items-center group-hover:text-yellow-400 transition-colors duration-300">
          <span className={`transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
            {icon}
          </span>
          <span className="ml-3 relative">
            {title}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </span>
        </h3>
      </div>
      
      {/* Mobile view: enhanced cards */}
      <div className="sm:hidden">
        {skills.map((skill, index) => (
          <MobileSkillCard 
            key={skill.name} 
            {...skill} 
            index={index} 
          />
        ))}
      </div>
      
      {/* Desktop view: enhanced table */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl border-2 border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/20 backdrop-blur-md shadow-2xl">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-800/60 to-gray-900/40 backdrop-blur-sm">
              <th className="py-5 px-6 text-left text-gray-300 font-semibold text-lg relative">
                Name
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"></div>
              </th>
              <th className="py-5 px-6 text-left text-gray-300 font-semibold text-lg relative">
                Icon
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"></div>
              </th>
              <th className="py-5 px-6 text-left text-gray-300 font-semibold text-lg relative">
                Side
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"></div>
              </th>
              <th className="py-5 px-6 text-left text-gray-300 font-semibold text-lg relative">
                Importance
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"></div>
              </th>
              <th className="py-5 px-6 text-left text-gray-300 font-semibold text-lg relative">
                Resource
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <SkillTableRow 
                key={skill.name} 
                {...skill} 
                index={index} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="relative px-4 sm:px-6 md:px-8 py-20 overflow-hidden mt-10 rounded-md">
      {/* Enhanced background with moving elements */}
      <div className="absolute inset-0 border-t border-gray-600/30 backdrop-blur-sm bg-gradient-to-br from-black/30 to-gray-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmZmZmMjAiLz4KPC9zdmc+')] opacity-10"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-radial from-yellow-400/5 to-transparent blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-radial from-blue-500/5 to-transparent blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-radial from-purple-500/5 to-transparent blur-3xl animate-pulse-ultra-slow"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-radial from-yellow-400/20 to-transparent blur-xl animate-pulse-slow opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-radial from-blue-500/15 to-transparent blur-xl animate-pulse-slower opacity-50"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-gradient-radial from-purple-500/15 to-transparent blur-xl animate-bounce-slow opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className={`flex flex-col items-center mb-20 transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <div className="relative mb-6">
            <div className="w-1.5 h-16 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg shadow-yellow-400/50"></div>
            <div className="absolute inset-0 w-1.5 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 blur-sm opacity-50"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 relative">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              My Technical Skills
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 blur-xl -z-10"></div>
          </h2>
          
          <div className="relative">
            <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-lg shadow-yellow-400/50"></div>
            <div className="absolute inset-0 w-48 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-sm opacity-50"></div>
          </div>
          
          <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl leading-relaxed">
            Explore my expertise across different domains of software development
          </p>
        </div>
        
        {/* Skills Categories */}
        <SkillsCategory
          title="Frontend Development"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          skills={skillsData.frontend}
          categoryIndex={0}
        />
        
        <SkillsCategory
          title="Backend Development"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
          skills={skillsData.backend}
          categoryIndex={1}
        />
        
        <SkillsCategory
          title="Database & Storage"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
          skills={skillsData.database}
          categoryIndex={2}
        />
      </div>
      
      {/* Enhanced Animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes pulse-ultra-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(3deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-3deg); }
          66% { transform: translate(20px, -20px) rotate(3deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s infinite;
        }
        .animate-pulse-ultra-slow {
          animation: pulse-ultra-slow 12s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 25s infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Glowing effect for interactive elements */
        .glow-on-hover {
          transition: all 0.3s ease;
        }
        .glow-on-hover:hover {
          box-shadow: 0 0 30px rgba(250, 204, 21, 0.3);
        }
        
        /* Shimmer effect for cards */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        
        /* Typing effect for section titles */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(20) forwards;
        }
        
        /* Particle floating animation */
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-10px) translateX(5px) rotate(90deg);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) translateX(-5px) rotate(180deg);
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-10px) translateX(5px) rotate(270deg);
            opacity: 0.8;
          }
        }
        .animate-float-particle {
          animation: float-particle 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;