
import { Container, Row, Col } from "react-bootstrap";
import {TransactionForm}from "../components/TransactionForm";
import { TransactionTabel } from "../components/TransactionTabel";

import { useUser } from "../context/userContext";
import { useEffect } from "react";
import { CustomModel } from "../components/CustomModel";

const Transaction = () => {
const {getTransactions} =useUser();
useEffect (()=>{
getTransactions();
},[])


 
  
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-4 rounded text-white">
        <Col>
       <CustomModel>
         <TransactionForm/>
       </CustomModel>
        
       
         <hr></hr>
         <TransactionTabel/>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Transaction;
