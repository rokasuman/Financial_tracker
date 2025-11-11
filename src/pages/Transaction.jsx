
import { Container, Row, Col } from "react-bootstrap";
import {TransactionForm}from "../components/TransactionForm";
import { TransactionTabel } from "../components/TransactionTabel";

const Transaction = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-4 rounded text-white">
        <Col md={5}>
         <TransactionForm/>
         <hr></hr>
         <TransactionTabel/>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Transaction;
