import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal, Carousel } from "react-bootstrap";
import "./NewArrivalSection.css";

import emailjs from "emailjs-com";

function NewArrivalSection() {
  // ===== Newsletter State =====
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_lilibt4", // ✅ your EmailJS service ID
        "template_n1cxwq8", // ✅ your template ID
        templateParams,
        "-ofppnO1dVjdcg5jI" // ✅ your public key
      )
      .then(
        () => {
          setShowSuccess(true); // show popup
          setEmail("");
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to subscribe. Try again.");
        }
      );
  };

  // ===== Product Data (sample) =====
  const productData = [
    {
      id: 9,
      img: "/assets/j46.webp",
      title: "Bridal Jewellery Set",
      category: "jewellery sets",
      description:
        "Complete bridal jewellery set including necklace, earrings, maang tikka and bangles. Crafted for Indian brides with premium stones and traditional patterns.",
      gallery: [
        "/assets/j47.jpg",
        "/assets/j48.webp",
        "/assets/j49.jpg",
        "/assets/j50.jpg",
        "/assets/j51.webp",
      ],
    },
    {
      id: 6,
      img: "/assets/j44.jpeg",
      title: "Handmade Temple Necklace",
      category: "necklace",
      gallery: ["/assets/j16.jpg", "/assets/j18.avif", "/assets/j19.webp", "/assets/j20.jpeg"],
    },
    {
      id: 1,
      img: "/assets/bracelet6.jpg",
      title: "Kada Bracelet",
      category: "bracelet",
      gallery: ["/assets/silver5.webp", "/assets/silver6.jpeg", "/assets/silver4.jpeg"],
    },
  ];

  // ===== Promo Item =====
  const promoItem = productData.find((p) => p.category === "jewellery sets");

  // ===== Modal State =====
  const [showModal, setShowModal] = useState(false);

  // ===== Carousel State =====
  const [activeIndex, setActiveIndex] = useState(0);

  // ===== Collect all gallery images =====
  const allImages = productData.flatMap((p) => p.gallery || [p.img]);

  return (
    <section className="new-arrival-section">
      <Container fluid>
        <Row>
          {/* Left Side - Promo */}
          <Col md={6} className="promo-left d-flex align-items-center">
            <div className="promo-content">
              <h4 className="highlight">New Arrivals</h4>
              <h2>{promoItem?.title || "Jewellery Sets"}</h2>
              <p>
                {promoItem?.description ||
                  "Discover our finest jewellery sets, crafted with elegance and purity. Perfect for every special occasion."}
              </p>
              <Button
                variant="outline-warning"
                className="collection-btn"
                onClick={() => setShowModal(true)}
              >
                See all collections
              </Button>
            </div>
            <div className="promo-img">
              <img
                src={process.env.PUBLIC_URL + (promoItem?.img || "/assets/j46.webp")}
                alt={promoItem?.title || "Jewellery Set"}
                className="img-fluid"
              />
            </div>
          </Col>

          {/* Right Side - Newsletter */}
          <Col
            md={6}
            className="newsletter-right d-flex flex-column justify-content-center text-center"
          >
            <h3>
              <span className="highlight">Stay in the know</span>
            </h3>
            <p>Trust us, you’ll want to hear what we have to say</p>
            <Form
              className="newsletter-form d-flex justify-content-center"
              onSubmit={handleSubmit}
            >
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="subscribe-btn">
                <i className="bi bi-envelope"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* ===== Modal with Carousel & Thumbnails ===== */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        contentClassName="collection-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Our Jewellery Collections</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Main Carousel */}
          <Carousel
            fade
            interval={3000}
            indicators={false}
            controls
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            className="collection-carousel"
          >
            {allImages.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={process.env.PUBLIC_URL + img}
                  alt={`Collection ${index}`}
                  className="d-block w-100 modal-carousel-img"
                />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnails */}
          <div className="thumbnail-strip mt-3 d-flex justify-content-center flex-wrap gap-2">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + img}
                alt={`Thumb ${index}`}
                className={`thumbnail-img ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* ===== Success Popup ===== */}
      <Modal
        show={showSuccess}
        onHide={() => setShowSuccess(false)}
        centered
        size="sm"
        contentClassName="success-modal"
      >
        <Modal.Body className="text-center">
          <h5 className="success-title">✅ Subscription Successful!</h5>
          <p>Thank you for subscribing. We’ll keep you updated.</p>
          <Button className="close-btn" onClick={() => setShowSuccess(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default NewArrivalSection;
