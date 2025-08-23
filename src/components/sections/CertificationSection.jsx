import { useState, useEffect } from 'react';

const certifications = [
  {
    title: "Web Development",
    issuer: "NSDA",
    date: "Jun 2025",
    image: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/Certificate_MD%20SAJJAD%20HOSSEN_page-0001.jpg?raw=true",
    certificateUrl: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/Certificate_MD%20SAJJAD%20HOSSEN.pdf",
    verifyUrl: "https://www.skillsportal.gov.bd/#/",
  },
  {
    title: "Node JS",
    issuer: "Coursera",
    date: "Mar 2024",
    image: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/8375449_87305801747916535280_page-0001.jpg?raw=true",
    certificateUrl: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/8375449_87305801747916535280.pdf",
    verifyUrl: "https://lms.simplilearn.com/dashboard",
  },
  {
    title: "Python (Django)",
    issuer: "EDGE Bangladesh",
    date: "Aug 2024",
    image: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/Certificate_page-0001.jpg?raw=true",
    certificateUrl: "https://github.com/Sajjadhossain125/All-Certificates/blob/main/Certificate.pdf",
    verifyUrl: "https://training.edge.gov.bd/hat-training",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Deeplearning.ai",
    date: "Jul 2022",
    image: "https://via.placeholder.com/100x70.png?text=Cert+4",
    certificateUrl: "#",
    verifyUrl: "#",
  },
];

const CertificationCard = ({ certification, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageOrientation, setImageOrientation] = useState('landscape');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150 + 300);
    return () => clearTimeout(timer);
  }, [index]);

  const checkImageOrientation = (src) => {
    const img = new Image();
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      setImageOrientation(width > height ? 'landscape' : 'portrait');
    };
    img.src = src;
  };

  const handleImageClick = () => {
    checkImageOrientation(certification.image);
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-3'
        } hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 hover:-translate-y-2 group relative animate-float`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animationDelay: `${index * 200}ms`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Multiple glow layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-yellow-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl"></div>
        
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/30 via-transparent to-yellow-400/30 animate-border-flow"></div>
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Certificate Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-40 h-28 bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 flex items-center justify-center hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 relative">
                {/* Image loading shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {imageError ? (
                  <div className="text-center p-4 animate-bounce-gentle">
                    <svg className="w-10 h-10 text-gray-500 mx-auto mb-2 transition-colors duration-300 group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs text-gray-500 group-hover:text-yellow-400 transition-colors duration-300">Certificate</span>
                  </div>
                ) : (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-all duration-500 hover:scale-110 hover:rotate-1 relative z-10"
                    onClick={handleImageClick}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>

            {/* Certificate Details */}
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-yellow-100 group-hover:to-white transition-all duration-500 animate-title-glow">
                  {certification.title}
                </h3>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-800/60 text-yellow-400 border border-gray-700/50 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/70 group-hover:scale-105 transition-all duration-300 animate-pulse-badge">
                  {certification.date}
                </span>
              </div>

              <div className="flex items-center mb-4 group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-5 h-5 text-yellow-400 mr-2 animate-spin-slow group-hover:animate-none transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Issued by <span className="font-medium text-white group-hover:text-yellow-200 transition-colors duration-300">{certification.issuer}</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black text-sm font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/30 hover:scale-105 relative overflow-hidden group-btn animate-button-pulse"
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  {/* Button hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative z-10">View Certificate</span>
                </a>
                
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gray-800/80 hover:bg-gradient-to-r hover:from-yellow-400/0 hover:to-yellow-400/20 text-yellow-400 text-sm font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-500 border border-gray-700/50 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group-btn relative overflow-hidden"
                >
                  {/* Verify button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with enhanced animations */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-md p-4 animate-modal-fade-in">
          <div className={`relative max-w-4xl w-full ${imageOrientation === 'portrait' ? 'max-h-[90vh]' : ''} animate-modal-scale-in`}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 z-10 transition-all duration-300 hover:scale-110 hover:rotate-90 animate-button-bounce"
            >
              ×
            </button>
            <div className={`bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-2xl shadow-yellow-400/20 border border-gray-700/50 overflow-hidden animate-border-glow ${
              imageOrientation === 'portrait' ? 'max-h-[85vh] overflow-y-auto' : ''
            }`}>
              <img
                src={certification.image}
                alt="Full Certificate"
                className={`${
                  imageOrientation === 'portrait' 
                    ? 'w-auto max-w-full mx-auto' 
                    : 'w-full h-auto'
                } block animate-image-zoom-in`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CertificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8 mt-8 py-16 rounded-md border-t border-gray-600/30 backdrop-blur-sm bg-gray-800/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmZmZmMjAiLz4KPC9zdmc+')] opacity-10"></div>
      
      {/* Enhanced glow effects with your documented gradients */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400/10 to-transparent blur-xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-yellow-400/5 to-transparent blur-3xl animate-rotate-slow -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-white relative z-10">
        <div className={`flex flex-col items-center mb-16 transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 mb-6 rounded-full animate-grow-height"></div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4 text-center animate-text-shimmer bg-[length:200%_100%]">
            My Certifications
          </h2>
          
          <p className="text-lg bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent text-center mb-6 opacity-90 animate-fade-in-up">
            Achievements that shaped my journey
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-expand-width"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} certification={cert} index={idx} />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s infinite;
        }
      `}</style>
    </section>
  );
};

export default CertificationSection;