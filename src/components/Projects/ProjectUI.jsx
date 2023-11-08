import React from 'react'
import ProjectCard from './ProjectCard'
import { Container,Row,Col } from 'react-bootstrap';
import { projectsdata } from '../../data/data';

const ProjectUI = () => {
    console.log(projectsdata)
  return (
    <section id='project' className="project">
        <h2 className="text-center heading" style={{fontFamily: "cursive"}}> &nbsp; My Project.</h2>
        <br/>
        <div>
            <Container>
                <Row>
                    {projectsdata.map((data)=>(
                       
                        <Col key={data.id}>
                        <ProjectCard data={data}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    </section>
  )
}

export default ProjectUI