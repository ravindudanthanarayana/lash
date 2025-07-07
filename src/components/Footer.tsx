import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 sm:gap-6 sm:px-6 sm:py-6">
        {/* Logo & Socials */}
        <div className="flex items-center gap-4 w-full sm:w-auto mb-2 sm:mb-0">
          <img 
            src="/lovable-uploads/d9e7d77a-5740-472c-83a5-e0f658a73c9a.png" 
            alt="Lashura Global" 
            className="h-7 w-auto"
          />
          <div className="flex gap-2 ml-2 sm:ml-4">
            <a href="#" className="bg-white/10 p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/10 p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/10 p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/10 p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Copyright & Policies */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-gray-200 w-full sm:w-auto">
          <span className="block mb-1 sm:mb-0">© {new Date().getFullYear()} Lashura Global. All rights reserved.</span>
          <span className="block">Contact us : <a href="tel:+94782920885" className="hover:text-white underline transition-colors duration-200">+94782920885</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
