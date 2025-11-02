import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {FinancialTips} from '../components/FinancialTips'
import SingUpForm from "../components/SingUpForm";

const SignUp = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-5 rounded text-white">
        <Col>
          <FinancialTips/>
        </Col>
        <Col><SingUpForm/></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
