import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../context/ProductContext';

function CurrentProduct() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-orbitron text-4xl text-redbull-red mb-4">Product Not Found</h1>
                    <Link to="/products" className="font-syncopate mt-8 text-gray-400 hover:text-white transition-colors duration-300">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="relative aspect-square rounded-md">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain rounded-xl" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                            {product.name}
                        </h1>
                        <p className="font-rajdhani text-xl text-gray-300 mb-8">{product.description}</p>
                        <p className="font-chakra text-3xl font-bold text-redbull-red mb-8">{product.price}</p>
                        <div className="flex gap-4">
                            <button className="font-syncopate px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105">
                                ADD TO CART
                            </button>
                            <button className="font-syncopate px-8 py-3 border-2 border-redbull-red text-white rounded-full hover:bg-redbull-red/10 transition-all duration-300 transform hover:scale-105">
                                BUY NOW
                            </button>
                        </div>
                        <Link to="/products" className="font-syncopate mt-8 text-gray-400 hover:text-white transition-colors duration-300">
                            ← Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentProduct;

