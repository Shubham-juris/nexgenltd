import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import MedicianPage from "../pages/medicianPage/MediciansPage";
import Groceriespage from "../pages/grociriesPage/GrociriesPage";
import ClothsPage from "../pages/clothsPage/ClothesPage";
import ContactPage from "../pages/contactUs/ContactUspage";

const Routepage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/medicines" element={<MedicianPage />} />
        <Route path="/groceries" element={<Groceriespage />} />
        <Route path="/clothes" element={<ClothsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>                              
  );
};

export default Routepage;
