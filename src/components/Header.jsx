import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import image from '../assets/image/program.jpg'
const Header = () => {
  return (
    <section className="home" id="home"  style={{backgroundColor:"#1f293a", color:"#fff"}}>
        <Container fluid >
          <Row>
            <Col xs={12} md={8} className="home-context">
          <h5 className="mb-2">Hello, Hi am</h5>
          <h1 className="mb-3 name">Your Name</h1>
          <h6 className="mb-2">I Am <strong>Developer</strong></h6>
          <button>Get in Touch</button>
          </Col>
          <Col xs={6} md={4}>
          <img src={image} alt="Program" />
          </Col>
          </Row>
        </Container>
    </section>
  )
}
export default Header