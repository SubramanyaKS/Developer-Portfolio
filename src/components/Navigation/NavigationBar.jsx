import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './NavigationBar.css';
import { faHome, faUser, faBookOpen, faBriefcase,faCode,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            color: "#00eeff",
          }}
        >
        Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <ul className="navbar-nav ms-auto ">
            <li >
            <a className="navig nav-link m-2" href="#">
             <h5 className="navigation-link d-flex"> <FontAwesomeIcon fontSize={20} icon={faHome}/> Home </h5>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#about">
              <h5 className="navigation-link d-flex"><FontAwesomeIcon icon={faUser}/>  About </h5>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#education">
              <h5 className="navigation-link d-flex"><FontAwesomeIcon icon={faBookOpen}/> Education</h5>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#experience">
              <h5 className="navigation-link d-flex"><FontAwesomeIcon icon={faBriefcase}/> Experience </h5>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#project">
              <h5 className="navigation-link d-flex"> <FontAwesomeIcon icon={faCode}/>Project </h5>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#contact">
              <h5 className="navigation-link d-flex"><FontAwesomeIcon icon={faGlobe}/> Contact </h5>
            </a>
            </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar