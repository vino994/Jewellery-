import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FestivalBridalSection.css";

function FestivalBridalSection() {
  return (
    <section className="festival-bridal-section">
      <Container>
        <Row className="align-items-center mb-5">
          {/* Left Content */}
          <Col md={6} className="text-content">
            <h2>
              Celebrate with{" "}
              <span className="highlight">Bridal & Festival Jewellery</span>
            </h2>
            <p>
              From bridal collections to festive specials, our handcrafted gold,
              silver and diamond jewellery makes every celebration more radiant.
              Choose from bangles, necklaces, rings and more.
            </p>
            <p>
              Perfect for weddings, engagements, Diwali, Navaratri, and other
              special occasions. Get jewellery delivered with **purity
              assurance** and **premium finish**.
            </p>

          <div className="cta-buttons mb-5">
  <Button href="tel:+919284935310" className="talk-btn">
    <FaPhoneAlt className="me-2" /> Call to Order
  </Button>
  <Button
    href="https://wa.me/919284935310"
    target="_blank"
    className="whatsapp-btn"
  >
    <FaWhatsapp className="me-2" /> WhatsApp Us
  </Button>
</div>

          </Col>

          {/* Right Images */}
          <Col md={6} className="image-gallery">
            <div className="main-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/j24.webp"}
                alt="Bridal Jewellery"
                className="img-fluid"
              />
            </div>
            <div className="small-images mt-3 d-flex gap-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/j25.jpg"}
                alt="Festival Collection"
                className="img-fluid"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/j28.jpg"}
                alt="Wedding Jewellery"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FestivalBridalSection;
