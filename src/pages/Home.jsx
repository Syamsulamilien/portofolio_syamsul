import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const texts = [
    "Front-End Developer",
    "Creative Coder",
    "UI/UX Enthusiast", 
    "React Specialist"
  ];

  // Enhanced typewriter effect
  useEffect(() => {
    const currentFullText = texts[currentText];
    
    if (isTyping) {
      if (charIndex < currentFullText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, currentText, texts]);

  // Social media data with proper icons
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/syamsulamilien',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syamsul-amilien',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/syceliii/',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/5 rounded-full blur-2xl animate-float-reverse"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Geometric shapes */}
        {[...Array(15)].map((_, i) => {
          const shapes = ['○', '△', '□'];
          return (
            <div
              key={`shape-${i}`}
              className="absolute text-blue-400/10 text-xl animate-drift select-none pointer-events-none font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              {shapes[i % shapes.length]}
            </div>
          );
        })}
      </div>

      {/* Moving grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridSlide 25s linear infinite'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12">
          
          {/* Left Side - Content */}
          <div className="text-left animate-slideUp order-2 lg:order-1">
            {/* Greeting - Simple dan profesional */}
            <div className="mb-8">
              <div className="mb-6">
                <span className="text-lg sm:text-xl text-slate-400 font-medium tracking-wide">
                  Hello World, I'm
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-textShine leading-tight">
                Syamsul
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-slate-300">
                  Amilien
                </span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center mb-6">
                <div className="relative">
                  <span className="text-xs sm:text-sm text-slate-500 font-mono uppercase tracking-widest absolute -top-6 left-0">
                    &lt;/&gt;
                  </span>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {displayText}
                    </span>
                    <span className="animate-blink text-blue-400 ml-1 font-mono">|</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Description - Font lebih readable */}
            <div className="mb-10 animate-fadeIn">
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-4">
                Passionate about creating
                <span className="italic text-blue-400 mx-2">beautiful</span>
                & 
                <span className="font-semibold text-purple-400 mx-2">interactive</span>
                web experiences
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
                that combine creativity with cutting-edge technology
              </p>
              
              {/* Decorative Element */}
              <div className="flex items-center mt-6 space-x-2">
                <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                <span className="text-blue-400 font-mono text-sm">{ }</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-start animate-slideUp delay-300 mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 animate-bounce-subtle overflow-hidden"
              >
               <Link to="/projects">
                <span className="relative z-10 flex items-center gap-3 cursor-pointer group">
                  <span className="font-mono text-sm">01</span>
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-mono">→</span>
                </span>
              </Link>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-150"></div>
              </button>
              
              <a
                href="/assets/Syamsul Amilien_CV.pdf"
                download="Syamsul Amilien_CV.pdf"
                className="group px-10 py-5 border-2 border-slate-600 text-slate-300 font-semibold text-lg rounded-2xl hover:border-blue-500 hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 inline-flex items-center gap-3 animate-bounce-subtle delay-150 relative overflow-hidden"
              >
                <span className="font-mono text-sm">02</span>
                <span className="group-hover:animate-wiggle text-xl">📄</span>
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-8 animate-slideUp delay-500">
              <div className="flex items-center space-x-4">
                <span className="text-slate-500 font-mono text-sm uppercase tracking-wider">Connect</span>
                <div className="w-8 h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-500 hover:scale-125 shadow-lg hover:shadow-xl animate-popIn relative overflow-hidden border border-slate-700/50"
                    style={{ animationDelay: `${index * 0.2 + 0.8}s` }}
                    title={social.name}
                  >
                    <span className="relative z-10 group-hover:animate-bounce">{social.icon}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    
                    {/* Social name label on hover */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Code-style footer */}
            <div className="mt-12 animate-fadeIn delay-1000">
              <div className="font-mono text-slate-600 text-sm">
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideDown order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-105 hover:rotate-1 transition-all duration-500 animate-glow">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-800 flex items-center justify-center relative">
                  <img 
                    src="/assets/foto1.jpg" 
                    alt="Syamsul Amilien"
                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <span className="text-8xl sm:text-9xl font-bold text-white hidden">S</span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 animate-heartbeat flex items-center justify-center">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
              </div>
              
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/10 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-3xl border border-purple-500/10 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-3xl border border-indigo-500/10 animate-spin-slower"></div>
              </div>

              {/* Floating tech icons around the image */}
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-400 animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -top-4 -right-12 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-purple-400 animate-float-reverse">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute -bottom-8 -left-4 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-green-400 animate-float delay-1000">
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-yellow-400 animate-float-reverse delay-500">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textShine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.3);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -20px) scale(1.1);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(0.9);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes gridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        .animate-textShine {
          animation: textShine 3s ease-in-out infinite;
          background-size: 200% 200%;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Home;