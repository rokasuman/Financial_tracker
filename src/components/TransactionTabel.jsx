import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useUser } from '../context/userContext';
import { FaPlusCircle } from "react-icons/fa";
import { Form } from 'react-bootstrap';

export const TransactionTabel = () => {
  const[displayTran, setDisplayTran] = useState([])
  const {transactions} =useUser();
  useEffect(()=>{
   setDisplayTran(transactions)
  },[transactions])

  const total = displayTran.reduce((acc,trans)=>{
    return trans.type ==="income" ? acc + trans.amount : acc - trans.amount
  },0);

  //function to search the data 
  const handleOnSeacrch = (e) =>{
    const{value} = e.target;
    const filterArg = transactions.filter(({title})=>{
      return title.toLowerCase().includes(value.toLowerCase());

      
    });
    setDisplayTran(filterArg);
    
  }
 
  return ( 
    <>
    <div className='d-flex justify-content-between pt-3 mb-4 gap-4'>
      <div>
        {displayTran.length} transaction(s) Found

      </div>
      <div>
        <Form.Control type='text' onChange={handleOnSeacrch}/>
      </div>
      <div>
        
        <button><FaPlusCircle/>Add new Transcatio</button>

      </div>
    </div>
    <Table striped hover>
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
          {
        transactions.length > 0 && displayTran.map((t,i)=><tr key={t._id}>
          <td> {i + 1}</td>
          <td>{new Date (t.tDate).toLocaleDateString()}</td>
          <td>{t.title}</td>
          {
          
            t.type  === "expenses" && (
              <>
              <td></td>  
              <td className='out'>-${t.amount}</td>
              
              </>


            )
          }
          {

            t.type === "income" && (
              <>
              <td className='in'>${t.amount}</td>  
              <td></td>
              
              </>


            )
          }
        
        </tr>)
      } 

        
         <tr className='fw-bold text-end'>
          <td colSpan={3}>Total Balance</td>
          <td colSpan={2}>${total}</td>
        
        </tr>
       
      </tbody>
    </Table>
  </>
  );
};
