import './App.css'
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transaction from './pages/Transaction.jsx';
import { Auth } from './components/auth/Auth.jsx';
import { useEffect } from 'react';
import { autoLogin } from './utils/users.js';
import { useUser } from './context/UserContext.jsx';






function App() {
  const{user,setUser} = useUser();

  useEffect(()=>{
     !user?._id && updateUser();
  },[user?._id]);


// bridge function to connect with user.jsx of utlis folder
  const updateUser =async () =>{
   const user = await autoLogin();
    setUser(user);
  }
 
  



 
  return (
    <div className='wrapper'>
    <Routes>
      <Route path='/' element={<DefaultLayout/>} >
       <Route index element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='dashboard' element={<Auth>
        <Dashboard/>
        </Auth>}/>
      <Route path='transaction' element={<Auth>
        <Transaction/>
        </Auth>}/>
      </Route>
    </Routes>
        
      
      
    </div>
  )
}

export default App
