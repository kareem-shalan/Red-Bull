import React from 'react';

const Logo = () => {
  return (
    <div className="relative">
      {/* Logo Image */}
      <div className="w-12 h-12 relative">
        <img 
          src="/photos/logo.png" 
          alt="Red Bull Logo" 
          className="w-full h-full object-contain"
        />
        
        {/* Glow Effect */}
        <div className="absolute -inset-2 rounded-full bg-redbull-red/10 blur-md" />
      </div>
    </div>
  );
};

export default Logo; 