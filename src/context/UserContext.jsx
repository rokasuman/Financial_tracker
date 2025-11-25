import React, { createContext, useContext, useState } from 'react'
import { fetchTransactions } from '../../helper/axiosHelper';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
const [user, setUser] = useState({});
const [transactions,setTransactions]= useState([]);
 const [show, setShow] = useState(false);

  const toggleModel = (value) => setShow(value);

//upadatinf the tables 
const getTransactions = async() =>{
  // call the axios to call the api

  
  const {status, transactions} =  await fetchTransactions();

   status === "success" && setTransactions(transactions);
  


  // receive the data and mount it in the tabels by setTransaction()


}
  return (
    <UserContext.Provider value={{ user,setUser,transactions,getTransactions,toggleModel,show}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
