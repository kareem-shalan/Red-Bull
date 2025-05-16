import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const CustomCursor = ({ cursorSpeed = 0.8, trailSpeed = 0.4, magneticStrength = 30 }) => {
  const cursorRef = useRef(null);
  const cursorOuterRef = useRef(null);

  // Spring animations for smooth cursor movement
  const mouseX = useSpring(0, { stiffness: 1000 * cursorSpeed, damping: 100 * cursorSpeed });
  const mouseY = useSpring(0, { stiffness: 1000 * cursorSpeed, damping: 100 * cursorSpeed });

  // Trail animations
  const trailX = useSpring(0, { stiffness: 200 * trailSpeed, damping: 40 * trailSpeed });
  const trailY = useSpring(0, { stiffness: 200 * trailSpeed, damping: 40 * trailSpeed });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update spring animations
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);

      // Handle magnetic effect for interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [data-magnetic]');
      
      interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + 
          Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < magneticStrength * 2) {
          const strength = (magneticStrength * 2 - distance) / (magneticStrength * 2);
          mouseX.set(centerX + (e.clientX - centerX) * (1 - strength));
          mouseY.set(centerY + (e.clientY - centerY) * (1 - strength));
        }
      });
    };

    // Handle cursor visibility
    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, trailX, trailY, magneticStrength]);

  // Transform values for cursor and trail positions
  const cursorX = useTransform(mouseX, (x) => x - 4);
  const cursorY = useTransform(mouseY, (y) => y - 4);
  const trailOuterX = useTransform(trailX, (x) => x - 15);
  const trailOuterY = useTransform(trailY, (y) => y - 15);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ mixBlendMode: 'difference' }}>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-redbull-red rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full"
        style={{
          x: trailOuterX,
          y: trailOuterY,
          border: '2px solid rgba(255, 0, 0, 0.3)',
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)',
        }}
      />

      {/* Energy trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full opacity-50"
        style={{
          x: useTransform(trailX, (x) => x - 8),
          y: useTransform(trailY, (y) => y - 8),
          background: 'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0) 70%)',
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)',
        }}
      />
    </div>
  );
};

export default CustomCursor; 