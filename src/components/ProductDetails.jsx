import React from 'react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const products = [
    {
      Image: '../../public/images/pure.jpg',
      id: 1,
      name: 'Red Bull Energy Drink',
      description: 'The original Red Bull Energy Drink is the perfect companion whenever you need wings. The formula contains high-quality ingredients: Caffeine, Taurine, B-Group Vitamins, Sugars, Alpine Water.',
      benefits: [
        'Improves performance',
        'Increases concentration and reaction speed',
        'Stimulates metabolism',
        'Enhances well-being'
      ],
      ingredients: [
        'Caffeine (80 mg/250 ml)',
        'Taurine',
        'B-Group Vitamins',
        'Sucrose and Glucose',
        'Alpine Spring Water'
      ],
      nutrition: {
        serving: '250ml',
        calories: '117 kcal',
        sugar: '29g',
        protein: '0.4g',
        caffeine: '80mg'
      }
    },
    {
      Image: '../../public/images/freeSuger.png',
      id: 2,
      name: 'Red Bull Sugar Free',
      description: 'Red Bull Sugar Free provides similar benefits to Red Bull Energy Drink, but with zero sugar. Perfect for those who want wings without the sugar.',
      benefits: [
        'Zero sugar formula',
        'Same energy boost',
        'Improved mental focus',
        'Enhanced physical performance'
      ],
      ingredients: [
        'Caffeine (80 mg/250 ml)',
        'Taurine',
        'B-Group Vitamins',
        'Aspartame & Acesulfame K',
        'Alpine Spring Water'
      ],
      nutrition: {
        serving: '250ml',
        calories: '8 kcal',
        sugar: '0g',
        protein: '0.4g',
        caffeine: '80mg'
      }
    },
    {
      Image: '../../public/images/watermallon.png',
      id: 3,
      name: 'Red Bull Zero',
      description: 'Red Bull Zero offers the wings of Red Bull Energy Drink with zero sugar and zero calories. The perfect choice for a sugar-free and calorie-free energy boost.',
      benefits: [
        'Zero calories',
        'Zero sugar',
        'Full energy boost',
        'Maximum performance'
      ],
      ingredients: [
        'Caffeine (80 mg/250 ml)',
        'Taurine',
        'B-Group Vitamins',
        'Natural Sweeteners',
        'Alpine Spring Water'
      ],
      nutrition: {
        serving: '250ml',
        calories: '0 kcal',
        sugar: '0g',
        protein: '0.4g',
        caffeine: '80mg'
      }
    }
  ];

  return (
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
            PRODUCT DETAILS
          </h2>
          <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the science and benefits behind our energy drinks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/50 rounded-lg p-8 border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>

                  <h3 className="font-orbitron text-3xl font-bold mb-4 bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
                    {product.name}
                  </h3>
                  <p className="font-rajdhani text-gray-300 mb-6">
                    {product.description}
                  </p>
                  <div className="mb-6">
                    <img src={product.Image} alt={product.name} className="w-full h-[300px] object-contain rounded-md bg-black/30" />
                  </div>
                  <div className="mb-6">
                    <h4 className="font-chakra text-xl font-bold text-redbull-red mb-3">Benefits</h4>
                    <ul className="font-rajdhani text-gray-300 space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-redbull-red rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="font-chakra text-xl font-bold text-redbull-red mb-3">Ingredients</h4>
                    <ul className="font-rajdhani text-gray-300 space-y-2">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-redbull-red rounded-full mr-3"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-chakra text-xl font-bold text-redbull-red mb-3">Nutrition Facts</h4>
                    <div className="grid grid-cols-2 gap-4 font-rajdhani text-gray-300">
                      <div className="flex justify-between">
                        <span>Serving Size:</span>
                        <span>{product.nutrition.serving}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Calories:</span>
                        <span>{product.nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar:</span>
                        <span>{product.nutrition.sugar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span>{product.nutrition.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Caffeine:</span>
                        <span>{product.nutrition.caffeine}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails; 