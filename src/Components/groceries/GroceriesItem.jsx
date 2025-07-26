import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../../assets/Groceries/apple.webp';
import oil from '../../assets/Groceries/oil.avif';
import Toothpaste from '../../assets/Groceries/Toothpaste.jpg';
import Rice from '../../assets/Groceries/Rice.jpg';
import Shampoo from '../../assets/Groceries/Shampoo.webp';
import milk from '../../assets/Groceries/milk.jpg'; 
import bread from '../../assets/Groceries/bread.webp'; 
import Green from "../../assets/Groceries/green.jpg";
import Sugar from "../../assets/Groceries/sugar.webp";
import Salt from "../../assets/Groceries/salt.webp";
import Eggs from "../../assets/Groceries/eggs.jpg";
import Butter from "../../assets/Groceries/butter.jpg";
import Yogurt from "../../assets/Groceries/Yogurt.jpg";

const products = [
  { name: 'Organic Apples', img: img1 },
  { name: 'Fresh Milk', img: milk },
  { name: 'Cooking Oil', img: oil },
  { name: 'Toothpaste', img: Toothpaste },
  { name: 'Shampoo', img: Shampoo },
  { name: 'Whole Wheat Bread', img: bread },
  { name: 'Rice (1kg)', img: Rice },
  { name: 'Green Vegetables', img: Green },
  { name: 'Sugar (1kg)', img: Sugar },
  { name: 'Salt (1kg)', img: Salt },
  { name: 'Eggs (12 Pack)', img: Eggs },
  { name: 'Butter', img: Butter },
  { name: 'Yogurt', img: Yogurt },
];

const GrocerieItem = () => {
  return (
    <section className="relative py-10 px-4 md:px-16 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none z-0" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrocerieItem;
