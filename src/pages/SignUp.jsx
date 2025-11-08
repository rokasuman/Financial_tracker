
import { Container, Row, Col } from "react-bootstrap";
import {FinancialTips} from '../components/FinancialTips'
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-4 rounded text-white">
        <Col md={5}>
          <FinancialTips/>
        </Col>
        <Col><SignUpForm/></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
