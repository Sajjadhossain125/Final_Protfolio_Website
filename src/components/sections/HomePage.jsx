// src/components/sections/HomePage.js
import React, { useState, useEffect } from 'react';
import SkillBar from '../Common/SkillBar';
import About from './About';
import Skills from './Skills';
import LearningOrganizations from './LearningOutcome';
import ProjectSection from './Projects';
import CertificationSection from './CertificationSection';
import MERNIcon from "../../assets/icons/MERN.png"
// Add these imports for other icons
import AIIcon from "../../assets/icons/chip.png" // Add your AI icon
import WebAppIcon from "../../assets/icons/web.png" // Add your web app icon
import DjangoIcon from "../../assets/icons/api.png" // Add your Django icon
import ProfileImage from "../../assets/CEO.png"

// Updated AnimatedPill component to handle both images and text
const AnimatedPill = ({ icon, text, position, animationDelay, rotation }) => {
    return (
        <div
            className={`hidden xl:flex absolute bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-600/40 rounded-2xl shadow-2xl items-center px-6 py-3 ${position} hover:scale-105 transition-all duration-300`}
            style={{
                '--rotation': rotation,
                animation: `float 8s ease-in-out infinite`,
                animationDelay: animationDelay,
            }}
        >
            {/* Icon container */}
            <div className="mr-3 flex-shrink-0">
                {typeof icon === 'string' ? (
                    <img 
                        src={icon} 
                        alt={text}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            // Fallback to a default icon or emoji if image fails to load
                            e.target.nextSibling.style.display = 'inline';
                        }}
                    />
                ) : (
                    icon
                )}
                {/* Fallback emoji/text (hidden by default) */}
                <span className="hidden text-yellow-400 text-xl">⚙️</span>
            </div>
            <span className="text-gray-200 font-medium">{text}</span>
        </div>
    );
};

