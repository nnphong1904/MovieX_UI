import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LogIn.css';
function LogIn(props){
    //define submit handling function
    function submitHandling(){

    }
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email:</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Password:</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            <Button>Submit</Button>
      </Form>
    );
}

export default LogIn;