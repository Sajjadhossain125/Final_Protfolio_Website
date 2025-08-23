import React, { useEffect, useRef, useState } from 'react';

const LearningOrganizations = () => {
  const starsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Generate random stars with enhanced effects
    const generateStars = () => {
      if (!starsRef.current) return;
      
      const starsContainer = starsRef.current;
      const starCount = 60;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Random size (smaller, more subtle)
        const size = Math.random() < 0.8 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 1;
        
        // Random animation delay
        const delay = Math.random() * 6;
        
        // Cohesive color variations matching the theme
        const colorVariations = ['#fbbf24', '#f59e0b', '#d97706', '#ffffff', '#e5e7eb'];
        const color = colorVariations[Math.floor(Math.random() * colorVariations.length)];
        
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.animationDelay = `${delay}s`;
        
        // Add shooting star effect to fewer stars
        if (Math.random() < 0.05) {
          star.classList.add('shooting-star');
        }
        
        starsContainer.appendChild(star);
      }
    };

    generateStars();

    // Add floating particles
    const generateParticles = () => {
      if (!starsRef.current) return;
      
      const particleCount = 8;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const left = Math.random() * 100;
        const size = Math.random() * 4 + 1;
        const delay = Math.random() * 15;
        const duration = Math.random() * 25 + 20;
        
        particle.style.left = `${left}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        starsRef.current.appendChild(particle);
      }
    };

    generateParticles();
  }, []);

  // Updated logo data with cohesive hover colors matching the theme
  const logosRow1 = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/2560px-FreeCodeCamp_logo.svg.png", alt: "freeCodeCamp", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademylogo.png", alt: "Codecademy", hoverColor: "from-gray-600/20 to-gray-800/30" },
    { src: "https://freelogopng.com/images/all_img/1681142315open-ai-logo.png", alt: "OpenAI", hoverColor: "from-yellow-400/20 to-gray-700/30" },
    { src: "https://www.skillfinder.com.au/media/wysiwyg/udemylogo.png", alt: "Udemy", hoverColor: "from-yellow-500/20 to-yellow-700/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/1024px-DeepSeek_logo.svg.png", alt: "DeepSeek", hoverColor: "from-gray-700/20 to-gray-900/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png", alt: "Google", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png", alt: "Meta", hoverColor: "from-gray-600/20 to-gray-800/30" },
    // Duplicated for infinite loop
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/2560px-FreeCodeCamp_logo.svg.png", alt: "freeCodeCamp", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademylogo.png", alt: "Codecademy", hoverColor: "from-gray-600/20 to-gray-800/30" },
    { src: "https://freelogopng.com/images/all_img/1681142315open-ai-logo.png", alt: "OpenAI", hoverColor: "from-yellow-400/20 to-gray-700/30" },
    { src: "https://e7.pngegg.com/pngimages/78/799/png-clipart-react-redux-javascript-library-node-js-facebook-react-blue-text-thumbnail.png", alt: "React", hoverColor: "from-yellow-400/20 to-gray-700/30" },
  ];

  const logosRow2 = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/1024px-DeepSeek_logo.svg.png", alt: "DeepSeek", hoverColor: "from-gray-700/20 to-gray-900/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png", alt: "Google", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png", alt: "Meta", hoverColor: "from-gray-600/20 to-gray-800/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png", alt: "W3Schools", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg", alt: "Stack Overflow", hoverColor: "from-yellow-500/20 to-yellow-700/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/2560px-FreeCodeCamp_logo.svg.png", alt: "freeCodeCamp", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademylogo.png", alt: "Codecademy", hoverColor: "from-gray-600/20 to-gray-800/30" },
    // Duplicated for infinite loop
    { src: "https://www.skillfinder.com.au/media/wysiwyg/udemylogo.png", alt: "Udemy", hoverColor: "from-yellow-500/20 to-yellow-700/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png", alt: "Google", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png", alt: "Meta", hoverColor: "from-gray-600/20 to-gray-800/30" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png", alt: "W3Schools", hoverColor: "from-yellow-400/20 to-yellow-600/30" },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`px-4 sm:px-6 md:px-8 mt-8 rounded-md py-12 border-t border-gray-600/30 backdrop-blur-sm bg-black/20 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Cohesive background effects matching the theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-800/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-400/5 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="stars" ref={starsRef}></div>
      
      {/* Floating geometric shapes with theme colors */}
      <div className="geometric-bg">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
      </div>
      
      <div className="container_infinite max-w-7xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Learning <span className="text-yellow-400">Organizations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 opacity-90">
            🚀 Organizations that helped me master the latest technology tools
          </p>
        </div>
        
        <div className={`divider-container transition-all duration-1000 delay-400 ${isVisible ? 'animate-expand' : 'opacity-0 scale-x-0'}`}>
          <div className="divider w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12 rounded"></div>
        </div>
        
        <div className={`logo-container relative h-48 md:h-52 w-full my-8 overflow-hidden transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="logo-row row-1 absolute flex w-[200%] animate-slide gap-4 md:gap-8 top-0">
            {logosRow1.map((logo, index) => (
              <div 
                key={`row1-${index}`} 
                className={`logo group bg-gray-800/40 backdrop-blur-md border border-gray-600/40 p-4 rounded-xl flex items-center justify-center h-16 min-w-[160px] md:min-w-[180px] transition-all duration-500 cursor-pointer hover:bg-gradient-to-br hover:${logo.hoverColor} hover:shadow-2xl hover:shadow-yellow-400/30 hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:border-yellow-400/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="logo-row row-2 absolute flex w-[200%] animate-slide-reverse gap-4 md:gap-8 bottom-0">
            {logosRow2.map((logo, index) => (
              <div 
                key={`row2-${index}`} 
                className={`logo group bg-gray-800/40 backdrop-blur-md border border-gray-600/40 p-4 rounded-xl flex items-center justify-center h-16 min-w-[160px] md:min-w-[180px] transition-all duration-500 cursor-pointer hover:bg-gradient-to-br hover:${logo.hoverColor} hover:shadow-2xl hover:shadow-yellow-400/30 hover:scale-110 hover:-translate-y-2 hover:-rotate-1 hover:border-yellow-400/50`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced gradient overlays matching theme */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        .container_infinite {
          max-width: 1900px;
          width: 100%;
          text-align: center;
          margin: 0 auto;
        }
        
        /* Smooth animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-down {
          animation: slide-down 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .logo-container {
          position: relative;
          height: 200px;
          width: 100%;
          margin: 2rem 0;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(156, 163, 175, 0.2);
        }
        
        .logo-row {
          position: absolute;
          display: flex;
          width: 200%;
          gap: 1.5rem;
        }
        
        .logo-row.row-1 {
          top: 0;
          animation: slide 30s linear infinite;
        }
        
        .logo-row.row-2 {
          bottom: 0;
          animation: slide-reverse 30s linear infinite;
        }
        
        /* Enhanced pause on hover */
        .logo-container:hover .logo-row {
          animation-play-state: paused;
        }
        
        .logo {
          background: rgba(31, 41, 55, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(156, 163, 175, 0.3);
          padding: 1rem 2rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 70px;
          min-width: 180px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle shimmer effect */
        .logo::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.15), transparent);
          transition: left 0.6s ease-out;
        }
        
        .logo:hover::before {
          left: 100%;
        }
        
        .logo:hover {
          transform: translateY(-8px) scale(1.08);
          box-shadow: 
            0 15px 35px rgba(251, 191, 36, 0.25),
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: rgba(251, 191, 36, 0.4);
          z-index: 10;
          background: rgba(31, 41, 55, 0.8);
        }
        
        .logo img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          z-index: 2;
          position: relative;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        /* Smoother sliding animations */
        @keyframes slide {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        
        @keyframes slide-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        /* Enhanced stars with theme colors */
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        
        .star {
          position: absolute;
          border-radius: 50%;
          animation: twinkle 5s infinite ease-in-out;
          box-shadow: 0 0 8px currentColor;
        }
        
        .shooting-star {
          animation: shooting 4s infinite linear;
          background: linear-gradient(45deg, #fbbf24, #f59e0b) !important;
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1);
          }
          25% { 
            opacity: 0.6; 
            transform: scale(1.1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3);
          }
          75% { 
            opacity: 0.4; 
            transform: scale(1.05);
          }
        }
        
        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(100px) scale(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: translateX(-40px) translateY(40px) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(800px) translateY(-800px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(900px) translateY(-900px) scale(0);
          }
        }
        
        /* Enhanced floating particles */
        .floating-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%);
          border-radius: 50%;
          animation: float-up 25s infinite linear;
          bottom: -10px;
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) translateX(30px) rotate(180deg);
            opacity: 0;
          }
        }
        
        /* Enhanced geometric background shapes */
        .geometric-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .geometric-shape {
          position: absolute;
          border-radius: 20px;
          background: linear-gradient(45deg, rgba(156, 163, 175, 0.08), rgba(75, 85, 99, 0.05));
          backdrop-filter: blur(8px);
          border: 1px solid rgba(156, 163, 175, 0.1);
          animation: geometric-float 25s infinite ease-in-out;
        }
        
        .shape-1 {
          width: 100px;
          height: 100px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
          transform: rotate(45deg);
          background: linear-gradient(45deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));
        }
        
        .shape-2 {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 15%;
          animation-delay: -8s;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(156, 163, 175, 0.08), rgba(75, 85, 99, 0.05));
        }
        
        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 25%;
          left: 20%;
          animation-delay: -15s;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          background: linear-gradient(45deg, rgba(251, 191, 36, 0.08), rgba(245, 158, 11, 0.05));
        }
        
        .shape-4 {
          width: 120px;
          height: 40px;
          top: 35%;
          right: 25%;
          animation-delay: -20s;
          border-radius: 50px;
          background: linear-gradient(45deg, rgba(156, 163, 175, 0.06), rgba(75, 85, 99, 0.03));
        }
        
        @keyframes geometric-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(45deg) scale(1.05);
          }
          50% {
            transform: translateY(-8px) rotate(90deg) scale(0.95);
          }
          75% {
            transform: translateY(-20px) rotate(135deg) scale(1.02);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo {
            min-width: 140px;
            height: 60px;
            padding: 0.75rem 1.5rem;
          }
          
          .logo-container {
            height: 160px;
          }
          
          .geometric-shape {
            transform: scale(0.7);
          }
          
          .star {
            transform: scale(0.8);
          }
        }
        
        /* Enhanced hover effects for container */
        .logo-container:hover {
          transform: scale(1.01);
          filter: brightness(1.05);
        }
        
        /* Smooth transitions for visibility */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Additional glow effects */
        .logo:hover {
          position: relative;
        }
        
        .logo:hover::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(45deg, rgba(251, 191, 36, 0.3), transparent, rgba(251, 191, 36, 0.3));
          z-index: -1;
          animation: rotate-glow 3s linear infinite;
        }
        
        @keyframes rotate-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default LearningOrganizations;