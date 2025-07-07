import React from 'react';
import { FloatingNavbar } from '@/components/ui/floating-navbar';

const Navigation = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Careers', href: '/careers' },
    { name: "Let's talk", href: '#get-started' },
  ];

  return <FloatingNavbar navItems={navItems} />;
};

export default Navigation;
