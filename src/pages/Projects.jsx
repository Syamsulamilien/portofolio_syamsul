import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: 'Health Tourism',
      desc: 'A comprehensive health tourism platform built with Laravel, featuring a responsive Tailwind CSS design and an integrated AI-powered chatbot to assist visitors in finding medical services, travel information, and personalized recommendations with ease.',
      image: '/assets/images/vitalife.png',
      category: 'web',
      technologies: ['Laravel', 'Tailwind CSS', 'AI Chatbot', 'Payment Gateway', 'MySQL'],
      liveUrl: 'https://vitalife.my.id/',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: true,
      fullDescription: 'VitaLife is a comprehensive health tourism platform that revolutionizes how people access medical services abroad. Built with Laravel and enhanced with a modern Tailwind CSS design, this platform serves as a complete ecosystem for medical tourism. The integrated AI-powered chatbot provides 24/7 assistance, helping visitors find the right medical services, travel information, and personalized recommendations based on their specific health needs and preferences.',
      keyFeatures: [
        'AI-powered medical consultation chatbot',
        'Comprehensive medical service directory',
        'Integrated travel planning tools',
        'Secure payment gateway integration',
        'Multi-language support',
        'Real-time appointment booking',
        'Medical history management',
        'Insurance verification system'
      ],
      challenges: 'The main challenge was integrating complex medical data with travel logistics while ensuring user privacy and data security compliance with international healthcare regulations.',
      outcome: 'Successfully launched platform serving over 1000+ medical tourists with 95% user satisfaction rate and partnerships with 50+ medical facilities across Southeast Asia.',
      duration: '6 months',
      team: '4 developers, 2 designers, 1 medical advisor'
    },
    {
      id: 2,
      title: 'Maternal & Child Healthcare System',
      desc: 'An AI-based application that assists in monitoring maternal and child health, recording medical history, scheduling check-ups, and providing real-time health information and recommendations.',
      image: '/assets/images/bidan.jpg',
      category: 'ai',
      technologies: ['Python', 'Flask', 'TensorFlow', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: true,
      fullDescription: 'A revolutionary AI-powered healthcare system designed specifically for maternal and child health monitoring. This application leverages machine learning algorithms to provide predictive analytics for pregnancy complications, automated health risk assessments, and personalized care recommendations.',
      keyFeatures: [
        'AI-powered risk assessment algorithms',
        'Real-time health monitoring dashboard',
        'Automated appointment scheduling',
        'Pregnancy progression tracking',
        'Child development milestone tracking',
        'Emergency alert system',
        'Nutritional guidance recommendations',
        'Integration with wearable devices'
      ],
      challenges: 'Developing accurate ML models for health prediction while ensuring the system could work effectively in resource-limited healthcare settings.',
      outcome: 'Deployed in 3 community health centers, reducing maternal complications by 30% and improving child health outcomes through early intervention.',
      duration: '8 months',
      team: '3 AI engineers, 2 healthcare professionals, 1 UI/UX designer'
    },
    {
      id: 3,
      title: 'Antivirus Advanteru',
      desc: 'An educational game developed using Greenfoot, themed around an adventure to fight computer viruses. Players are tasked with securing the system from various threats while learning basic digital security concepts.',
      image: '/assets/images/game.png',
      category: 'game',
      technologies: ['Java', 'Greenfoot'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: false,
      fullDescription: 'Antivirus Advanteru is an innovative educational game that combines entertainment with cybersecurity education. Players embark on an exciting adventure through a digital world, encountering various computer threats and learning how to defend against them using antivirus tools and security best practices.',
      keyFeatures: [
        'Interactive virus scanning mechanics',
        'Progressive difficulty levels',
        'Real-world cybersecurity scenarios',
        'Achievement and badge system',
        'Educational content integration',
        'Boss battles against major malware',
        'Leaderboard and scoring system',
        'Multi-level adventure storyline'
      ],
      challenges: 'Balancing educational content with engaging gameplay mechanics while ensuring the cybersecurity information remained accurate and up-to-date.',
      outcome: 'Used in 10+ schools as part of digital literacy curriculum, with 95% of students showing improved understanding of cybersecurity concepts.',
      duration: '4 months',
      team: '2 game developers, 1 cybersecurity expert, 1 educator'
    },
    {
      id: 4,
      title: 'Vegetable Website UI Design',
      desc: 'A vegetable-themed website interface design created with Figma, focusing on a fresh, user-friendly, and responsive look to support online shopping for agricultural products.',
      image: '/assets/images/imk.png',
      category: 'design',
      technologies: ['Figma', 'Framer', 'Canva'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: false,
      fullDescription: 'A comprehensive UI/UX design for a fresh produce e-commerce platform that emphasizes the natural, organic quality of vegetables through thoughtful design choices. The design system incorporates earthy colors, organic shapes, and intuitive navigation to create a seamless shopping experience.',
      keyFeatures: [
        'Fresh and organic visual design language',
        'Responsive design for all devices',
        'Interactive product catalog',
        'Intuitive shopping cart experience',
        'Farmer profile showcase',
        'Seasonal produce recommendations',
        'Sustainability information integration',
        'Accessibility-first design approach'
      ],
      challenges: 'Creating a design that appeals to both tech-savvy urban consumers and traditional farmers while maintaining brand authenticity.',
      outcome: 'Design system adopted by 3 agricultural cooperatives, resulting in 40% increase in online sales and improved user engagement.',
      duration: '3 months',
      team: '2 UI/UX designers, 1 agricultural specialist'
    },
    {
      id: 5,
      title: 'Banana Ripeness Detection Based on Color',
      desc: 'A web-based application that classifies banana ripeness levels using color analysis. The system utilizes RGB/HSV feature extraction and neural network algorithms to deliver accurate predictions.',
      image: '/assets/images/project_ai.png',
      category: 'ai',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Tkinter'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: false,
      fullDescription: 'An intelligent computer vision system that automatically determines banana ripeness levels through advanced color analysis and machine learning. This application helps farmers, retailers, and consumers make informed decisions about banana quality and optimal consumption timing.',
      keyFeatures: [
        'Real-time image processing',
        'Multi-stage ripeness classification',
        'Batch processing capabilities',
        'Quality assessment scoring',
        'Historical data tracking',
        'Export functionality for reports',
        'Camera integration support',
        'API for third-party integration'
      ],
      challenges: 'Achieving consistent accuracy across different lighting conditions and banana varieties while maintaining real-time processing speed.',
      outcome: 'Achieved 94% accuracy in ripeness detection, adopted by 2 fruit processing companies for quality control automation.',
      duration: '5 months',
      team: '2 AI engineers, 1 agricultural specialist'
    },
    {
      id: 6,
      title: 'Electronic Medical Record System',
      desc: 'A digital medical record management system that facilitates secure and structured recording, searching, and management of patient data. Designed to help healthcare professionals easily access patient health history.',
      image: '/assets/images/rekam_medis.png',
      category: 'web',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: false,
      fullDescription: 'A comprehensive Electronic Medical Record (EMR) system designed to streamline healthcare data management while ensuring HIPAA compliance and data security. The system provides healthcare professionals with efficient tools for patient data management, appointment scheduling, and medical history tracking.',
      keyFeatures: [
        'HIPAA-compliant data security',
        'Advanced search and filtering',
        'Appointment management system',
        'Medical history visualization',
        'Prescription management',
        'Lab results integration',
        'Multi-user role management',
        'Backup and recovery system'
      ],
      challenges: 'Ensuring data security and privacy compliance while maintaining system performance and user-friendly interface for healthcare professionals.',
      outcome: 'Successfully implemented in 2 medical clinics, reducing administrative time by 50% and improving patient data accuracy.',
      duration: '7 months',
      team: '3 developers, 1 healthcare IT specialist, 1 compliance officer'
    },
    {
      id: 7,
      title: 'E-commerce Website',
      desc: 'A modern online store platform featuring product catalog, shopping cart, online payment system, and integrated order management for a smooth and fast shopping experience.',
      image: '/assets/images/ecomerce_baju.png',
      category: 'web',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Stripe API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Syamsulamilien',
      featured: false,
      fullDescription: 'A full-featured e-commerce platform built with modern web technologies to provide a seamless online shopping experience. The platform includes advanced features like real-time inventory management, personalized recommendations, and comprehensive analytics dashboard.',
      keyFeatures: [
        'Real-time inventory management',
        'Personalized product recommendations',
        'Multi-payment gateway integration',
        'Advanced search and filtering',
        'Wishlist and comparison features',
        'Order tracking system',
        'Customer review system',
        'Analytics and reporting dashboard'
      ],
      challenges: 'Building a scalable architecture that could handle high traffic loads during peak shopping periods while maintaining fast page load times.',
      outcome: 'Platform handling 10,000+ monthly active users with 99.9% uptime and 25% increase in conversion rates compared to previous system.',
      duration: '6 months',
      team: '4 developers, 2 designers, 1 business analyst'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'design', name: 'UI/UX', count: projects.filter(p => p.category === 'design').length },
    { id: 'game', name: 'Games', count: projects.filter(p => p.category === 'game').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const closeProjectDetail = () => {
    setShowDetailModal(false);
    setSelectedProject(null);
  };

  // Project Detail Modal Component
  const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <div className="h-80 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 items-center justify-center hidden">
                  <div className="text-8xl opacity-30">
                    {project.category === 'web' ? '🌐' : 
                     project.category === 'ai' ? '🤖' : 
                     project.category === 'design' ? '🎨' : 
                     project.category === 'game' ? '🎮' : '🔧'}
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Title and Category */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    project.category === 'web' ? 'bg-blue-600/90 text-white' :
                    project.category === 'ai' ? 'bg-purple-600/90 text-white' :
                    project.category === 'design' ? 'bg-pink-600/90 text-white' :
                    project.category === 'game' ? 'bg-orange-600/90 text-white' :
                    'bg-green-600/90 text-white'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-bold rounded-full">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-3xl">
                  {project.desc}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-3 bg-slate-800 border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Project Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Key Features
                    </h3>
                    <div className="grid gap-3">
                      {project.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-full text-sm font-medium border border-slate-600 hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Duration</h4>
                      <p className="text-slate-300">{project.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Team</h4>
                      <p className="text-slate-300">{project.team}</p>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      Challenges
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Outcome & Impact
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), 
                        0 0 40px rgba(16, 185, 129, 0.1),
                        inset 0 0 20px rgba(16, 185, 129, 0.1); 
          }
          50% { 
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.5), 
                        0 0 60px rgba(16, 185, 129, 0.2),
                        inset 0 0 30px rgba(16, 185, 129, 0.2); 
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .border-animate::before {
          content: '';
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.8), transparent, rgba(6, 182, 212, 0.8), transparent);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: borderRotate 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .border-animate:hover::before {
          opacity: 1;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .glow-border {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .project-card {
          background: 
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(51, 65, 85, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Explore my portfolio of web applications, AI projects, and creative solutions that showcase my passion for innovative technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {activeFilter === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.filter(p => p.featured).map((project, index) => (
                  <div 
                    key={project.id} 
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl float-animation"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback content */}
                      <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 items-center justify-center hidden">
                        <div className="text-6xl opacity-20">
                          {project.category === 'web' ? '🌐' : 
                           project.category === 'ai' ? '🤖' : 
                           project.category === 'design' ? '🎨' : 
                           project.category === 'game' ? '🎮' : '🔧'}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === 'web' ? 'bg-blue-500/20 text-blue-300' :
                          project.category === 'ai' ? 'bg-purple-500/20 text-purple-300' :
                          project.category === 'design' ? 'bg-pink-500/20 text-pink-300' :
                          project.category === 'game' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <button
                          onClick={() => openProjectDetail(project)}
                          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-medium text-center hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          View Details
                        </button>
                        <a
                          href={project.liveUrl}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-xl font-medium hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid with Advanced Animations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {activeFilter === 'all' ? 'All Projects' : `${categories.find(cat => cat.id === activeFilter)?.name} Projects`}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProjects.filter(p => activeFilter === 'all' ? !p.featured : true).map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative project-card backdrop-blur-lg border-2 border-animate rounded-3xl overflow-hidden hover:border-emerald-400/60 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-emerald-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border"></div>
                  
                  {/* Decorative corner accent with pulse */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-400/30 to-transparent rounded-br-3xl group-hover:from-emerald-400/50 transition-all duration-300"></div>
                  
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 shimmer-effect rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Enhanced Fallback with Animation */}
                    <div className="w-full h-40 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20 items-center justify-center hidden">
                      <div className="text-4xl opacity-30 animate-bounce">
                        {project.category === 'web' ? '🌐' : 
                         project.category === 'ai' ? '🤖' : 
                         project.category === 'design' ? '🎨' : 
                         project.category === 'game' ? '🎮' : '🔧'}
                      </div>
                    </div>
                    
                    {/* Animated Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
                        project.category === 'web' ? 'bg-blue-600/90 text-white border-blue-400/50 group-hover:bg-blue-500' :
                        project.category === 'ai' ? 'bg-purple-600/90 text-white border-purple-400/50 group-hover:bg-purple-500' :
                        project.category === 'design' ? 'bg-pink-600/90 text-white border-pink-400/50 group-hover:bg-pink-500' :
                        project.category === 'game' ? 'bg-orange-600/90 text-white border-orange-400/50 group-hover:bg-orange-500' :
                        'bg-green-600/90 text-white border-green-400/50 group-hover:bg-green-500'
                      }`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-bold rounded-full shadow-lg border border-yellow-300/50 animate-pulse">
                          ⭐
                        </span>
                      </div>
                    )}
                    
                    {/* Enhanced overlay with staggered button animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                      <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                        <button
                          onClick={() => openProjectDetail(project)}
                          className="w-12 h-12 bg-gradient-to-br from-indigo-500/90 to-purple-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-indigo-500/40"
                          title="View Details"
                          style={{ transitionDelay: '0s' }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <a
                          href={project.liveUrl}
                          className="w-12 h-12 bg-gradient-to-br from-emerald-500/90 to-teal-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-emerald-500/40"
                          title="Live Demo"
                          style={{ transitionDelay: '0.1s' }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="w-12 h-12 bg-gradient-to-br from-purple-500/90 to-indigo-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-purple-500/40"
                          title="View Code"
                          style={{ transitionDelay: '0.2s' }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-5 z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-all duration-500 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs mb-4 leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                      {project.desc.length > 80 ? `${project.desc.substring(0, 80)}...` : project.desc}
                    </p>
                    
                    {/* Enhanced technology tags with stagger animation */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium border border-slate-600/50 hover:border-emerald-400/50 hover:bg-slate-600/50 hover:text-white transition-all duration-300 hover:scale-110"
                          style={{ transitionDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-md text-xs font-medium border border-emerald-500/30 hover:bg-emerald-600/30 transition-all duration-300 hover:scale-110">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Enhanced action buttons with gradient animations */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openProjectDetail(project)}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 rounded-lg text-xs font-semibold text-center hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 relative overflow-hidden"
                      >
                        Details
                      </button>
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-3 rounded-lg text-xs font-semibold text-center hover:from-emerald-500 hover:to-teal-500 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden group-hover:animate-pulse"
                      >
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="px-3 py-2 border-2 border-slate-500/50 text-slate-300 rounded-lg text-xs font-semibold hover:border-emerald-400/50 hover:text-white hover:bg-slate-700/30 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
              <p className="text-slate-400 mb-6">
                I'm always excited to work on new challenges and bring innovative ideas to life. 
                Let's discuss how we can collaborate on your next project.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal 
          project={selectedProject} 
          isOpen={showDetailModal} 
          onClose={closeProjectDetail} 
        />
      </section>
    </>
  );
};

export default Projects;