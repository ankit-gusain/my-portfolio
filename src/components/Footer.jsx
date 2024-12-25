import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col items-center p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4 flex flex-col justify-center items-center'>
            <div className='flex gap-6 text-gray-400 text-3xl md:text-4xl'>
                {/* Github Icon */}
                <a 
                  href="https://github.com/ankit-gusain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-color transition duration-300"
                >
                  <FaGithubSquare />
                </a>

                {/* Instagram Icon */}
                <a 
                  href="https://instagram.com/chilypotato" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-color transition duration-300"
                >
                  <FaInstagram />
                </a>

                {/* LinkedIn Icon */}
                <a 
                  href="https://www.linkedin.com/in/ankitsingh235475/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-color transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* Gmail Icon */}
                <a 
                  href="mailto:ankitsingh0111000@gmail.com" 
                  className="hover:text-primary-color transition duration-300"
                >
                  <FaEnvelope />
                </a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
