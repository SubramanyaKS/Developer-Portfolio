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
      variant="dark"
      className="shadow-lg p-3 mb-0  "
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
             <h6 className="navigation-link d-flex"> <FontAwesomeIcon fontSize={20} icon={faHome}/> Home </h6>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#about">
              <h6 className="navigation-link d-flex"><FontAwesomeIcon icon={faUser}/>  About </h6>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#education">
              <h6 className="navigation-link d-flex"><FontAwesomeIcon icon={faBookOpen}/> Education</h6>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#experience">
              <h6 className="navigation-link d-flex"><FontAwesomeIcon icon={faBriefcase}/> Experience </h6>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#project">
              <h6 className="navigation-link d-flex"> <FontAwesomeIcon icon={faCode}/>Project </h6>
            </a>
            </li>
            <li >
            <a className="navig nav-link m-2" href="#contact">
              <h6 className="navigation-link d-flex"><FontAwesomeIcon icon={faGlobe}/> Contact </h6>
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