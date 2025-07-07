import React from 'react';
import { Monitor, Smartphone, Search, Share2, Cpu, Code, ArrowRight, Zap } from 'lucide-react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

const Services = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      designation: 'Web Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      designation: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Michael Chen',
      designation: 'SEO Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Improve visibility and drive organic traffic to your website.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns to build your brand presence across platforms.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Tailored software solutions to streamline your business processes.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning implementations.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-white font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Services That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
          
          <AnimatedTooltip items={teamMembers} />
        </div> */}
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DirectionAwareHover
                imageUrl={service.image}
                className="h-80 rounded-2xl overflow-hidden group cursor-pointer"
                childrenClassName="relative h-full flex flex-col justify-end p-6 glass-effect"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-lg text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
