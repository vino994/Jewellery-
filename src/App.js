import React from "react";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";
import PromoSection from "./components/PromoSection";
import FestivalBridalSection from "./components/FestivalBridalSection";
import NewArrivalSection from "./components/NewArrivalSection";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Products />
      <FestivalBridalSection />
      <PromoSection />
      <NewArrivalSection />
      {/* Future sections here: Lookbook, Blog, Shop, etc. */}
      <Footer />
    </div>
  );
}

export default App;
