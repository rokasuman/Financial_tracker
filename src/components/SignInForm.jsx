import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import { Custominput } from "./Custominput";
import useForm from "../hooks/useForm";

// initial state 
const initialState = {
  email:"",
  password:"",
}

const SignInForm = () => {
   const {form,handleOnChange } = useForm({initialState})
  

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


   console.log(form)
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
