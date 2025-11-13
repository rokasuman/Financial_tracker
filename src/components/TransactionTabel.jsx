import React from 'react'
import Table from 'react-bootstrap/Table';

export const TransactionTabel = () => {
  return (
    (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Income</th>
          <th>Expenses</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>11-12-2021</td>
          <td>salary</td>
          <td>$ 3450</td>  
          <td></td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>12-12-2021</td>
          <td>Laptop</td>
          <td></td>  
          <td>$ -1450</td>
        
        </tr>
     
         <tr className='fw-bold text-end'>
          <td colSpan={2}>Total Balance</td>
          <td></td>
          <td></td>
     
          <td>$ 345</td>
        
        </tr>
       
      </tbody>
    </Table>
  )
  )
}
