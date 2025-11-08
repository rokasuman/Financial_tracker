import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'


import { GoGraph } from "react-icons/go";
import { BsGraphDown } from "react-icons/bs";
import SignInForm from '../components/SignInForm';

const Login = () => {
  return (
     <Container className="p-5">
      <Row className="bg-dark  p-4 rounded text-white">
        <Col md={6}>
          <SignInForm/>{""}
        </Col>
        <Col>
        <div className='d-flex flex-column justify-content-center'
    style={{
      height: "100%"
    }}>
      <div className='text-danger text-decoration-line-through'> <BsGraphDown/>Reduce Your Expenses</div>
      <div className='text-success'><GoGraph/>Increase You Income </div>

        </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Login