import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postNewUser } from "../../helper/axiosHelper";

import { Custominput } from "./Custominput";
import { toast } from "react-toastify";
import useForm from "../hooks/useForm";

const initialState ={
  name:"",
  email:"",
  password:"",
  Confirmpassword:"",

}

const SignUpForm = () => {
  const {form, setForm, handleOnChange} = useForm({initialState})



  const fields = [
    {
      label :"Name",
      placeholder :"suman",
      required : true,
      type:"text",
      name: "name",
      value : form.name

    },
    {
      label :"Email",
      placeholder :"suman@gmail.com",
      required : true,
      type:"email",
      name: "email",
      value:form.email

    },
    {
      label :"Password",
      placeholder :"****",
      required : true,
      type:"password",
      name: "password",
      value:form.password

    },
    {
      label :"Confirm Password",
      placeholder :"****",
      required : true,
      type:"password",
      name: "Confirmpassword",
      value:form.Confirmpassword

    }
  ];


  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    const {Confirmpassword, ...rest} =form

    if(Confirmpassword !== rest.password){
      return toast.error("Password do not match")
    }
      const {status, message} = await postNewUser(rest)
      toast[status](message)

      status === 'success' && setForm(initialState)
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
