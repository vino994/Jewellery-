import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Products.css";

function Products() {
  const productData = [
    {
      id: 1,
      img: "/assets/j1.jpg",
      title: "Kada Bracelet",
      tag: "NEW",
      category: "bracelet",
      description:
        "Traditional kada-style bracelet crafted with intricate Indian motifs, perfect for festive and wedding wear.",
      details:
        "Made with high-quality silver and antique finish. This kada bracelet is ideal for traditional functions, weddings, and festive occasions. Its intricate design represents the cultural heritage of India.",
      gallery: ["/assets/j1.jpg", "/assets/j5.jpg", "/assets/j6.jpg"],
    },
    {
      id: 2,
      img: "/assets/j2.jpg",
      title: "Silver Temple Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Handcrafted silver ring inspired by temple architecture, bringing timeless heritage into daily wear.",
      details:
        "Crafted in 92.5 sterling silver with temple-inspired carvings. A meaningful accessory that reflects divine artistry and blends tradition with style.",
      gallery: ["/assets/j2.jpg", "/assets/j3.jpg", "/assets/j4.jpg"],
    },
    {
      id: 3,
      img: "/assets/j3.jpg",
      title: "Navaratna Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Auspicious Navaratna ring set with nine gemstones, symbolizing prosperity and harmony in Indian tradition.",
      details:
        "The Navaratna ring is crafted in sterling silver with nine authentic gemstones. Believed to bring good luck, balance, and harmony as per Vedic astrology.",
      gallery: ["/assets/j3.jpg", "/assets/j2.jpg", "/assets/j4.jpg"],
    },
    {
      id: 4,
      img: "/assets/j4.jpg",
      title: "Gold Plated Statement Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Bold gold plated statement ring with meenakari detailing, perfect for weddings and grand occasions.",
      details:
        "Designed for those who love grandeur, this ring features meenakari artistry with premium gold plating. A perfect choice for bridal jewellery collections.",
      gallery: ["/assets/j4.jpg", "/assets/j2.jpg", "/assets/j3.jpg"],
    },
    {
      id: 5,
      img: "/assets/j5.jpg",
      title: "Silver Kada",
      tag: "NEW",
      category: "bracelet",
      description:
        "Classic silver kada bracelet with a sleek finish, ideal for daily wear or gifting.",
      details:
        "This kada is made from 92.5 silver with a modern touch. Lightweight yet durable, making it ideal for daily use as well as a thoughtful gift.",
      gallery: ["/assets/j5.jpg", "/assets/j1.jpg", "/assets/j6.jpg"],
    },
    {
      id: 6,
      img: "/assets/j6.jpg",
      title: "Handmade Temple Necklace",
      tag: "SALE",
      category: "necklace",
      description:
        "Exquisite temple-style necklace with antique gold polish, a timeless piece for traditional attire.",
      details:
        "A masterpiece crafted by artisans, featuring temple motifs and antique gold finish. Perfect for bridal wear and festive sarees.",
      gallery: ["/assets/j6.jpg", "/assets/j8.jpg", "/assets/j4.jpg"],
    },
    {
      id: 7,
      img: "/assets/j7.jpg",
      title: "Lakshmi Silver Pendant",
      tag: "SALE",
      category: "Silver",
      description:
        "Sacred silver pendant engraved with Goddess Lakshmi, believed to bring prosperity and blessings.",
      details:
        "This pendant is crafted in pure silver with embossed Lakshmi design. A divine piece to keep close, ideal for gifting on auspicious occasions.",
      gallery: ["/assets/j7.jpg", "/assets/j8.jpg", "/assets/j5.jpg"],
    },
    {
      id: 8,
      img: "/assets/j8.jpg",
      title: "Gold Coin Pendant",
      tag: "SALE",
      category: "Silver",
      description:
        "Traditional gold coin pendant with Lakshmi design, perfect for festive occasions and gifting.",
      details:
        "Gold-plated pendant featuring embossed Lakshmi. A classic jewellery piece widely used in Indian households for gifting and auspicious wear.",
      gallery: ["/assets/j8.jpg", "/assets/j7.jpg", "/assets/j6.jpg"],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.img);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setActiveImage(null);
  };

  const categories = [...new Set(productData.map((p) => p.category))];

  const filteredProducts =
    filter === "all"
      ? productData
      : productData.filter((item) => item.category === filter);

  return (
    <section className="products-section">
      <Container>
        <div className="section-header text-center mb-4">
          <h2>WELCOME TO SAIT JEWELS</h2>
          <p>
            Discover timeless Indian jewellery designs that blend tradition with
            elegance. From temple-inspired rings to heritage necklaces, each
            piece tells a story of culture and craftsmanship.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons text-center mb-5">
          <Button
            variant={filter === "all" ? "warning" : "outline-light"}
            className="me-2"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "warning" : "outline-light"}
              className="me-2 text-capitalize"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <Row>
          {filteredProducts.map((item, index) => (
            <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
              <div
                className="product-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.tag && (
                  <span className={`product-badge ${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                )}
                <img
                  src={process.env.PUBLIC_URL + item.img}
                  alt={item.title}
                  className="product-img"
                />
                <h6 className="product-title">{item.title}</h6>

                {/* View Product Button */}
                <Button
                  variant="warning"
                  className="view-btn"
                  onClick={() => handleCardClick(item)}
                >
                  View Product
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal
          show={!!selectedProduct}
          onHide={handleClose}
          centered
          size="lg"
          contentClassName="custom-modal"
        >
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>{selectedProduct?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <img
                  src={process.env.PUBLIC_URL + activeImage}
                  alt={selectedProduct?.title}
                  className="img-fluid modal-main-img"
                />
              </Col>
              <Col md={6}>
                <p className="modal-description">
                  {selectedProduct?.description}
                </p>
                <p className="modal-details">{selectedProduct?.details}</p>

                {/* Call to Action */}
                <Button className="talk-btn" href="tel:+919876543210">
                  <FaPhoneAlt className="me-2" /> Contact for Price
                </Button>

                <div className="social-icons mt-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </Col>
            </Row>

            {/* Gallery */}
            <div className="gallery mt-4">
              <h6>Gallery</h6>
              <div className="masonry-gallery">
                {selectedProduct?.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={process.env.PUBLIC_URL + img}
                    alt="Related Jewellery"
                    className={`gallery-img ${
                      activeImage === img ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="related-products mt-4">
              <h6>More from this category</h6>
              <Row>
                {productData
                  .filter(
                    (p) =>
                      p.category === selectedProduct?.category &&
                      p.id !== selectedProduct.id
                  )
                  .map((item) => (
                    <Col xs={4} key={item.id}>
                      <img
                        src={process.env.PUBLIC_URL + item.img}
                        alt={item.title}
                        className="related-img"
                        onClick={() => handleCardClick(item)}
                      />
                    </Col>
                  ))}
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default Products;
