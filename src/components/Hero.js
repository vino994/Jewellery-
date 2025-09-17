import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <Container fluid className="h-100">
        <Row className="align-items-center h-100">
          {/* Left Side - Text */}
          <Col md={6} className="hero-text">
            <h1>
              Shine <span>& sparkle</span>
            </h1>
            <h2>
              CLEARANCE <span>Sale</span>
            </h2>
            <p>Get an extra 10% off featured jewellery</p>
            <Button className="hero-btn">See all collections</Button>
          </Col>

          {/* Right Side - Full Height Image with Overlay */}
          <Col md={6} className="hero-img-col p-0">
            <div className="hero-img-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/j23.png`}
                alt="Jewellery Model"
                className="hero-img"
              />
              <div className="img-overlay"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
