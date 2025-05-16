import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import bgImage from '../../photos/redbull6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const videoRef = useRef(null);
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });

        const video = videoRef.current;
        if (!video) return;

        const initVideo = async () => {
            try {
                video.muted = isMuted;
                await video.load();
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Auto-play was prevented, handle silently
                        setIsVideoEnded(true);
                    });
                }
            } catch (error) {
                console.error('Video playback error:', error);
                setIsVideoEnded(true);
            }
        };

        initVideo();

        return () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        };
    }, [isMuted]);

    const handleVideoEnded = () => {
        setIsVideoEnded(true);
    };

    const handlePlayAgain = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsVideoEnded(false);
        }
    };

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };




    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section with Video */}
            <section className="w-full h-screen relative bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        onEnded={handleVideoEnded}
                        playsInline
                        autoPlay
                        src="/photos/Dragons.mp4"
                    />
                </div>

                {/* Overlay for gradient and content */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>

                {/* Video Controls and Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Sound Control Button */}
                    <div className="absolute bottom-8 right-8 z-30">
                        <button
                            onClick={toggleSound}
                            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm 
                                     flex items-center justify-center hover:bg-black/70 transition-all duration-300
                                     border border-white/20 hover:border-white/40"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                            {isMuted ? (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Play Again Overlay */}
                    {isVideoEnded && (
                        <div className="absolute inset-0 flex items-end justify-center bg-cover bg-center z-20 "
                        >
                            
                            <div className="text-center px-4 z-20">
                                <button
                                    onClick={handlePlayAgain}
                                    className="font-syncopate px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue z-5000 text-white rounded-full 
                                             hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105
                                             md:text-lg text-base"
                                >
                                    PLAY AGAIN
                                </button>
                            </div>

                            <div className='absolute inset-0'>
                                <img src={bgImage} className='w-full h-full object-contain lg:object-cover' alt="" />
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    {isVideoEnded && (
                        <div className="text-center px-4 z-20">
                            
                            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                                RED BULL
                            </h1>
                            <p className="font-rajdhani text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto">
                                Gives You Wings
                            </p>
                            <Link
                                to="/products"
                                className="font-syncopate px-6 md:px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                                  hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105
                                  text-sm md:text-base"
                            >
                                SHOP NOW

                            </Link>
                        </div>
                    )}
                </div>
            </section >

            {/* Product Gallery Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                            OUR PRODUCTS
                        </h2>
                        <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
                            Discover our range of energy drinks designed to give you wings
                        </p>
                    </motion.div>
                    <ProductGallery />
                </div>
            </section>

            {/* Product Details Section */}
            <ProductDetails />

            {/* Energy Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                            UNLEASH YOUR ENERGY
                        </h2>
                        <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
                            Experience the power of Red Bull and unlock your full potential
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black/50 p-8 rounded-lg border border-gray-800 transform transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">PERFORMANCE</h3>
                            <p className="font-rajdhani text-gray-300">Enhance your physical and mental performance with Red Bull's unique formula</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-black/50 p-8 rounded-lg border border-gray-800 transform transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">FOCUS</h3>
                            <p className="font-rajdhani text-gray-300">Improve concentration and reaction time when you need it most</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-black/50 p-8 rounded-lg border border-gray-800 transform transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">ENERGY</h3>
                            <p className="font-rajdhani text-gray-300">Get the boost you need to power through your day with confidence</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                            READY TO TAKE FLIGHT?
                        </h2>
                        <p className="font-rajdhani text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Join millions of people who trust Red Bull to give them wings
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/products"
                                className="font-syncopate px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                                         hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105"
                            >
                                SHOP NOW
                            </Link>
                            <Link
                                to="/about"
                                className="font-syncopate px-8 py-3 border-2 border-redbull-red text-white rounded-full 
                                         hover:bg-redbull-red/10 transition-all duration-300 transform hover:scale-105"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div >
    );
};

export default Home; 