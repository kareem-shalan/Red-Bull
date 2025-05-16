import React, { createContext, useContext } from 'react';

const ProductContext = createContext();

export const products = [
  {
    id: 1,
    name: 'Red Bull Energy Drink',
    description: 'The original energy drink that gives you wings',
    price: '$2.99',
    image: '/photos/redbull1.png'
  },
  {
    id: 8,
    name: 'Red Bull Sugarfree',
    description: 'Same great taste, zero sugar',
    price: '$2.99',
    image: '/photos/redbull8.png'
  },
  {
    id: 10,
    name: 'Red Bull Sugarfree',
    description: 'Same great taste, zero sugar',
    price: '$2.99',
    image: '/photos/tiny_figuresred_bull_2.png'
  },
  {
    id: 9,
    name: 'Red Bull Sugarfree',
    description: 'Same great taste, zero sugar',
    price: '$2.99',
    image: '/photos/tiny_figures_ed_bull.png'
  },

  {
    id: 3,
    name: 'Red Bull Zero',
    description: 'Zero calories, maximum energy',
    price: '$2.99',
    image: '/photos/redbull3.png'
  },
  {
    id: 4,
    name: 'Red Bull Tropical',
    description: 'Exotic tropical flavor experience',
    price: '$2.99',
    image: '/photos/redbull4.png'
  },
  {
    id: 5,
    name: 'Red Bull Blueberry',
    description: 'Sweet and refreshing blueberry taste',
    price: '$2.99',
    image: '/photos/redbull5.png'
  },
  {
    id: 6,
    name: 'Red Bull Watermelon',
    description: 'Juicy watermelon refreshment',
    price: '$2.99',
    image: '/photos/redbull6.png'
  },
  {
    id: 7,
    name: 'Red Bull Coconut',
    description: 'Tropical coconut delight',
    price: '$2.99',
    image: '/photos/redbull7.png'
  }
];

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 
    