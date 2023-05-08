import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import image from '../assets/image/blue1developer.png';
import { Typewriter } from 'react-simple-typewriter'
import '../App.css'
const Header = () => {
  return (
    <section className="home" id="home"  style={{backgroundColor:"#1f293a", color:"#fff"}}>
        <Container >
          <Row>
            <Col  xs={8} md={8} className="home-content">
          <h5 className="mb-2">Hello, Hi am</h5>
          <h1 className="mb-3 name">Your Name</h1>
          <h3 className="mb-4">I Am <span>
            <Typewriter 
            words={['UI Designer', 'Programmer', 'Mern Stack Developer', 'React Native Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/>
          </span></h3>
          
          <button>Get in Touch</button>
          <button className="m-2">Resume</button>
          </Col>
          <Col className="home-pic" xs={8} md={4}>
          <img src={image}  alt="Program" />
          </Col>
          </Row>
        </Container>
    </section>
  )
}
export default Header