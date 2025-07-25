import React from "react";
import "./App.css";
import Navbar from "./Components/common/Navbar";
import Routepage from "./routes/RoutesPage";
import Footer from "./Components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routepage />
      <Footer />
    </>
  );
}

export default App;
