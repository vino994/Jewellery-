import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import "./PromoSection.css";

function PromoSection() {
  // ====== Product Data ======
  const productData = [
    // ===== Bracelet =====
    {
      id: 1,
      img: "/assets/bracelet6.jpg",
      title: "Kada Bracelet",
      tag: "NEW",
      category: "bracelet",
      description:
        "Traditional kada-style bracelet crafted with intricate Indian motifs, perfect for festive and wedding wear.",
      details:
        "Made with high-quality silver and antique finish. Ideal for weddings and festive occasions.",
      gallery: [
        "/assets/silver5.webp",
        "/assets/silver6.jpeg",
        "/assets/silver4.jpeg",
        "/assets/silver1.jpeg",
        "/assets/silver2.webp",
        "/assets/silver3.webp",
        "/assets/bracelet.webp",
        "/assets/bracelet4.avif",
        "/assets/bracelet5.webp",
        "/assets/bracelet1.webp",
        "/assets/bracelet3.webp",
      ],
    },
    {
      id: 2,
      img: "/assets/silver5.webp",
      title: "Silver Kada",
      tag: "NEW",
      category: "bracelet",
      description:
        "Classic silver kada bracelet with a sleek finish, ideal for daily wear or gifting.",
      details:
        "Crafted with 92.5 silver, lightweight yet durable for daily use or as a thoughtful gift.",
      gallery: [
        "/assets/silver5.webp",
        "/assets/silver6.jpeg",
        "/assets/silver4.jpeg",
        "/assets/silver1.jpeg",
        "/assets/silver2.webp",
        "/assets/silver3.webp",
        "/assets/bracelet.webp",
        "/assets/bracelet4.avif",
        "/assets/bracelet5.webp",
        "/assets/bracelet1.webp",
        "/assets/bracelet3.webp",
      ],
    },
    // ===== Rings =====
    {
      id: 3,
      img: "/assets/j1.jpg",
      title: "Silver Temple Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Handcrafted silver ring inspired by temple architecture, bringing timeless heritage into daily wear.",
      details:
        "Made in 92.5 sterling silver with divine carvings inspired by South Indian temples.",
      gallery: [
        "/assets/j4.jpg",
        "/assets/j2.jpg",
        "/assets/j3.jpg",
        "/assets/j5.jpg",
        "/assets/j6.jpg",
        "/assets/j7.jpg",
        "/assets/j9.jpg",
        "/assets/j10.jpg",
        "/assets/j11.jpg",
      ],
    },
    // ... (rest of your products here, unchanged)
  ];

  // ====== Slideshow Images (pick first 5 featured) ======
  const slideshowImages = productData.slice(0, 5).map((p) => p.img);

  // ====== Collect All Images from product galleries ======
  const allCollectionImages = productData.flatMap((p) => p.gallery);

  // ====== Modal State ======
  const [showModal, setShowModal] = useState(false);

  // ====== Pagination ======
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(allCollectionImages.length / itemsPerPage);
  const currentImages = allCollectionImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <section className="promo-section">
      <Container>
        {/* ====== Collection Intro ====== */}
        <Row className="diamond-section align-items-center mb-5">
          <Col md={6}>
            <h2>
              Discover our{" "}
              <span className="highlight">Exquisite Jewellery Collections</span>
            </h2>
            <p>
              Handcrafted bangles, necklaces, rings and pendants with unmatched
              brilliance and purity. Perfect for weddings, engagements and
              timeless celebrations.
            </p>
            <p>
              Explore jewellery that blends Indian tradition with modern
              craftsmanship, designed to make every occasion unforgettable.
            </p>

            <Button className="talk-btn" href="tel:+919284935310">
              Let’s Talk
            </Button>
          </Col>

          {/* ====== Slideshow Section ====== */}
          <Col md={6} className="text-center mt-5">
            <Carousel fade interval={3000}>
              {slideshowImages.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={process.env.PUBLIC_URL + img}
                    alt={`Slide ${index}`}
                    className="d-block w-100 diamond-carousel-img"
                  />
                </Carousel.Item>
              ))}
            </Carousel>

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

      {/* ====== Modal for Collections with Pagination ====== */}
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
    </section>
  );
}

export default PromoSection;
