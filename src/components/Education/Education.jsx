import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EducationCard from './EducationCard'
import './Education.css';

const Education = () => {
  return (
    <section className="education-content" id="education">
        <Container>
        <h2 className="text-center heading mb-5" style={{"fontFamily": "cursive",}}> &nbsp; Education Details.</h2>
		<div className="timeline">
	
			<div className="container-e left-container">
				<div className="timeline-bullet"></div>
				<EducationCard/>
        <span className="left-container-arrow"></span>
			</div>
	
			<div className="container-e right-container">
				<div className="timeline-bullet"></div>
        <EducationCard/>
        <span className="right-container-arrow"></span>
			</div>
	
			<div className="container-e left-container">
				<div className="timeline-bullet "></div>
				<EducationCard/>
        <span className="left-container-arrow"></span>
			</div>
	
		</div>
        </Container>
    </section>
  )
}

export default Education