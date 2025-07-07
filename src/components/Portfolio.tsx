
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online store with advanced payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Patient management app with telemedicine features and appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      category: 'Mobile Development',
      link: '#'
    },
    {
      title: 'Restaurant Chain Website',
      description: 'Multi-location restaurant website with online ordering and delivery integration.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'AI Chatbot Integration',
      description: 'Customer service chatbot with natural language processing and 24/7 support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
      category: 'AI Solutions',
      link: '#'
    },
    {
      title: 'Social Media Campaign',
      description: 'Comprehensive social media strategy resulting in 300% engagement increase.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'Digital Marketing',
      link: '#'
    },
    {
      title: 'SEO Optimization Project',
      description: 'Complete website overhaul achieving first page Google rankings for target keywords.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      category: 'SEO',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve 
            their digital transformation goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors duration-200 group"
                >
                  View Project
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <button className="btn-secondary group flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
