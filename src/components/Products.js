import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  
} from "react-icons/fa";
import "./Products.css";

function Products() {
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

    // ===== Ring =====
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
    {
      id: 4,
      img: "/assets/r1.webp",
      title: "Navaratna Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Auspicious Navaratna ring set with nine gemstones, symbolizing prosperity and harmony.",
      details:
        "Designed as per Vedic traditions with authentic gemstones representing the nine planets.",
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
        "/assets/j12.jpg",
        "/assets/j38.jpeg",
        "/assets/j37.jpeg",
        "/assets/j34.jpeg",
      ],
    },
    {
      id: 5,
      img: "/assets/j4.jpg",
      title: "Gold Plated Statement Ring",
      tag: "SALE",
      category: "ring",
      description:
        "Bold gold plated statement ring with meenakari detailing, perfect for weddings.",
      details:
        "Premium quality, grand meenakari detailing, a favorite for bridal collections.",
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
        "/assets/j12.jpg",
        "/assets/j38.jpeg",
        "/assets/j37.jpeg",
        "/assets/j34.jpeg",
      ],
    },

    // ===== Necklace =====
    {
      id: 6,
      img: "/assets/j44.jpeg",
      title: "Handmade Temple Necklace",
      tag: "SALE",
      category: "necklace",
      description:
        "Exquisite temple-style necklace with antique gold polish, a timeless piece for traditional attire.",
      details:
        "Handcrafted by skilled artisans with antique polish. Perfect with silk sarees.",
      gallery: [
        "/assets/j16.jpg",
        "/assets/j18.avif",
        "/assets/j19.webp",
        "/assets/j20.jpeg",
        "/assets/j40.jpeg",
        "/assets/j42.jpeg",
      ],
    },
    {
      id: 7,
      img: "/assets/j45.jpeg",
      title: "Kundan Bridal Necklace",
      tag: "NEW",
      category: "necklace",
      description:
        "Traditional Kundan necklace set with uncut stones, loved by brides across India.",
      details:
        "Made using uncut Kundan stones, symbolizing royalty and grandeur in Indian weddings.",
      gallery: [
        "/assets/j16.jpg",
        "/assets/j18.avif",
        "/assets/j19.webp",
        "/assets/j20.jpeg",
        "/assets/j40.jpeg",
        "/assets/j42.jpeg",
      ],
    },

    // ===== Bangles =====
    {
      id: 8,
      img: "/assets/j21.jpg",
      title: "Gold Plated Bangles",
      tag: "SALE",
      category: "bangles",
      description:
        "Elegant gold plated bangles designed with floral motifs, perfect for festivals.",
      details:
        "A set of 4 bangles made with premium gold plating, suitable for everyday and festive wear.",
      gallery: ["/assets/j17.jpg", "/assets/j39.jpeg", "/assets/j41.jpeg"],
    },

    // ===== Jewellery Sets =====
    {
      id: 9,
      img: "/assets/j46.webp",
      title: "Bridal Jewellery Set",
      tag: "NEW",
      category: "jewellery sets",
      description:
        "Complete bridal jewellery set including necklace, earrings, maang tikka and bangles.",
      details:
        "Crafted for Indian brides with premium stones, traditional patterns and durability.",
      gallery: [
        "/assets/j47.jpg",
        "/assets/j48.webp",
        "/assets/j49.jpg",
        "/assets/j50.jpg",
        "/assets/j51.webp",
      ],
    },

    // ===== Mangalsutras =====
    {
      id: 10,
      img: "/assets/j15.jpg",
      title: "Gold Mangalsutra",
      tag: "NEW",
      category: "mangalsutras",
      description:
        "Classic gold mangalsutra with black beads and pendant design, symbol of marriage.",
      details:
        "Crafted in 22k gold, designed to suit both modern and traditional styles.",
      gallery: ["/assets/j15.jpg", "/assets/j16.jpg", "/assets/j17.jpg"],
    },

    // ===== Chain =====
    {
      id: 11,
      img: "/assets/j2.jpg",
      title: "Simple Gold Chain",
      tag: "SALE",
      category: "chain",
      description:
        "Lightweight gold chain, suitable for daily wear and gifting.",
      details: "Crafted in pure gold, durable and elegant for men and women.",
      gallery: [
        "/assets/j12.jpg",
        "/assets/j29.jpeg",
        "/assets/j30.jpeg",
        "/assets/j31.jpeg",
        "/assets/j32.jpeg",
        "/assets/j33.jpeg",
        "/assets/j35.jpeg",
      ],
    },

    // ===== Silver Items =====
    {
      id: 12,
      img: "/assets/s1.jpg",
      title: "Lakshmi Silver Pendant",
      tag: "SALE",
      category: "silver items",
      description:
        "Sacred silver pendant engraved with Goddess Lakshmi, believed to bring prosperity and blessings.",
      details:
        "Made with pure silver, often used in daily wear or festive gifting.",
      gallery: [
        "/assets/s2.jpg",
        "/assets/s3.webp",
        "/assets/s4.webp",
        "/assets/s5.avif",
        "/assets/s6.jpg",
        "/assets/s7.jpg",
        "/assets/s8.webp",
        "/assets/s9.webp",
        "/assets/s10.webp",
        "/assets/s11.jpg",
      ],
    },
    {
      id: 13,
      img: "/assets/c1.jpg",
      title: "Gold Coin Pendant",
      tag: "SALE",
      category: "silver items",
      description:
        "Traditional coin pendant with Lakshmi design, widely used for gifting.",
      details:
        "Gold plated silver coin pendant, perfect for auspicious functions and Diwali gifts.",
      gallery: [
        "/assets/c2.webp",
        "/assets/c3.webp",
        "/assets/c4.webp",
        "/assets/c5.jpg",
        "/assets/c6.jpg",
        "/assets/c7.jpg",
        "/assets/c8.jpg",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  // Build a flat image list depending on filter
  const getDisplayItems = () => {
    if (filter === "all") {
      return productData.flatMap((product) =>
        product.gallery.map((img) => ({ ...product, img }))
      );
    } else {
      return productData
        .filter((p) => p.category === filter)
        .flatMap((product) =>
          product.gallery.map((img) => ({ ...product, img }))
        );
    }
  };

  const allItems = getDisplayItems();
  const displayItems = allItems.slice(0, visibleCount);

  const handleCardClick = (product, img) => {
    setSelectedProduct(product);
    setActiveImage(img);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setActiveImage(null);
  };

  const categories = [
    "all",
    "bracelet",
    "ring",
    "necklace",
    "bangles",
    "jewellery sets",
    "mangalsutras",
    "chain",
    "silver items",
  ];

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
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "warning" : "outline-light"}
              className="me-2 text-capitalize"
              onClick={() => {
                setFilter(cat);
                setVisibleCount(8); // reset when switching filter
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <Row>
          {displayItems.map((item, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <div
                className="product-card"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleCardClick(item, item.img)}
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
              </div>
            </Col>
          ))}
        </Row>

        {/* Load More Button */}
        {visibleCount < allItems.length && (
          <div className="text-center mt-4">
            <Button
              variant="outline-warning"
              onClick={() => setVisibleCount((prev) => prev + 8)}
            >
              Load More
            </Button>
          </div>
        )}

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
                    href="https://wa.me/919284935310"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1EaEm8k6sh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/nileshpanu?igsh=dW9iOGpvcWE4Y3lo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
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
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default Products;
