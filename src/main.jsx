import {  StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/userContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserProvider>
       <BrowserRouter>
      <App />
      <ToastContainer position="top-center" autoClose={2000} />
    </BrowserRouter>
   </UserProvider>
  </StrictMode>,
);
