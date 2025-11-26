import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useUser } from '../context/userContext';
import { FaPlusCircle } from "react-icons/fa";
import { Button, Form, } from 'react-bootstrap';
import { deleteTransaction } from '../../helper/axiosHelper';
import { toast } from 'react-toastify';



export const TransactionTabel = () => {
  const { 
    transactions, 
    toggleModel, 
    getTransactions, 
    displayTran, 
    setDisplayTran 
  } = useUser();

  const [idsToDelete, setIdsToDelete] = useState([]);

  useEffect(() => {
    setDisplayTran(transactions);
  }, [transactions]);

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
// for selecting the items 
  const handleOnSelect = (e) => {
  const { checked, value } = e.target;

  // If "select all" checkbox clicked
  if (value === "all") {
    if (checked) {
      setIdsToDelete(displayTran.map(item => item._id));
    } else {
      setIdsToDelete([]);
    }
    return; 
  }

  // Individual checkbox logic
  if (checked) {
    setIdsToDelete(prev => [...prev, value]);
  } else {
    setIdsToDelete(prev => prev.filter(id => id !== value));
  }
};
const handleOnDelete = async () => {
  if (confirm(`Are you sure you want to delete ${idsToDelete.length} transactions?`)) {
    await toast.promise(
      deleteTransaction(idsToDelete),
      {
        pending: "Please wait ...",
        success: "Deleted successfully",
        error: "Failed to delete"
      }
    );
    getTransactions(); 
  }
};


  return ( 
    <>
    <div className='d-flex justify-content-between pt-3 mb-4 gap-4'>
      <div>
        {displayTran.length} transaction(s) Found

      </div>
      <div>
        <Form.Control type='text' placeholder='Search any Transaction' onChange={handleOnSeacrch}/>
      </div>
      <div>
        
        <button onClick={()=>toggleModel(true)}><FaPlusCircle/>Add new Transcatio</button>

      </div>
    </div>
    <div>
      <Form.Check label="Select All" value="all"  onChange={handleOnSelect} checked={displayTran.length === idsToDelete.length}/>
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
          <td>
             <Form.Check label={new Date (t.tDate).toLocaleDateString()} value={t._id} onChange={handleOnSelect} checked ={idsToDelete.includes(t._id)} />
          </td>
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
    {
      idsToDelete.length > 0 &&(<div className="d-grid">
      <Button variant='danger' onClick={handleOnDelete}>Delete{idsToDelete.length} Transaction</Button>
    </div>)
    }

    
  </>
  );
};
