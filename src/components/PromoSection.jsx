import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./PromoSection.css";

function PromoSection() {
  // ====== Promo Offers Data ======
  const offers = [
    {
      id: 1,
      img: "/assets/j22.jpg",
      discount: "15% Off",
      title: "Gold Bangles Collection",
    },
    {
      id: 2,
      img: "/assets/j20.jpeg",
      discount: "25% Off",
      title: "Temple Jewellery Collection",
    },
  ];

  // ====== Features Data ======
  const features = [
    {
      id: 1,
      icon: "bi bi-truck",
      title: "FREE DELIVERY",
      desc: "Safe and secure delivery for all jewellery orders.",
    },
    {
      id: 2,
      icon: "bi bi-gift",
      title: "FESTIVE OFFERS",
      desc: "Exciting discounts during weddings and festive seasons.",
    },
    {
      id: 3,
      icon: "bi bi-shield-check",
      title: "PURITY GUARANTEED",
      desc: "Certified gold & silver with assured quality.",
    },
  ];

  // ====== Collection Images ======
  const collectionImages = [
    "/assets/j1.jpg",
    "/assets/j2.jpg",
    "/assets/j3.jpg",
    "/assets/j4.jpg",
    "/assets/j5.jpg",
    "/assets/j6.jpg",
    "/assets/j7.jpg",
    "/assets/j8.jpg",
  ];

  // ====== Modal State ======
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="promo-section">
      <Container>
        {/* ====== Top Promo Offers ====== */}
        <Row className="mb-5">
          {offers.map((offer) => (
            <Col key={offer.id} md={6} sm={12} className="promo-banner">
              <img src={offer.img} alt={offer.title} />
              <div className="promo-text">
                <h4>{offer.discount}</h4>
                <p>{offer.title}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* ====== Features Row ====== */}
        <Row className="text-center mb-5 features-row">
          {features.map((feature) => (
            <Col key={feature.id} md={4}>
              <i className={feature.icon}></i>
              <h6>{feature.title}</h6>
              <p>{feature.desc}</p>
            </Col>
          ))}
        </Row>

        {/* ====== Diamond Collection Section ====== */}
        <Row className="diamond-section align-items-center">
          <Col md={6}>
            <h2>
              Discover our{" "}
              <span className="highlight">Exquisite Bangle Collection</span>
            </h2>
            <p>
              Handcrafted diamond necklaces, rings and bangles with unmatched
              brilliance and purity. Perfect for weddings, engagements and
              timeless celebrations.
            </p>
            <p>
              Explore jewellery that blends Indian tradition with modern
              craftsmanship, designed to make every occasion unforgettable.
            </p>

            {/* Phone Call Button */}
            <Button className="talk-btn" href="tel:+919876543210">
              Let’s Talk
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/assets/j21.jpg"
              alt="Diamond Necklace"
              className="diamond-img"
            />

            {/* Open Modal Button */}
            <Button
              variant="outline-warning"
              className="mt-3"
              onClick={() => setShowModal(true)}
            >
              See all collections
            </Button>
          </Col>
        </Row>
      </Container>

      {/* ====== Modal for Collections ====== */}
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
          <Row>
            {collectionImages.map((img, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                <img
                  src={process.env.PUBLIC_URL + img}
                  alt="Collection Item"
                  className="img-fluid collection-img"
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default PromoSection;
