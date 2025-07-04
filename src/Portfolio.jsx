import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, FileText, Search, ShoppingCart, Clock, Star, CheckCircle, ArrowRight, Menu, X, ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // AOS-like animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all elements with aos class
    document.querySelectorAll('.aos-animate').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const services = [
  {
    photo: "a1.png",
    url: "https://ittrainingsinstitute.in/oracle-apex-training-chandigarh-mohali/"
  },
  {
    photo: "a2.png",
    url: "https://www.canamgroup.com/blog/mastering-ielts-speaking-part-1-expert-answers-and-tips"
  },
  {
    photo: "a3.png",
    url: "https://kaunsacollege.com/blog/best-agriculture-courses-colleges-jobs-after-12th"
  },
  {
    photo: "a4.png",
    url: "https://petkairo.com/"
  },
  {
    photo: "a5.png",
    url: "https://www.youtube.com/@PetKairo"
  },
  {
    photo: "a6.png",
    url: "https://www.instagram.com/glimpsedecorca/"
  }
];


  const skills = [
    "Content Strategy", "SEO Writing", "Blog Writing", "Website Copy", 
    "Product Descriptions", "Social Media Content", "Email Marketing", 
    "Technical Writing", "Research & Analysis", "Brand Storytelling",
    
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      text: "Rama's content writing transformed our blog traffic by 300%. Her SEO expertise is unmatched!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "E-commerce Manager",
      text: "The product descriptions Rama wrote increased our conversion rates significantly. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Startup Founder",
      text: "Professional, timely, and creative. Rama understood our brand voice perfectly from day one.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Rama Sharma
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Showcase', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Showcase', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="aos-animate mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
  <img 
    src="/photo.jpg" 
    alt="Dodge SRT muscle car" 
    className="w-full h-full object-cover"
  />
</div>

            </div>
            
            <h1 className="aos-animate text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Content Writer
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                SEO | E-commerce
              </span>
            </h1>
            
            <p className="aos-animate text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm Rama Sharma, a passionate content writer with 5+ years of experience crafting engaging, 
              well-researched, and SEO-friendly content that connects with readers and drives results.
            </p>
            
            <div className="aos-animate flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="aos-animate text-center">
                <div className="flex justify-center mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="aos-animate text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="aos-animate text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming ideas into compelling stories that resonate with audiences and drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aos-animate">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Over the past 5 years, I've worked with clients across diverse industries including tech, 
                  lifestyle, health, travel, and e-commerce. I specialize in creating content that connects 
                  with readers, builds brand authority, and supports business goals.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I enjoy transforming complex ideas into clear, relatable, and compelling stories tailored 
                  to specific audiences. With strong attention to detail and consistent quality, I aim to 
                  deliver content that adds real value and leaves a lasting impression.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Tech", "Lifestyle", "Health", "Travel", "E-commerce"].map((industry) => (
                    <span key={industry} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="aos-animate">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">5+ Years Experience</h4>
                    <p className="text-gray-600">Proven track record in content creation and strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">SEO-Focused Strategies</h4>
                    <p className="text-gray-600">Content optimized for search engines and user engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Client Satisfaction</h4>
                    <p className="text-gray-600">On-time delivery and revisions until you're completely happy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="showcase" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="aos-animate text-4xl font-bold text-gray-900 mb-4">My Creations</h2>
            <p className="aos-animate text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive content solutions to help your business grow and engage your audience effectively.
            </p>
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.url}
          className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src={service.photo}
            alt={`Service ${index}`}
            className="w-full h-64 object-cover"
          />
        </a>
      ))}
    </div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="aos-animate text-4xl font-bold text-gray-900 mb-4">Key Skills & Expertise</h2>
            <p className="aos-animate text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for creating content that drives results and builds lasting connections.
            </p>
          </div>

          <div className="aos-animate grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center hover:scale-105"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="aos-animate text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="aos-animate text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from satisfied clients who have seen results from our collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="aos-animate">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="aos-animate text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="aos-animate text-lg text-purple-100 max-w-2xl mx-auto">
              Ready to transform your content strategy? Let's discuss how I can help your business grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="aos-animate">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-200" />
                    <span className="text-white">sharma.rama2426@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-200" />
                    <span className="text-white">+91 83609 65049</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-200" />
                    <span className="text-white">Available Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="aos-animate">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1" />
                    <span className="text-white">Friendly communication & collaboration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1" />
                    <span className="text-white">Revisions until you're completely satisfied</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1" />
                    <span className="text-white">On-time delivery guaranteed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1" />
                    <span className="text-white">Deep understanding of digital trends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Rama Sharma
            </div>
            <p className="text-gray-400 mb-8">Content Writer | SEO | E-commerce</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 Rama Sharma. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;