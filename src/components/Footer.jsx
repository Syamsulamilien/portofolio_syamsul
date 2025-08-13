import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, FileText, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/', action: () => window.location.href = '/' },
    { name: 'About', href: '/about', action: () => window.location.href = '/about' },
    { name: 'Projects', href: '/projects', action: () => window.location.href = '/projects' },
    { name: 'Contact', href: '/contact', action: () => window.location.href = '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/Syamsulamilien', 
      hoverColor: 'hover:bg-gray-700'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/syamsul-amilien', 
      hoverColor: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/syamsul', 
      hoverColor: 'hover:bg-sky-500'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/syceliii?igsh=dzRhbWp1ZDI3ZHZ6&utm_source=qr', 
      hoverColor: 'hover:bg-pink-600'
    }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Consultation'
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Syamsul Amilien
              </h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-slate-400 hover:text-white transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={18} />
                <a href="mailto:syamsulamilien12@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300">
                  syamsulamilien12@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={18} />
                <a href="tel:+6287742290995" className="text-slate-400 hover:text-white transition-colors duration-300">
                  +6287742290995
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-green-400" size={18} />
                <span className="text-slate-400">Bandung, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="text-yellow-400" size={18} />
                <a 
                  href="/assets/Syamsul Amilien_CV.pdf"
                  download="Syamsul Amilien_CV.pdf"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-l-lg px-4 py-2 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-400 text-sm">
              &copy; {currentYear} Syamsul Amilien. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;