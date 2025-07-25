import React from "react";
import bgImage from '../../assets/Groceries/home.jpg';

const GroceriesHome = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white px-6 py-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </>
  );
};

export default GroceriesHome;
