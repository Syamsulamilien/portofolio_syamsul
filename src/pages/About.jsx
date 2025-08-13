const About = () => {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/HTML5', level: 92, color: 'from-orange-500 to-red-500' },
    { name: 'CSS/Tailwind', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Laravel', level: 90, color: 'from-red-500 to-pink-500' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 80, color: 'from-indigo-500 to-blue-500' },
    { name: 'UI/UX Design', level: 70, color: 'from-pink-500 to-rose-500' }
  ];

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Frontend Developer',
      company: 'Freelance Projects',
      description: 'Developed and designed multiple web applications and UI projects, including an E-commerce website, a vegetable-themed UI design in Figma, and a Healthoricsm website.'
    },
    {
      year: '2024',
      title: 'Frontend Developer & IoT Integration',
      company: 'Academic Project',
      description: 'Built a banana ripeness detection system based on color using Node.js, MongoDB, and Arduino for real-time IoT integration.'
    },
    {
      year: '2024',
      title: 'Game Developer',
      company: 'Personal Project',
      description: 'Created "Antivirus Advanteru", a desktop game developed using Greenfoot with a focus on interactive gameplay and user engagement.'
    },
    {
      year: '2024',
      title: 'Frontend Developer',
      company: 'Academic Project',
      description: 'Developed a Medical Record system using Python, Flask, and SQLAlchemy with a focus on clean UI and efficient data handling.'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12 relative overflow-hidden">
      {/* Background Elements - sama seperti hero section */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header - Lebih minimalis */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Get to know more about my journey, skills, and experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Text & Image */}
          <div className="space-y-8 animate-slideUp">
            {/* Profile Card - Design yang lebih bersih */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-1 hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center">
                      <img 
                        src="/assets/foto1.jpg" 
                        alt="Syamsul Amilien"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <span className="text-3xl font-bold text-white hidden">S</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-slate-800 animate-heartbeat"></div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Syamsul Amilien</h3>
                  <p className="text-blue-400 font-semibold mb-4 text-lg">Frontend Developer & Creative Coder</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">React Developer</span>
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-colors duration-300">UI/UX Enthusiast</span>
                  </div>
                  <div className="text-slate-400 text-sm">
                    I am a fifth-semester student at Universitas 'Aisyiyah Yogyakarta, majoring in Information Technology. I am continuously developing my knowledge and skills in the field of technology through both academic learning and personal projects. With a strong passion for learning, I am committed to becoming an innovative individual who is ready to contribute to the advancement of technology in the future.
                  </div>
                </div>
              </div>
            </div>

            {/* About Description - Lebih terstruktur */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📖</span>
                </div>
                <h3 className="text-xl font-bold text-white">My Journey</h3>
              </div>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <div className="p-4 bg-slate-700/20 rounded-xl border-l-4 border-blue-500">
                  <p className="font-medium text-blue-300 mb-2">Professional Background</p>
                  <p className="text-sm">
                    I am a passionate frontend developer with one year of experience in building modern and interactive web interfaces. 
                    Since starting my journey in 2024, I have worked on various projects ranging from E-commerce websites to IoT-based applications.
                  </p>
                </div>
                
                <div className="p-4 bg-slate-700/20 rounded-xl border-l-4 border-purple-500">
                  <p className="font-medium text-purple-300 mb-2">Development Philosophy</p>
                  <p className="text-sm">
                    My focus is on creating clean, efficient code combined with visually appealing and user-friendly designs. 
                    I believe that the best technology delivers an outstanding user experience.
                  </p>
                </div>
                
                <div className="p-4 bg-slate-700/20 rounded-xl border-l-4 border-green-500">
                  <p className="font-medium text-green-300 mb-2">Beyond Coding</p>
                  <p className="text-sm">
                    Outside of coding, I enjoy learning new technologies, exploring UI/UX design trends, and experimenting with creative coding projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8 animate-slideUp delay-200">
            {/* Skills - Design yang lebih menarik dengan grid layout yang lebih baik */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-200 font-semibold">{skill.name}</span>
                      <span className="text-slate-400 text-sm font-mono bg-slate-700/50 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden border border-slate-600/50">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out group-hover:scale-105 relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline - Design yang lebih modern */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-slate-600/50 last:border-l-0 group hover:border-blue-500/50 transition-colors duration-300">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-slate-800 group-hover:scale-125 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                    <div className="pb-6 bg-slate-700/10 p-4 rounded-xl border border-slate-600/20 hover:bg-slate-700/20 hover:border-slate-500/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <span className="text-blue-400 text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full inline-block w-fit mb-2 sm:mb-0">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-1">{exp.title}</h4>
                      <p className="text-purple-400 font-semibold mb-3">{exp.company}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Design yang lebih elegan */}
        <div className="mt-16 animate-fadeIn delay-500">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Some Numbers</h3>
            <p className="text-slate-400">A quick look at my achievements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '7+', label: 'Projects Completed', icon: '📊', color: 'from-blue-500 to-cyan-500' },
              { number: '1+', label: 'Years Experience', icon: '⏱️', color: 'from-purple-500 to-pink-500' },
              { number: '5+', label: 'Happy Clients', icon: '😊', color: 'from-green-500 to-emerald-500' },
              { number: '100%', label: 'Satisfaction Rate', icon: '⭐', color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <div key={index} className="group text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer">
                <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
};

export default About;