import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductGallery = () => {
  const { products } = useProducts();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.id}
          className="group relative bg-black/50 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
        >
          
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <h3 className="font-orbitron text-xl font-bold mb-2 text-white">
                {product.name}
              </h3>
              <p className="font-rajdhani text-gray-300 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-chakra text-2xl font-bold text-redbull-red">
                  {product.price}
                </span>
                <Link to={`/product/${product.id}`} className="block">
                <div className="flex gap-2">
                  <button className="font-syncopate px-4 py-2 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                           hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300">
                    SHOP NOW
                  </button>
                </div>
          </Link>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery; 