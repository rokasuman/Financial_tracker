
import './App.css'

import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';






function App() {

 
  return (
    <div className='wrapper'>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
        
      
      
    </div>
  )
}

export default App
