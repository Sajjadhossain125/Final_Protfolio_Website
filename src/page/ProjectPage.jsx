import React, { useState, useEffect } from 'react';

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const projects = [
    {
      id: 1,
      name: "Online Medical Sheba",
      description: "A comprehensive healthcare platform with appointment booking, AI chatbot, medicine store, doctor finder, blood bank, and ambulance services.",
      category: "Django",
      technologies: ["Django (Python)", "HTML/CSS", "Bootstrap", "JavaScript", "MySQL"],
      githubLink: "https://github.com/Sajjadhossain125/Online-Medical-Shaba",
      demoLink: "https://youtu.be/afcKd1glXXg",
      images: [
        "https://res.cloudinary.com/dozk4huns/image/upload/fl_preserve_transparency/v1754415103/Home_vpvpiw.jpg?_s=public-apps",
        "https://res.cloudinary.com/dozk4huns/image/upload/fl_preserve_transparency/v1754415102/writepres_wkpq5c.jpg?_s=public-apps",
        "https://res.cloudinary.com/dozk4huns/image/upload/fl_preserve_transparency/v1754415102/store_mve3ws.jpg?_s=public-apps"
      ],
      features: [
        "Appointment booking system",
        "AI-powered chatbot for medical queries",
        "Online medicine store",
        "Doctor finder with specialization filter",
        "Blood bank availability checker",
        "Ambulance service booking",
        "Real-time doctor availability",
        "Hospital search functionality",
        "User-specific dashboards"
      ],
      featured: true,
      status: "Live"
    },
    {
      id: 2,
      name: "Multi Vendor E-Commerce Platform",
      description: "A full-featured multi-vendor e-commerce platform where vendors can register, manage products, and process orders.",
      category: "MERN Stack",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      githubLink: "https://github.com/Sajjadhossain125/Multi-Vendor-E-Commerce",
      demoLink: "https://github.com/Sajjadhossain125/Multi-Vendor-E-Commerce",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/ffffff.png?text=E-Commerce+Homepage",
        "https://via.placeholder.com/800x500/2d2d2d/ffffff.png?text=Product+Listing",
        "https://via.placeholder.com/800x500/404040/ffffff.png?text=Vendor+Dashboard"
      ],
      features: [
        "Multi-vendor registration and management",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure authentication and authorization",
        "Order management system",
        "Admin controls for platform management",
        "Payment processing integration",
        "Vendor performance analytics"
      ],
      featured: true,
      status: "Development"
    },
    {
      id: 3,
      name: "Medicine Recommendation System",
      description: "A machine learning-based system that predicts diseases based on user symptoms and recommends appropriate medicines.",
      category: "Machine Learning",
      technologies: ["Django (Python)", "HTML/CSS", "JavaScript", "SQLite3", "Machine Learning"],
      githubLink: "https://github.com/Sajjadhossain125/Medicine-Recommendation-System",
      demoLink: "https://github.com/Sajjadhossain125/Medicine-Recommendation-System",
      images: [
        "https://via.placeholder.com/800x500/0f172a/ffffff.png?text=Symptom+Checker",
        "https://via.placeholder.com/800x500/1e293b/ffffff.png?text=Disease+Prediction",
        "https://via.placeholder.com/800x500/334155/ffffff.png?text=Medicine+Recommendation"
      ],
      features: [
        "Symptom-based disease prediction",
        "Medicine recommendation engine",
        "User-friendly symptom input interface",
        "Disease information database",
        "Medicine details and dosage information",
        "Prediction accuracy metrics",
        "User history tracking"
      ],
      status: "Completed"
    },
    {
      id: 4,
      name: "Leads Generative AI Agent",
      description: "An AI-powered system that generates and qualifies leads for businesses using advanced natural language processing.",
      category: "AI/ML",
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "React.js", "Node.js"],
      githubLink: "#",
      demoLink: "#",
      images: [
        "https://via.placeholder.com/800x500/7c3aed/ffffff.png?text=AI+Agent+Dashboard",
        "https://via.placeholder.com/800x500/8b5cf6/ffffff.png?text=Lead+Generation",
        "https://via.placeholder.com/800x500/a855f7/ffffff.png?text=Lead+Qualification"
      ],
      features: [
        "Automated lead generation",
        "Lead qualification scoring",
        "Natural language processing for customer interactions",
        "Integration with CRM systems",
        "Performance analytics dashboard",
        "Customizable lead criteria",
        "Real-time lead notifications"
      ],
      status: "Beta"
    },
    {
      id: 5,
      name: "Cybersecurity Course Marketplace",
      description: "A platform for cybersecurity courses with user authentication, course enrollment, and progress tracking.",
      category: "Web Development",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
      githubLink: "#",
      demoLink: "#",
      images: [
        "https://via.placeholder.com/800x500/dc2626/ffffff.png?text=Course+Marketplace",
        "https://via.placeholder.com/800x500/ef4444/ffffff.png?text=Course+Details",
        "https://via.placeholder.com/800x500/f87171/ffffff.png?text=Student+Dashboard"
      ],
      features: [
        "Course catalog with categories",
        "Instructor dashboard",
        "Student enrollment and progress tracking",
        "Secure payment processing",
        "Course content management",
        "Quizzes and assessments",
        "Certificate generation",
        "Discussion forums"
      ],
      status: "Planning"
    },
    {
      id: 6,
      name: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience.",
      category: "React",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
      githubLink: "https://github.com/Sajjadhossain125/portfolio",
      demoLink: "https://sajjadhossen.com",
      images: [
        "https://via.placeholder.com/800x500/059669/ffffff.png?text=Portfolio+Homepage",
        "https://via.placeholder.com/800x500/10b981/ffffff.png?text=Projects+Section",
        "https://via.placeholder.com/800x500/34d399/ffffff.png?text=Contact+Section"
      ],
      features: [
        "Responsive design for all devices",
        "Project showcase with filtering",
        "Skills and experience timeline",
        "Contact form with validation",
        "Blog section",
        "Dark/light mode toggle",
        "Smooth animations and transitions"
      ],
      status: "Live"
    }
  ];

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openImageModal = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Development': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Beta': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Planning': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen relative overflow-hidden font-inter">
      {/* Dynamic background with moving gradients */}
      <div className="fixed inset-0"> 
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Cursor follower - Glow effect behind name */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400/20 via-transparent to-transparent blur-3xl pointer-events-none transition-all duration-1000 ease-out z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <div className="relative z-20 px-4 sm:px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            {/* Decorative line */}
            <div className="inline-flex items-center gap-3 mb-6 animate-slide-down">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <span className="text-yellow-400 text-2xl animate-bounce-slow">🚀</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            {/* Main name "My Projects" heading */}
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6 animate-slide-up">
              My Projects
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              Crafting digital experiences with cutting-edge technologies and innovative solutions
            </p>
            
            {/* Stats section - Added flex-wrap for mobile */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 animate-fade-in-delayed-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{projects.length}</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{Object.keys(projectsByCategory).length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{featuredProjects.length}</div>
                <div className="text-sm text-gray-400">Featured</div>
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <span className="text-yellow-400 mr-3 animate-pulse text-2xl">⭐</span>
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                <span className="text-yellow-400 ml-3 animate-pulse text-2xl">⭐</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                    
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      FEATURED
                    </div>
                    
                    {/* Status badge */}
                    <div className={`absolute top-4 right-4 z-10 text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                    
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000000/FFFFFF?text=Image+Unavailable"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      
                      {/* Button hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image gallery button */}
                      <button 
                        onClick={() => openImageModal(project)}
                        className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-yellow-500/80 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      >
                        <span className="text-sm">📸</span>
                      </button>
                    </div>
                    
                    {/* Project Details */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Technologies with enhanced styling */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-600/30 hover:border-yellow-400/50 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Enhanced action buttons - Added responsive flex and width */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm text-gray-300 hover:from-gray-600/50 hover:to-gray-700/50 hover:text-white rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 transform hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.353-1.087.679-1.334-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.097-2.65 0 0 .84-.27 2.75 1.022A9.613 9.613 0 0112 5.017c.85.006 1.708.114 2.504.337 1.909-1.292 2.747-1.022 2.747-1.022.546 1.379.202 2.398.097 2.65.64.7 1.028 1.596 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.369.317.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .265.18.577.685.478C21.133 20.284 24 16.529 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">Code</span>
                        </a>
                        {/* Main CTA button */}
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-sm text-white hover:from-yellow-300 hover:to-yellow-400 hover:text-white rounded-xl transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400/50 transform hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                          <span className="font-medium">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* All Projects by Category */}
          <div className="space-y-20">
            {Object.entries(projectsByCategory).map(([category, categoryProjects], categoryIndex) => (
              <div 
                key={category} 
                className="animate-slide-up" 
                style={{ animationDelay: `${(categoryIndex + 2) * 300}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-gray-500"></div>
                    <div className="relative">
                      <span className="text-gray-600 text-lg absolute -top-1 -left-1">👨‍💻</span>
                      <h2 className="text-3xl font-bold text-white pl-6">{category}</h2>
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gray-500 via-gray-500 to-transparent"></div>
                  </div>
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {categoryProjects.map((project, projectIndex) => (
                    <div 
                      key={project.id}
                      className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/30 overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up"
                      style={{ animationDelay: `${projectIndex * 150}ms` }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Status badge */}
                      <div className={`absolute top-3 right-3 z-10 text-xs font-medium px-2 py-1 rounded-lg border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                      
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.images[0]} 
                          alt={project.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000000/FFFFFF?text=Image+Unavailable"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                        
                        {/* Floating action button */}
                        <button 
                          onClick={() => openImageModal(project)}
                          className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-yellow-500/80 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110"
                        >
                          <span className="text-sm">📸</span>
                        </button>
                        
                        {/* Image count indicator */}
                        {project.images.length > 1 && (
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                            {project.images.length} images
                          </div>
                        )}
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-6 relative">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                          {project.description}
                        </p>
                        
                        {/* Technologies - Enhanced grid layout */}
                        <div className="grid grid-cols-2 gap-1 mb-6">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-gray-700/40 backdrop-blur-sm text-gray-300 text-xs font-medium px-2 py-1 rounded-lg border border-gray-600/20 hover:border-yellow-400/40 hover:text-yellow-300 transition-all duration-300 text-center transform hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="bg-gray-600/40 text-gray-400 text-xs font-medium px-2 py-1 rounded-lg text-center">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        {/* Action Links - Added responsive flex and width */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700/30">
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/40 backdrop-blur-sm text-gray-300 hover:bg-gray-600/50 hover:text-white rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 transform hover:scale-105"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.353-1.087.679-1.334-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.097-2.65 0 0 .84-.27 2.75 1.022A9.613 9.613 0 0112 5.017c.85.006 1.708.114 2.504.337 1.909-1.292 2.747-1.022 2.747-1.022.546 1.379.202 2.398.097 2.65.64.7 1.028 1.596 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.369.317.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .265.18.577.685.478C21.133 20.284 24 16.529 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">Code</span>
                          </a>
                          {/* Main CTA button */}
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-sm text-white hover:from-yellow-300 hover:to-yellow-400 hover:text-white rounded-lg transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400/50 transform hover:scale-105"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                            <span className="text-sm font-medium">Demo</span>
                          </a>
                        </div>
                        
                        {/* Detailed view link */}
                        <button 
                          onClick={() => openImageModal(project)}
                          className="w-full mt-3 text-xs text-gray-500 hover:text-yellow-400 transition-colors duration-300 py-1"
                        >
                          View Details & Features →
                        </button>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Modal with better animations */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-modal-open">
          <div className="relative max-w-7xl w-full max-h-[95vh] flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden animate-modal-content">
            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute top-6 right-6 z-30 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-500/80 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Section - Adjusted min-height for mobile */}
            <div className="relative flex-1 min-h-[250px] sm:min-h-[400px] bg-black/50">
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-500/80 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-500/80 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Current Image with zoom effect */}
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000000/FFFFFF?text=Image+Unavailable"; }}
              />
              
              {/* Image Counter with enhanced styling */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-gray-600/30">
                  <span className="text-yellow-400 font-bold">{currentImageIndex + 1}</span>
                  <span className="text-gray-400 mx-2">/</span>
                  <span>{selectedProject.images.length}</span>
                </div>
              )}
              
              {/* Image thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-yellow-400 scale-125' 
                          : 'bg-gray-500 hover:bg-gray-400 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Details Section - Adjusted width for mobile */}
            <div className="w-full lg:w-2/5 flex flex-col bg-gradient-to-b from-gray-900/90 to-gray-800/90">
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                {/* Project header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
                    <div className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                {/* Technologies with improved layout */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Tech Stack
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 backdrop-blur-sm text-gray-300 text-sm font-medium px-4 py-3 rounded-xl border border-gray-600/20 hover:border-yellow-400/40 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features with enhanced styling */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 group/feature"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300">
                          <svg className="w-3 h-3 text-black font-bold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Action Buttons - Sticky footer (already uses flex-col, good for mobile) */}
              <div className="p-8 border-t border-gray-700/30 bg-gray-900/50 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm text-gray-300 hover:from-gray-600/50 hover:to-gray-700/50 hover:text-white rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 transform hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.353-1.087.679-1.334-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.097-2.65 0 0 .84-.27 2.75 1.022A9.613 9.613 0 0112 5.017c.85.006 1.708.114 2.504.337 1.909-1.292 2.747-1.022 2.747-1.022.546 1.379.202 2.398.097 2.65.64.7 1.028 1.596 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.369.317.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .265.18.577.685.478C21.133 20.284 24 16.529 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">View Source Code</span>
                  </a>
                  {/* Main CTA button */}
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-sm text-white hover:from-yellow-300 hover:to-yellow-400 hover:text-white rounded-xl transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400/50 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    <span className="font-semibold">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced CSS animations and styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.1; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 0.2; }
        }
        
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed-2 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes modal-open {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modal-content {
          from { opacity: 0; transform: scale(0.9) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in-delayed-2 1s ease-out 1s forwards;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-modal-open {
          animation: modal-open 0.3s ease-out;
        }
        
        .animate-modal-content {
          animation: modal-content 0.5s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(75 85 99) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(75 85 99);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(107 114 128);
        }
        
        /* Glassmorphism effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(16px);
        }
        
        /* Glow effects for featured items */
        .group:hover .glow-effect {
          box-shadow: 0 0 30px rgba(234, 179, 8, 0.3);
        }
        
        /* Perspective and 3D transforms for cards */
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg);
        }
      `}</style>
    </div>
  );
};

export default ProjectPage;
