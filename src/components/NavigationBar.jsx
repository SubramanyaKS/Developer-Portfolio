import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import '../App.css';

const NavigationBar = () => {
  return (
    <Navbar
      style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg p-3 mb-0 bg-dark "
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ff0d",
          }}
        >
        Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <h5> Home </h5>
            </Nav.Link>
            <Nav.Link href="/about">
              <h5> About </h5>
            </Nav.Link>
            <Nav.Link href="/education">
              <h5> Education</h5>
            </Nav.Link>
            <Nav.Link href="/experience">
              <h5> Experience </h5>
            </Nav.Link>
            <Nav.Link href="/project">
              <h5> Project </h5>
            </Nav.Link>
            <Nav.Link href="/skills">
              <h5> Skills </h5>
            </Nav.Link>
            <Nav.Link href="/contact">
              <h5> Contact </h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar