import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center lg:text-left gap-3 lg:gap-6 sm:px-6 sm:py-6 text-xs font-normal">
        {/* Logo & Socials */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-4 w-full lg:w-auto mb-2 lg:mb-0">
          <img 
            src="/lovable-uploads/d9e7d77a-5740-472c-83a5-e0f658a73c9a.png" 
            alt="Lashura Global" 
            className="h-7 w-auto mb-2 lg:mb-0"
          />
          <div className="flex gap-2 justify-center lg:ml-4">
            <a href="mailto:lashuraglobal@gmail.com" className="bg-white/10 p-1.5 hover:bg-white/20 transition-colors duration-200 text-xs font-normal" target="_blank" rel="noopener noreferrer">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://wa.me/94782920885" className="bg-white/10 p-1.5 hover:bg-white/20 transition-colors duration-200 text-xs font-normal" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/lashura/" className="bg-white/10 p-1.5 hover:bg-white/20 transition-colors duration-200 text-xs font-normal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/lashura.global?igsh=Z2dmY2owMWduNmEx" className="bg-white/10 p-1.5 hover:bg-white/20 transition-colors duration-200 text-xs font-normal" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Copyright & Policies */}
        <div className="flex flex-col items-center text-center gap-1 w-full lg:w-auto lg:flex-row lg:items-center lg:text-left lg:gap-6">
          <span className="block text-xs font-normal">© {new Date().getFullYear()} Lashura Global. All rights reserved.</span>
          <span className="block text-xs font-normal">No,65/1A, Hewahata Road, Talwatta, Kandy</span>
          <span className="block text-xs font-normal">Contact us : <a href="tel:+94782920885" className="hover:text-white underline transition-colors duration-200 text-xs font-normal">+94782920885</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
