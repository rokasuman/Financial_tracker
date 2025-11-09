import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {toast} from 'react-toastify'
import { Custominput } from "./Custominput";
import useForm from "../hooks/useForm";
import { loginUser } from "../../helper/axiosHelper";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// initial state 
const initialState = {
  email:"",
  password:"",
}

const SignInForm = () => {
  const {user, setUser} = useUser();
  const navigate = useNavigate();


   const {form,handleOnChange } = useForm({initialState})


   useEffect(() =>{
    user?._id && navigate ('/dashboard')
   },[user?._id, navigate])
  

  const fields = [

    {
      label :"Email",
      placeholder :"suman@gmail.com",
      required : true,
      type:"email",
      name: "email",
     
    },
    {
      label :"Password",
      placeholder :"****",
      required : true,
      type:"password",
      name: "password"

    },
   
  ];

 
  const handleOnSubmit = async (e) =>{
    e.preventDefault();


   console.log(form);
   
   const pendingRep = loginUser(form)
   toast.promise(pendingRep,{
    pending:"Please wait ...",
  

   } )
   const {status,message,user,accessJWT } = await pendingRep
   toast[status](message)
   console.log(user,accessJWT)
   setUser(user)
   localStorage.setItem("accessJWT",accessJWT)
  
  }

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5 text-center">Sign In now!</h4>
    
      <Form onSubmit={handleOnSubmit}>
        {
          fields.map((input) => (<Custominput key={input.name} {...input} onChange ={handleOnChange}/>)
        )}
      
        <div className="d-grid"> 
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
