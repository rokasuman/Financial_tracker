import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Container fluid className='bg-dark p-5'>
        <Row className='text-center'>
          <Col>
           &copy; Copy Right all reserved. || made by suman roka 
          </Col>
        </Row>
    </Container>
  )
}
