import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,

  FaInstagram,
  
  FaWhatsapp,
} from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        {/* Logo + Name */}
        <div className="footer-logo">
          <GiCutDiamond className="diamond-icon" />
          <h3 className="brand-name">SAIT JEWELS</h3>
          <p className="tagline">Gold & Silver  Collection</p>
        </div>

        {/* Description */}
        <p className="footer-description">
          Discover timeless jewellery that blends tradition and modern
          craftsmanship. Designed to make every moment unforgettable.
        </p>

        {/* Social Links */}
        <p className="follow-text">Follow us on</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1EaEm8k6sh/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
         
          <a href="https://www.instagram.com/nileshpanu?igsh=dW9iOGpvcWE4Y3lo" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
      
          <a href="https://wa.me/919284935310" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} SAIT JEWELS. Owner of Krishna Sait.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
