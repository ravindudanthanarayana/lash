
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#get-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <AnimatedBackground className="absolute inset-0 bg-brand-gradient">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rotate-45 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-white/25 rotate-12 animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-white/10 transform rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </AnimatedBackground>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <div className="animate-fade-in">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-white font-medium">AI-Powered Digital Solutions</span>
          </div>

          <div className="mb-8">
            <TextGenerateEffect 
              words="Elevate Your Digital Presence with Lashura Global"
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            />
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Transform your business with cutting-edge web development, mobile apps, 
            SEO optimization, and AI-powered digital marketing solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 bg-white text-brand-indigo hover:bg-gray-100 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white to-gray-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:border-white/60"
            >
              <span>Explore Services</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
