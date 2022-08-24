import React, { useState } from "react";
import "./AddUser.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  
  const [enteredUsername,setEnteredUsername] = useState("");
  const [enteredAge,setEnteredAge] = useState("");
  const [error,setError] = useState();
  const [show,setShow] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values'
      })
      setShow(true);
      return;   //ends the function execution
    }
    //validation for negative age entered
    //+ before enteredAge is used to make it treat as anumber as all inputs in JS are considered as strings
    if(+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message: 'Please enter a valid age (>0)'
      })
      setShow(true);
      return;
    }
    //onAddUser is used in App in AddUser component as prop in that we have a passed a function onAddHandler(uName,uAge);
    props.onAddUser(enteredUsername ,enteredAge);
    console.log(enteredUsername ,enteredAge);
    //validation for clearing the input field after entering the values
    setEnteredUsername('');
    setEnteredAge('');

  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  const errorShow = () => {
    return show;
  } 

  return (
   <div>
     {error && <ErrorModal errorShow={errorShow}  title={error.title} message={error.message} onConfirm={errorHandler}/>}
    
    <div className="container">
      <h1>Customer Details</h1>
      <Form onSubmit={addUserHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={enteredUsername} type="text" placeholder="Enter username" onChange={userNameChangeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control value={enteredAge} type="number" placeholder="Enter age" onChange={ageChangeHandler}/>
      </Form.Group>
      <Button className="btn btn-sm btn-success" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}
