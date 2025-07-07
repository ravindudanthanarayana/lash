
import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in digital marketing and business strategy.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating innovative web solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      bio: 'Creative strategist specializing in digital marketing and brand development.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Mission & Vision */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Lashura Global</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-16">
            We are a forward-thinking digital marketing agency dedicated to helping businesses 
            succeed in the digital age through innovative solutions and strategic expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <Target className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance customer engagement, and create lasting competitive advantages.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <Eye className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be the leading digital transformation partner, recognized for innovation, 
                excellence, and our commitment to client success in the global marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Our diverse team of experts brings together creativity, technical expertise, 
              and strategic thinking to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                />
                <h4 className="text-2xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-200 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
