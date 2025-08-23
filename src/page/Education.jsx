import React, { useState, useEffect, useRef } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  // Trigger main section animation after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = entry.target.getAttribute('data-card-index');
            if (cardIndex) {
              setVisibleCards(prev => new Set([...prev, parseInt(cardIndex)]));
            }
          }
        });
      },
      // Trigger when 20% of the card is visible, with a small margin
      { threshold: 0.2, rootMargin: '50px' }
    );

    // Select all cards with the data-card-index attribute and observe them
    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => observer.observe(card));

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  // Data for Academic Education section
  const academicData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Green University of Bangladesh",
      period: "Jun 2020 – May 2025",
      description: "Comprehensive program covering computer science fundamentals, software development, and emerging technologies.",
      achievements: ["CGPA: 3.2/4.0"],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "AKM Rahmatullah College",
      period: "Jan 2019 – Mar 2020",
      description: "Focused on science subjects including Physics, Chemistry, Mathematics, and Computer Science.",
      achievements: ["GPA: 4.0/5.0"],
      icon: "🔬"
    },
    {
      degree: "Secondary School Certificate (SSC) - Science",
      institution: "Adda Umedia High School",
      period: "Jan 2016 – Feb 2017",
      description: "Foundation in science education with emphasis on core scientific principles and mathematics.",
      achievements: ["GPA: 3.64/5.0"],
      icon: "📚"
    }
  ];

  // Data for Professional Development section
  const professionalData = [
    {
      title: "Google Bard Generative AI Masterclass",
      issuer: "Udemy",
      period: "2024",
      type: "Online Course",
      description: "Comprehensive certification course on Google Bard and generative AI technologies.",
      icon: "🤖"
    },
    {
      title: "Master Git and GitHub",
      issuer: "Udemy",
      period: "2024",
      type: "Online Course",
      description: "Beginner to expert level course on version control with Git and GitHub.",
      icon: "📝"
    },
    {
      title: "ReactJs: The Complete Reactjs Course",
      issuer: "Udemy",
      period: "2023",
      type: "Online Course",
      description: "In-depth course covering all aspects of React.js development.",
      icon: "⚛️"
    },
    {
      title: "Python: Introduction to Python Programming",
      issuer: "Bohubrihi",
      period: "2023",
      type: "Online Course",
      description: "Foundational course on Python programming language.",
      icon: "🐍"
    },
    {
      title: "Flutter Development Certificate",
      issuer: "Influxdev",
      period: "2023",
      type: "Certificate Program",
      description: "Complete Flutter development course with certification.",
      icon: "📱"
    },
    {
      title: "Python (Django) Training",
      issuer: "Institute of Information Technology (IIT), Jahangirnagar University",
      period: "2023",
      type: "Professional Training",
      description: "Specialized training conducted under the EDGE Project of Bangladesh Computer Council, ICT Division.",
      icon: "🌐"
    },
    {
      title: "National Skills Certificate on Web Design and Development",
      issuer: "National Skills Development Authority (NSDA)",
      period: "2022",
      type: "Professional Certification",
      description: "Level-3 certification in Web Design and Development for Freelancing.",
      icon: "🏆"
    },
    {
      title: "Best Project Award",
      issuer: "Green University of Bangladesh",
      period: "2023",
      type: "Academic Award",
      description: "Awarded for the development of the 'Online Medical Shaba' Web Application in Integrated Design Project II.",
      icon: "🥇"
    }
  ];

  return (
    <section ref={sectionRef} className="relative px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden mt-6 sm:mt-8 md:mt-10 rounded-xl sm:rounded-2xl">
      {/* Enhanced glassmorphism background */}
      <div className="absolute inset-0 border  sm:rounded-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmMDUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-10 sm:opacity-20"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 animate-gradient-x"></div>
      </div>

      {/* Mobile-optimized floating elements (hidden on small screens, appear on larger ones) */}
      <div className="hidden sm:block absolute top-10 left-5 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 blur-xl animate-float-slow" aria-hidden="true"></div>
      <div className="hidden md:block absolute top-40 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-gray-300/10 to-white/5 blur-lg animate-float-reverse" aria-hidden="true"></div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400/15 to-transparent blur-2xl animate-pulse-custom" aria-hidden="true"></div>
      <div className="hidden xl:block absolute bottom-10 right-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-white/5 to-gray-300/10 blur-2xl animate-float-slow-delayed" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Mobile-optimized Header */}
        <div className={`flex flex-col items-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1200 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="relative mb-6 sm:mb-8">
            <div className="w-1.5 sm:w-2 h-8 sm:h-12 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full shadow-lg shadow-yellow-400/30"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-yellow-400 animate-ping"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent px-4">
            Education & Development
          </h2>

          <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl px-4">
            My academic foundation and continuous learning journey in technology
          </p>

          <div className="relative">
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            <div className="absolute inset-0 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Mobile-optimized Academic Education Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className={`flex items-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mr-4 sm:mr-6 shadow-lg shadow-yellow-400/30 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="absolute inset-0 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Academic Education
              </h3>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mt-1 sm:mt-2"></div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {academicData.map((edu, index) => (
              <div
                key={index}
                data-card-index={index}
                className={`relative group transition-all duration-1000 transform ${
                  visibleCards.has(index) || isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Mobile-optimized timeline */}
                <div className="hidden sm:block absolute left-6 md:left-8 top-12 md:top-16 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent"></div>
                <div className="hidden sm:block absolute left-4 md:left-6 top-6 md:top-8 w-4 md:w-5 h-4 md:h-5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 border-3 md:border-4 border-gray-900 shadow-lg shadow-yellow-400/30 animate-pulse-subtle"></div>

                <div className="sm:pl-16 md:pl-20 pr-2 sm:pr-4">
                  <div className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-700/40 p-4 sm:p-6 md:p-8 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10">
                    {/* Mobile hover glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Mobile-optimized content */}
                    <div className="relative z-10">
                      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-700/50 flex-shrink-0">
                            {edu.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center text-gray-300 mb-2 text-sm sm:text-base">
                              <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                              </svg>
                              <span className="truncate">{edu.institution}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 self-start sm:self-auto">
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-yellow-300 font-semibold text-xs sm:text-sm whitespace-nowrap">{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{edu.description}</p>

                      <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600/30">
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Academic Performance
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 mr-2 sm:mr-3 animate-pulse-subtle flex-shrink-0"></div>
                              <span className="text-gray-300 font-medium text-sm sm:text-base">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Professional Development Section */}
        <div>
          <div className={`flex items-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-300 to-white flex items-center justify-center mr-6 shadow-lg shadow-gray-300/20 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-300 to-white blur-lg opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Professional Development
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent mt-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {professionalData.map((item, index) => (
              <div
                key={index}
                data-card-index={index + academicData.length} // Ensure unique index across all cards
                className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/40 p-6 hover:border-yellow-400/40 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 ${
                  visibleCards.has(index + academicData.length) || isVisible
                    ? 'opacity-100 translate-y-0 rotate-0'
                    : 'opacity-0 translate-y-8 rotate-1'
                }`}
                style={{ transitionDelay: `${(index + academicData.length) * 150}ms` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-2 border border-gray-700/50">
                      {item.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium transition-colors duration-300 ${
                      item.type === 'Academic Award'
                        ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 text-yellow-300 border border-yellow-400/30'
                        : item.type === 'Professional Certification' || item.type === 'Professional Training'
                        ? 'bg-gradient-to-r from-gray-300/20 to-white/10 text-gray-300 border border-gray-400/30'
                        : 'bg-gradient-to-r from-gray-700/40 to-gray-600/40 text-gray-400 border border-gray-600/30'
                    }`}>
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h4>

                  <div className="flex items-center mb-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      <span className="font-medium">{item.issuer}</span>
                    </div>
                    <span className="mx-3 text-gray-600">•</span>
                    <div className="flex items-center text-yellow-400 font-semibold">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {item.period}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent group-hover:via-yellow-400/60 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-optimized Animation Styles */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.08; }
          25% { transform: translateY(-8px) rotate(0.5deg); opacity: 0.15; }
          50% { transform: translateY(-15px) rotate(0deg); opacity: 0.12; }
          75% { transform: translateY(-8px) rotate(-0.5deg); opacity: 0.18; }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.06; }
          25% { transform: translateY(10px) rotate(-0.5deg); opacity: 0.12; }
          50% { transform: translateY(20px) rotate(0deg); opacity: 0.09; }
          75% { transform: translateY(10px) rotate(0.5deg); opacity: 0.15; }
        }

        @keyframes pulse-custom {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          33% { opacity: 0.12; transform: scale(1.05); }
          66% { opacity: 0.08; transform: scale(0.95); }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 25px rgba(251, 191, 36, 0.4);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 14s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow 14s ease-in-out infinite;
          animation-delay: 5s;
        }

        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse-custom 8s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }

        /* Mobile performance optimizations */
        @media (max-width: 640px) {
          .animate-float-slow,
          .animate-float-reverse,
          .animate-pulse-custom,
          .animate-float-slow-delayed {
            animation-duration: 20s;
          }

          .group:hover {
            transform: scale(1.02) !important;
          }
        }

        /* Smooth scroll behavior */
        * {
          scroll-behavior: smooth;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-x,
          .animate-float-slow,
          .animate-float-reverse,
          .animate-pulse-custom,
          .animate-float-slow-delayed,
          .animate-pulse-subtle {
            animation: none;
          }

          .group:hover {
            transform: none !important;
          }
        }

        /* Enhanced mobile touch targets */
        @media (max-width: 640px) {
          .group {
            min-height: 120px;
            touch-action: manipulation;
          }
        }

        /* Prevent horizontal scroll */
        .overflow-hidden {
          overflow-x: hidden;
        }

        /* Text overflow handling */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default Education;
