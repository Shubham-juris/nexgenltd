import React from 'react';
import bgImage from '../../assets/home/home.jpg';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white px-6 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 p-8 rounded-2xl max-w-3xl text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NexGen Tensfree</h1>
        <p className="text-lg md:text-xl mb-6">
          NexGen Tensfree is a Global Trading company offering diverse products like households, groceries, clothes, and medicines.
          With own outlets and manufacturing, it ensures quality and timely delivery worldwide.
        </p>
      </div>
    </div>
  );
};

export default Home;
