import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollArrows = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            
            // Check if we're at the bottom
            const bottomThreshold = documentHeight - windowHeight - 100; // 100px threshold
            setIsAtBottom(scrollTop >= bottomThreshold);
            
            // Check if we're near the top
            setIsAtTop(scrollTop < 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Up Arrow - Shows when not at top */}
            <button
                onClick={scrollToTop}
                className={`${
                    !isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                } fixed bottom-8 right-8 p-3 bg-gradient-to-r from-redbull-red to-redbull-blue rounded-full text-white 
        shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-redbull-red/20 z-50`}
                aria-label="Scroll to top"
            >
                <FaArrowUp className="w-6 h-6" />
            </button>

            {/* Down Arrow - Shows when not at bottom */}
            <button
                onClick={scrollToBottom}
                className={`${
                    isAtTop && !isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                } fixed top-28 right-8 p-3 bg-gradient-to-r from-redbull-red to-redbull-blue rounded-full text-white 
        shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-redbull-red/20 z-50`}
                aria-label="Scroll to bottom"
            >
                <FaArrowDown className="w-6 h-6" />
            </button>
        </>
    );
};

export default ScrollArrows; 