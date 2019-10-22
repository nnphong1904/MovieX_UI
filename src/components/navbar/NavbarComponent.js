import React, { useState, useEffect } from 'react';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
import SignUp from '../pages/Sign Up/SignUp';
import LogIn from '../pages/Log In/LogIn';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavbarComponent.css';

function NavbarComponent(props){
    const [isOpen,setIsOpen]  = useState(false);
  
   
    const toggle= ()=> setIsOpen(!isOpen);
    return (
      <Router>
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MovieX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>  
            <NavItem>
                <Link to="/movies">Movies</Link>
            </NavItem>
            <NavItem>
                <Link to="/login">Log In</Link>
            </NavItem>
            <NavItem>
                <Link to="/signup">Sign Up</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
      ); 
    
}

export default NavbarComponent;