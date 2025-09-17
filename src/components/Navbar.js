import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">
          SAIT Jewels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pages">Jewels</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#lookbook">Gallery</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
