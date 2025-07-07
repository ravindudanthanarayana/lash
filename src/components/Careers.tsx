import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Clock, Users, TrendingUp, Heart, Zap, Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedCursor } from '@/components/ui/animated-cursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Careers = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // const openPositions = [
  //   {
  //     id: 1,
  //     title: 'Graphic Designer',
  //     department: 'Design',
  //     location: 'Kandy',
  //     type: 'Full-time',
  //     experience: 'Fresh Graduates',
  //     description: 'Create beautiful and intuitive user experiences for our digital products and platforms.',
  //     skills: ['Adobe Creative Suite', 'User Research', 'Prototyping'],
  //     isHot: false
  //   },
  //   {
  //     id: 2,
  //     title: 'Digital Marketing Specialist',
  //     department: 'Marketing',
  //     location: 'Remote',
  //     type: 'Full-time',
  //     experience: '1-3 years',
  //     description: 'Drive our digital presence and growth through strategic marketing campaigns and content creation.',
  //     skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
  //     isHot: true
  //   }
  // ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible working hours'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Growth',
      description: 'Continuous learning and professional development'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Performance Bonus',
      description: 'Competitive salary with performance-based bonuses'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {!isMobile && <AnimatedCursor />}
      {/* Back to Home Button */}
      <div className="relative z-20 pt-6 px-4">
        <Button 
          onClick={() => navigate('/')}
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-blue-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of digital innovation. 
            We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Stats */}
       
        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          {/* No available vacancies message */}
          <div className="text-center text-gray-300 text-xl py-12">
            No available vacancies now
          </div>
          {/*
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {position.department} • {position.location}
                      </CardDescription>
                    </div>
                    {position.isHot && (
                      <Badge className="bg-red-500 text-white">Hot</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.experience}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          */}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Resume
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md">
                  Contact HR
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers; 