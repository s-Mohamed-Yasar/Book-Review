import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../assets/App.css";
import Icon from "../assets/appIcon.svg"



function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="header-img">
            <img src={Icon}></img>
          </div>
          <Navbar.Brand>Book Review</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home">
              <h6 style={{ color: "white" }}>Home</h6>
            </Nav.Link>
            <Nav.Link href="/create">
              <h6 style={{ color: "white" }}>Create-Review</h6>
            </Nav.Link>
            <Nav.Link href="/all/review">
              <h6 style={{ color: "white" }}>Book-Reviews</h6>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
