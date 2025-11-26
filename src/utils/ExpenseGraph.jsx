import React from "react";
import { useUser } from "../context/userContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ExpensesLineGraph = () => {
  const { displayTran } = useUser();

  if (!displayTran || displayTran.length === 0) {
    return 
  }

  // Filter only income and format for chart
  const incomeData = displayTran
    .filter(item => item.type === "expenses")
    .map(item => ({
  
      amount: item.amount
    }));

  return (

    <>
    <div className="flex d-flex mt-4 justify-content-center">
     <LineChart width={500} height={300} data={incomeData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#890606ff" strokeWidth={4} />
    </LineChart>
    <p className="ms-5 text-danger text-decoration-underline">Line Graph of Expenses</p>
    


    </div>
    
  
    
    </>
  )
};

export default ExpensesLineGraph;
