import React from 'react'
import './About.css';
import { Container, Row, Col } from "react-bootstrap";
import { aboutdata } from '../../data/data';
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about" id="about">
        <h2 className="heading">Who I am?</h2>
        <Bounce>
        <Row>
          <Col xs={8} md={8}>
          <p className="info">{aboutdata.intro}</p>
          <p className='info'>{aboutdata.description}</p>
         <div>
           <h6><b>Tech Stack</b></h6>
           <img src="https://img.icons8.com/color/48/000000/css3.png" alt="html"/>
            <img src="https://img.icons8.com/ultraviolet/48/000000/react--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
         </div>
          </Col>
          <Col>
          <img src={aboutdata.image} height="300" width="300" alt="your image"/>
          </Col>
        </Row>
        </Bounce>
    </div>
  )
}

export default About