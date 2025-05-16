import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import backgroundImage from '../../public/images/redbull2.png';
const Products = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-40 lg:py-60 bg-gradient-to-b from-black to-gray-900 relative"
       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center"
         
          >
            
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
              OUR PRODUCTS
            </h1>
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our range of energy drinks designed to give you wings whenever you need them
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ProductGallery />
        </div>
      </section>

      {/* Product Details */}
      <ProductDetails />
    </div>
  );
};

export default Products; 