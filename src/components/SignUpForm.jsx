import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import { Custominput } from "./Custominput";
import { toast } from "react-toastify";


const SignUpForm = () => {

  const [form, setForm] = useState({})

  const fields = [
    {
      label :"Name",
      placeholder :"suman",
      required : true,
      type:"text",
      name: "name"

    },
    {
      label :"Email",
      placeholder :"suman@gmail.com",
      required : true,
      type:"email",
      name: "email"

    },
    {
      label :"Password",
      placeholder :"****",
      required : true,
      type:"password",
      name: "password"

    },
    {
      label :"Confirm Password",
      placeholder :"****",
      required : true,
      type:"password",
      name: "Confirmpassword"

    }
  ];

  const handleOnChange = e =>{
    const {name, value} = e.target 
    console.log(name,value)
    setForm({
      ...form,
      [name] : value,
    });
  }
  const handleOnSubmit = e =>{
    e.preventDefault();
    const {Confirmpassword, ...rest} =form

    if(Confirmpassword !== rest.password){
      return toast.error("Password do not match")
    }
    console.log(form)
  }

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Sign up now!</h4>
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

export default SignUpForm;
