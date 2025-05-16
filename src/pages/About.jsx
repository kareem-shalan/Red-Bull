import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
              ABOUT RED BULL
            </h1>
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Inspiring people and ideas since 1987
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-3xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                OUR STORY
              </h2>
              <div className="font-rajdhani text-gray-300 space-y-4">
                <p>
                  Red Bull has been giving wings to people and ideas since 1987. The brand is known around the world 
                  for its iconic energy drink, which was inspired by functional drinks from East Asia.
                </p>
                <p>
                  Today, Red Bull is available in over 170 countries, and more than 7.5 billion cans of Red Bull are 
                  consumed each year. The brand has become synonymous with high performance, entrepreneurship, and pushing boundaries.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/photos/redbullStory.png"
                alt="Red Bull Story"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
              OUR MISSION
            </h2>
            <p className="font-rajdhani text-xl text-gray-300 max-w-3xl mx-auto">
              To inspire and energize the world, one can at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
              <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">INNOVATION</h3>
              <p className="font-rajdhani text-gray-300">
                Continuously pushing boundaries and setting new standards in energy drinks
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
              <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">QUALITY</h3>
              <p className="font-rajdhani text-gray-300">
                Delivering premium products with the highest standards of quality and safety
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
              <h3 className="font-chakra text-2xl font-bold mb-4 text-redbull-red">SUSTAINABILITY</h3>
              <p className="font-rajdhani text-gray-300">
                Committed to sustainable practices and environmental responsibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-orbitron text-4xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
              JOIN THE MOVEMENT
            </h2>
            <p className="font-rajdhani text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of Red Bull and become part of our story
            </p>
            <Link
              to="/products"
              className="font-syncopate px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                       hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105"
            >
              EXPLORE OUR PRODUCTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 