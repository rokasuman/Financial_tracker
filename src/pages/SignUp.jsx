
import { Container, Row, Col } from "react-bootstrap";
import {FinancialTips} from '../components/FinancialTips'
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-5 rounded text-white">
        <Col md={6}>
          <FinancialTips/>
        </Col>
        <Col><SignUpForm/></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
