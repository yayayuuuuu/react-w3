import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#E8E2D6" }}>
      <Container>
        <Navbar.Brand href="index.html">
          <img src="/image/111111111111.png" alt="YYJ" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <NavDropdown title="ABOUT US" id="about-us-dropdown">
              <NavDropdown.Item href="about us/aboutus.html">設計理念</NavDropdown.Item>
              <NavDropdown.Item href="about us/aboutus.html">環保里程</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="商品簡介" id="product-dropdown">
              <NavDropdown.Item href="商品簡介/product.html">Ocean Threads</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://ecolife2.moenv.gov.tw/Coastal/SeaCleanEvent/SeaCleanEvent"
              active
            >
              淨灘活動
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
