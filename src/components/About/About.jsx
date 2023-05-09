import React from 'react'
import './About.css';
import { Container, Row, Col } from "react-bootstrap";
import image from '../../assets/image/men.jpg';
const About = () => {
  return (
    <div className="about" id="about">
        <h1 className="heading">Who I am?</h1>
        <Row>
          <Col xs={8} md={8}>
          <p>Hi i am your name.I am passionate about developing complex applications that solve real-world problems impacting millions of users</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
         <div>
           <h6><b>Tech Stack</b></h6>
           <img src="https://img.icons8.com/color/48/000000/css3.png" alt="html"/>
            <img src="https://img.icons8.com/ultraviolet/48/000000/react--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
         </div>
          </Col>
          <Col>
          <img src={image} height="300" width="300" alt="your image"/>
          </Col>
        </Row>

    </div>
  )
}

export default About