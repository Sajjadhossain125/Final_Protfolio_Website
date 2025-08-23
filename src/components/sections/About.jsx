import React from 'react'

export default function About() {
  return (
    <>
      {/* About Section */}
      <div className="mt-16 md:mt-24 relative">
        {/* Glassmorphism background effect */}
        <div className="absolute inset-0 border-t border-gray-600/30 backdrop-blur-sm bg-black/20 rounded-2xl"></div>
        
        {/* Content container with glass effect, now with specific horizontal padding */}
        {/* I've replaced `p-6 sm:p-8` with `px-4 sm:px-6 md:px-8` and added `py-6` for vertical padding */}
        <div className="relative px-6 sm:px-8 md:px-12 py-8 sm:py-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300">
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 mr-6 rounded-full"></div>
            <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">About Me</h3>
          </div>
          
          <div className="space-y-8 text-gray-200 text-lg md:text-xl leading-relaxed">
            <p>
              I'm Md Sajjad Hossen, a passionate Software Engineer and recent Computer Science graduate from Green University of Bangladesh with a strong foundation in full-stack development. Currently working at Growlyweb, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Django framework, bringing innovative solutions to real-world challenges across diverse sectors including healthcare, e-commerce, and education.
            </p>
            
            <p>
              My journey in tech is driven by an enthusiasm for solving complex problems through technology. I've successfully developed and deployed multiple impactful projects, including a comprehensive Online Medical Sheba platform that revolutionizes healthcare accessibility, a Multi-Vendor E-commerce marketplace, and an AI-powered Medicine Recommendation System using machine learning. These projects demonstrate my ability to create end-to-end solutions that bridge the gap between technical excellence and user needs.
            </p>
            
            <p>
              What sets me apart is my commitment to continuous learning and meaningful impact. I actively engage in problem-solving on platforms like LeetCode and Codeforces, stay updated with emerging technologies, and maintain a collaborative mindset that thrives in cross-functional team environments. My technical expertise spans from frontend technologies like React.js and responsive design to backend development with Node.js, Express.js, and database management with MongoDB and MySQL.
            </p>
            
            <p>
              Beyond coding, I believe in the power of effective communication and user-centered design. Whether I'm optimizing application performance, implementing scalable solutions, or mentoring as an Ambassador at Oneway School, I approach every challenge with curiosity and a dedication to creating technology that makes a difference in people's lives.
            </p>
          </div>
          
          {/* Skills highlight */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">MERN Stack</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">Django</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">AI Development</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">E-commerce</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">Machine Learning</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">React</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">Python</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 rounded-xl text-base font-medium border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}