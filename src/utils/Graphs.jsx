import React from 'react'
import { useUser } from '../context/userContext'
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["green","orange"]

const Graphs = () => {
    const {displayTran} = useUser();

    // calculating the total 
    const incomeTotal = displayTran
    .filter((t)=>t.type === "income")
    .reduce((acc,curr)=>acc +curr.amount,0);

    const expensesTotal = displayTran
    .filter((t)=>t.type === "expenses")
    .reduce((acc,curr)=>acc+curr.amount,0);

    // pie chart data 
    const pieData = [
        {name:"Income", value:incomeTotal},
        {name:"Expenses", value:expensesTotal}
    ];
  return (
    <div className='mt-4 d-flex justify-content-center'>
        <PieChart width={350} height={300}>
        <Pie 
        data={pieData}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
        
        > 

        {
            pieData.map((entry,index)=>(
                <Cell key= {index} fill={COLORS[index]}/>

            ))
        }
        </Pie>
        <Tooltip/>
        <Legend/>
    </PieChart>



    </div>
    
  )
}

export default Graphs