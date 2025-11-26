import { Container, Row, Col } from "react-bootstrap";
import Graphs from "../utils/Graphs";
import IncomeLineGraph from "../utils/IncomeGraph";
import ExpensesLineGraph from "../utils/ExpenseGraph";

const Dashboard = () => {
  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      <Row className="w-100 bg-dark text-white p-4 rounded">
        <Col xs={12}>
          <h2 className="text-primary text-center mb-5">
            Here are the Graphs of your Total Transactions
          </h2>
        </Col>

        {/* Main Graph */}
        <Col xs={12} className="mb-4 d-flex justify-content-center align-items-center">
          <div className="p-3 bg-white rounded shadow-sm w-100" style={{ maxWidth: '900px' }}>
            <Graphs />
          </div>
        </Col>

        {/* Income Line Graph */}
        <Col xs={12} className="mb-4 d-flex justify-content-center">
          <div className="p-3 bg-white rounded shadow-sm w-100" style={{ maxWidth: '900px' }}>
            <IncomeLineGraph />
          </div>
        </Col>

        {/* Expenses Line Graph */}
        <Col xs={12} className="mb-4 d-flex justify-content-center">
          <div className="p-3 bg-white rounded shadow-sm w-100" style={{ maxWidth: '900px' }}>
            <ExpensesLineGraph />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
