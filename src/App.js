import React from "react";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      {/* Future sections here: Lookbook, Blog, Shop, etc. */}
      <Footer />
    </div>
  );
}

export default App;
