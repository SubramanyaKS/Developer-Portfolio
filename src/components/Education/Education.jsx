import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EducationCard from './EducationCard'
import './Education.css'
const Education = () => {
  return (
    <section className="education-content" id="education">
        <Container>
            <h1 className="mb-5 title text-center">Education</h1>
            <Row>
              <Col>
                <EducationCard/>
                <EducationCard />
                <EducationCard />
              </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default Education