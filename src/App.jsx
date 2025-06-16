import React from "react";
import "./App.css";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Routepage from "./routes/Routepage";

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
