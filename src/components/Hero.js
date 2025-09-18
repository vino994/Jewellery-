import React, { useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiDiamondRing, GiCutDiamond, GiCrown } from "react-icons/gi"; 
import "./Hero.css";

function Hero() {
  // Generate random sparkle positions once per load
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/j23.png)`,
      }}
    >
      {/* Dark Overlay */}
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
          {/* Left Text */}
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
            <Button className="hero-btn">✨ See all collections</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
