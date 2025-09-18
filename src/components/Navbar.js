import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { GiDiamondRing } from "react-icons/gi";
import "./Navbar.css";

function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="brand d-flex align-items-center">
          <GiDiamondRing className="brand-icon" />
          <span>SAIT Jewels</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end menu"
        >
          <Nav>
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              Jewels
            </ScrollLink>
            <ScrollLink
              to="festival"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              Bridal
            </ScrollLink>
            <ScrollLink
              to="promo"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              Promo
            </ScrollLink>
            <ScrollLink
              to="new-arrival"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              New Arrivals
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
            >
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
