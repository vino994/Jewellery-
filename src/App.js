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
      <section id="home"><Hero /></section>
      <section id="products"><Products /></section>
      <section id="festival"><FestivalBridalSection /></section>
      <section id="promo"><PromoSection /></section>
      <section id="new-arrival"><NewArrivalSection /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;
