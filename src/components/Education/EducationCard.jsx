import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationCard = () => {
  return (
    <Card  className="shadow-lg p-3 rounded mb-5">
      <Card.Header>Year</Card.Header>
      <Card.Body>
        <Card.Title>Degree</Card.Title>
        <Card.Text>
          College/ University
        </Card.Text>
        <Card.Text>
            Grade
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EducationCard