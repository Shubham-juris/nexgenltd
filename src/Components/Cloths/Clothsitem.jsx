import React from "react";
import { motion } from "framer-motion";
import tshirt from "../../assets/cloths/tShirt.webp";
import kurti from "../../assets/cloths/kurti.jpeg";
import jeans from "../../assets/cloths/jeans.jpg";
import formalShirt from "../../assets/cloths/formalShirt.jpg";
import saree from "../../assets/cloths/saree.avif";
import hoodie from "../../assets/cloths/hoodie.webp";
import frock from "../../assets/cloths/frock.jpg";
import joggers from "../../assets/cloths/joggers.avif";
import jacket from "../../assets/cloths/jacket.jpg";
import shorts from "../../assets/cloths/shorts.avif";
import leggings from "../../assets/cloths/leggings.avif";
import blazer from "../../assets/cloths/blazer.jpeg";
import skirt from "../../assets/cloths/skirt.jpeg";

const products = [
  { name: "Men's T-Shirt", img: tshirt },
  { name: "Women's Kurti", img: kurti },
  { name: "Denim Jeans", img: jeans },
  { name: "Formal Shirt", img: formalShirt },
  { name: "Cotton Saree", img: saree },
  { name: "Hoodie", img: hoodie },
  { name: "Kid's Frock", img: frock },
  { name: "Joggers", img: joggers },
  { name: "Winter Jacket", img: jacket },
  { name: "Shorts", img: shorts },
  { name: "Leggings", img: leggings },
  { name: "Blazer", img: blazer },
  { name: "Skirt", img: skirt },
];

const Clothsitem = () => {
  return (
    <section className="relative py-10 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90 pointer-events-none z-0" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-contain rounded mb-4 mx-auto"
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

export default Clothsitem;
