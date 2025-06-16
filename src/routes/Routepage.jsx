import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePages/HomePage";
import MedicianPage from "../pages/MedicianPage/MedicianPage";
import Groceriespage from "../pages/GroceriesPage/Groceriespage";
import ClothsPage from "../pages/ClothsPage/ClothsPage";
import ContactPage from "../pages/ContactUs/ContactPage";

const Routepage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicines" element={<MedicianPage />} />
        <Route path="/groceries" element={<Groceriespage />} />
        <Route path="/clothes" element={<ClothsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Routepage;
