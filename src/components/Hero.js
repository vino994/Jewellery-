import React, { useMemo, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { GiDiamondRing, GiCutDiamond, GiCrown } from "react-icons/gi";
import "./Hero.css";

function Hero() {
  // ===== Product Data =====
  const productData = [
    {
      id: 1,
      img: "/assets/bracelet6.jpg",
      title: "Kada Bracelet",
      category: "bracelet",
      gallery: ["/assets/silver5.webp", "/assets/silver6.jpeg", "/assets/silver4.jpeg"],
    },
    {
      id: 2,
      img: "/assets/silver5.webp",
      title: "Silver Kada",
      category: "bracelet",
      gallery: ["/assets/bracelet.webp", "/assets/bracelet4.avif", "/assets/bracelet5.webp"],
    },
    {
      id: 3,
      img: "/assets/j1.jpg",
      title: "Silver Temple Ring",
      category: "ring",
      gallery: ["/assets/j4.jpg", "/assets/j2.jpg", "/assets/j3.jpg"],
    },
    {
      id: 6,
      img: "/assets/j44.jpeg",
      title: "Handmade Temple Necklace",
      category: "necklace",
      gallery: ["/assets/j16.jpg", "/assets/j18.avif", "/assets/j19.webp"],
    },
    {
      id: 9,
      img: "/assets/j46.webp",
      title: "Bridal Jewellery Set",
      category: "jewellery sets",
      gallery: ["/assets/j47.jpg", "/assets/j48.webp", "/assets/j49.jpg"],
    },
    {
      id: 12,
      img: "/assets/s1.jpg",
      title: "Lakshmi Silver Pendant",
      category: "silver items",
      gallery: ["/assets/s2.jpg", "/assets/s3.webp", "/assets/s4.webp"],
    },
  ];

  // ===== Collect all images =====
  const allImages = productData.flatMap((p) => [p.img, ...(p.gallery || [])]);

  // ===== State for Modal + Pagination =====
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(allImages.length / itemsPerPage);
  const currentImages = allImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // ===== Sparkles (floating background) =====
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <>
      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/j23.png)`,
        }}
      >
        <div className="overlay"></div>

        {/* Sparkle Layer ✨ */}
        <div className="sparkle-layer">
          {sparkles.map((sparkle, i) => (
            <span
              key={i}
              className="sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                animationDelay: sparkle.delay,
              }}
            ></span>
          ))}
        </div>

        {/* Floating Jewellery Icons 💍 */}
        <div className="floating-icon icon1"><GiDiamondRing /></div>
        <div className="floating-icon icon2"><GiCutDiamond /></div>
        <div className="floating-icon icon3"><GiCrown /></div>
        <div className="floating-icon icon4"><GiCutDiamond /></div>

        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col md={6} className="hero-text">
              <h1>
                Shine <span>& Sparkle</span>
              </h1>
              <h2>
                CLEARANCE <span>Sale</span>
              </h2>
              <p>
                Discover timeless elegance crafted for you.  
                Enjoy an extra <strong>10% off</strong> on featured jewellery.
              </p>
              <Button className="hero-btn" onClick={() => setShowModal(true)}>
                ✨ See all collections
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Modal with Pagination ===== */}
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
            {currentImages.map((img, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                <img
                  src={process.env.PUBLIC_URL + img}
                  alt="Collection Item"
                  className="img-fluid collection-img"
                />
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          <div className="pagination-controls text-center mt-3">
            <Button
              variant="outline-light"
              className="me-2"
              disabled={currentPage === 1}
              onClick={handlePrev}
            >
              Prev
            </Button>
            <span className="page-indicator">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline-light"
              className="ms-2"
              disabled={currentPage === totalPages}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Hero;
