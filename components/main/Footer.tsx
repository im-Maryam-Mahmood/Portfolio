import React from 'react';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-300 py-10 relative z-[10]" id='contact'> {/* Set z-index here */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-10">
        {/* Get in Touch Section */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-4xl font-sans">
            GET IN TOUCH
          </span>
          <br /><br /><br />
        </div>

        {/* Icons Section */}
        <div className="flex flex-row items-center justify-center space-x-10 mb-6">
          <a 
            href="https://www.linkedin.com/in/maryam-mahmood2811/" 
            className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
            target="_blank" 
            rel=""
          >
            <RxLinkedinLogo className="text-4xl" />
          </a>
          
          <a 
            href="https://github.com/im-Maryam-Mahmood" 
            className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
            target="_blank" 
            rel=""
          >
            <RxGithubLogo className="text-4xl" />
          </a>

          <a  
            href="mailto:maryammahmood.2811@gmail.com" 
            className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="text-4xl" />
          </a>
        </div>

        <div className="text-center mt-6 text-sm font-sans">
          &copy; 2024 All rights reserved - Maryam Mahmood
        </div>
      </div>
    </div>
  );
};

export default Footer;
