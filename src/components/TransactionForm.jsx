import React from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { Custominput } from "./Custominput";
import { toast } from "react-toastify";
import { postNewTransaction } from "../../helper/axiosHelper";
import { useUser } from "../context/userContext";


const initialState = {
  type: "",
  title: "",
  amount: "",
  tDate: "",
};

export const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const {getTransactions,toggleModel} = useUser();

  const handleOnSubmit =async (e) => {
    e.preventDefault();

    const pending =  postNewTransaction(form);
    toast.promise(pending,{
      pending:"Please await..."
    })
    const {status, message} = await pending;
    toast[status](message);

    if (status ==='success'){
      setForm(initialState)
          //function to fetch all the transcation
      getTransactions()
    } ;


    // close the model 

    toggleModel(false)
  };

  const fields = [
    {
      label: "Type",
      placeholder: "",
      required: true,
      type: "text",
      name: "type",        
      value: form.type,    
    },
    {
      label: "Title",
      placeholder: "salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },
    {
      label: "Amount",
      placeholder: "444",
      required: true,
      type: "number",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transaction date",
      placeholder: "",
      required: true,
      type: "date",
      name: "tDate",
      value: form.tDate,
    },
  ];

  return (
    <div className="border rounded p-4 ">
      <h4 className="mb-5">Add your transaction!</h4>

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3 ">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange}>
            <option value="">---select----</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>

          </Form.Select>
        </Form.Group>
        {fields.map((input) => (
          <Custominput
            key={input.name}
            {...input}
            onChange={handleOnChange}
          />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
