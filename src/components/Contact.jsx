import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/kareem-shalan/',
      label: 'LinkedIn'
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/kemo.mohamed.31586/',
      label: 'Facebook'
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/kemo_shalan/',
      label: 'Instagram'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:kareemmohamedali330@gmail.com',
      label: 'Email'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      url: 'tel:+201272958197',
      label: 'Phone'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue rounded-full 
                       text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-redbull-red/20"
            >
              {link.icon}
              <span className="hidden md:inline font-rajdhani">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 