// New component for the Resume section
// New component for the Resume section
const ResumeSection = ({ setShowResume }) => {
    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="relative w-full max-w-6xl h-[95vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                {/* Close button */}
                <button
                    onClick={() => setShowResume(false)}
                    className="absolute top-6 right-6 z-20 bg-gray-800/70 text-white p-3 rounded-full hover:bg-yellow-500/80 transition-all duration-300 hover:scale-110"
                    aria-label="Close resume"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {/* Resume header */}
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 border-b border-gray-700/50">
                    <h2 className="text-2xl font-bold text-white text-center">My Resume</h2>
                </div>
                
                {/* PDF viewer with Google Drive link */}
                <div className="w-full h-[calc(95vh-140px)] overflow-auto">
                    <iframe
                        src="https://drive.google.com/file/d/1qk1H4Udm1mkRh4x_cfE08KOh2da0sTJV/preview"
                        className="w-full h-full"
                        title="Resume"
                    />
                </div>
                
                {/* Download button */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1qk1H4Udm1mkRh4x_cfE08KOh2da0sTJV"
                        download="Md_Sajjad_Hossen_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};


const HomePage = ({ setShowResume }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [showResumeModal, setShowResumeModal] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Handle resume button click
    const handleResumeClick = () => {
        setShowResumeModal(true);
        if (setShowResume) {
            setShowResume(true);
        }
    };

    // Handle closing resume modal
    const handleCloseResume = () => {
        setShowResumeModal(false);
        if (setShowResume) {
            setShowResume(false);
        }
    };

    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Hero Section - Full Screen */}
            <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="order-2 lg:order-1 space-y-10 text-center lg:text-left">
                            <div className="space-y-6">
                                <div className="flex items-center justify-center lg:justify-start">
                                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-16 mr-4"></div>
                                    <p className="text-yellow-400 text-lg font-semibold tracking-wider uppercase">Welcome, I'm</p>
                                </div>
                                
                                <div className="relative">
                                    <h1 className={`text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${showAnimation ? 'animate-writing' : ''}`}>
                                        MD Sajjad
                                    </h1>
                                    <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-yellow-400 mt-2">
                                        Hossen
                                    </h1>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-transparent blur-3xl -z-10"></div>
                                </div>
                                
                                <p className="text-gray-300 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl">
                                    Full Stack Developer & <span className="text-yellow-400 font-semibold">AI Enthusiast</span>
                                    <br />
                                    Building Tomorrow's Digital Solutions
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                                    <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-10 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 overflow-hidden">
                                        <span className="relative z-10">Let's Connect</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                    <button
                                        onClick={handleResumeClick}
                                        className="group border-2 border-gray-600 text-white font-bold py-4 px-10 rounded-xl hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">View Resume</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Enhanced Skills Section */}
                            <div className="space-y-8">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
                                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                                        Core Expertise
                                    </span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <SkillBar skill="MERN Stack" level="90%" />
                                    <SkillBar skill="Django & Python" level="85%" />
                                    <SkillBar skill="Frontend Development" level="80%" />
                                    <SkillBar skill="AI & Machine Learning" level="75%" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column - Enhanced Image with Animations */}
                        <div className="order-1 lg:order-2 flex justify-center items-center relative">
                            {/* Updated Animated Decorative Pills with Images */}
                            <AnimatedPill 
                                icon={MERNIcon} 
                                text="MERN Stack" 
                                position="top-8 left-4" 
                                rotation="-12deg" 
                                animationDelay="0s" 
                            />
                            <AnimatedPill 
                                icon={AIIcon} 
                                text="AI Solutions" 
                                position="top-1/3 -right-8" 
                                rotation="15deg" 
                                animationDelay="1.5s" 
                            />
                            <AnimatedPill 
                                icon={WebAppIcon} 
                                text="Web Apps" 
                                position="bottom-1/3 -left-4" 
                                rotation="-8deg" 
                                animationDelay="3s" 
                            />
                            <AnimatedPill 
                                icon={DjangoIcon} 
                                text="Django API" 
                                position="bottom-12 right-8" 
                                rotation="10deg" 
                                animationDelay="4.5s" 
                            />
                            
                            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square flex items-center justify-center">
                                {/* Enhanced Central Image */}
                                <div className="relative z-10 group">
                                    <img
                                        src={ProfileImage}
                                        alt="MD Sajjad Hossen"
                                        className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-yellow-400 shadow-2xl shadow-yellow-500/40 group-hover:shadow-yellow-400/60 transition-all duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/500x500/1f2937/FFFFFF?text=MD+Sajjad+Hossen';
                                        }}
                                    />
                                    
                                    {/* Enhanced Pulse Rings with Different Colors */}
                                    <div className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-ping opacity-30"></div>
                                    <div className="absolute inset-0 border border-yellow-300 rounded-full animate-pulse opacity-50"></div>
                                    <div className="absolute -inset-6 border border-yellow-400/40 rounded-full animate-pulse-slower opacity-60"></div>
                                    <div className="absolute -inset-12 border border-yellow-400/20 rounded-full animate-pulse-slowest opacity-40"></div>
                                    <div className="absolute -inset-16 border border-yellow-400/10 rounded-full animate-pulse-ultra-slow opacity-30"></div>
                                    
                                    {/* Floating Particles */}
                                    <div className="absolute inset-0 overflow-hidden rounded-full">
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
                                        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
                                        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Other Sections */}
            <div className="space-y-24 py-12">
                <About/>
                <Skills/>
                <LearningOrganizations/>
                <ProjectSection/>
                <CertificationSection/>
            </div>
            
            {/* Resume Modal */}
            {showResumeModal && <ResumeSection setShowResume={handleCloseResume} />}
            
            {/* Enhanced Animations */}
            <style jsx>{`
                @keyframes writing {
                    0% { width: 0; }
                    100% { width: 100%; }
                }
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                @keyframes pulse-slowest {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.08); }
                }
                @keyframes pulse-ultra-slow {
                    0%, 100% { opacity: 0.05; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.12); }
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(var(--rotation)) scale(1); }
                    33% { transform: translateY(-15px) rotate(var(--rotation)) scale(1.05); }
                    66% { transform: translateY(-25px) rotate(var(--rotation)) scale(0.95); }
                    100% { transform: translateY(0px) rotate(var(--rotation)) scale(1); }
                }
                .animate-writing {
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    animation: writing 3s steps(30) forwards;
                }
                .animate-pulse-slower {
                    animation: pulse-slower 4s ease-in-out infinite;
                }
                .animate-pulse-slowest {
                    animation: pulse-slowest 6s ease-in-out infinite;
                }
                .animate-pulse-ultra-slow {
                    animation: pulse-ultra-slow 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default HomePage;