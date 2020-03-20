import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Home from '../Home/Home';
import NavbarComponent   from '../../navbar/NavbarComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import './LogIn.css';
function LogIn(props){
    //declare state 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [authToken, setAuthToken] =useState('');
   
    //define submit handling function
    async function submitHandling(event){
        const data={email,password};
        axios.post('http://localhost:4000/api/login',data)
            .then(res=>{console.log(res.data)
                        setAuthToken(res.data)});
        setEmail('');
        setPassword('');
        event.preventDefault();

    }
    //define onchange email and password function
    function onChangeEmail(event){
        setEmail(event.target.value);
    }

    function onChangePassword(event){
        setPassword(event.target.value);
    }
    
    return (
        <Router >
            {authToken!=='' && <Redirect  to='/'/>}
            {authToken==='' && <Form onSubmit={(data)=>submitHandling(data)}>
                    <FormGroup>
                        <Label for="exampleEmail">Email:</Label>
                        <Input type="email" 
                            name="email" 
                            id="exampleEmail" 
                            placeholder="example@email.com" 
                            value={email} 
                            onChange={(event)=>onChangeEmail(event)} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Password:</Label>
                        <Input type="password"
                            name="password" 
                            id="examplePassword"
                            placeholder="password" 
                            value={password} 
                            onChange={(event)=>onChangePassword(event)}/>
                    </FormGroup>
                    <Button>Submit</Button>
            </Form>}
            <Switch>
                <Route exact path='/'>
                    <Home authToken={authToken} email={email}/>
                </Route>
            </Switch>
        </Router>
      
    );
}

export default LogIn;