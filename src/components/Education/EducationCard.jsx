import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationCard = () => {
  return (
    <Card  className="shadow-lg p-3 rounded mb-5">
      
      <Card.Body>
        <Card.Title>Degree</Card.Title>
        <Card.Text className="college mb-0">
          College/ University
        </Card.Text>
        <Card.Text className="year mb-3">
          Year
        </Card.Text>
        <Card.Text className="grade mb-1">
            Grade
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EducationCard