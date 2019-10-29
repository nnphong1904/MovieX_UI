import React, { useState, useEffect } from 'react';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
import SignUp from '../pages/Sign Up/SignUp';
import LogIn from '../pages/Log In/LogIn';
import Cookie from 'js-cookie';

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
    const [authToken,setAuthToken] = useState(Cookie.get('authToken'));
   
    const toggle= ()=> setIsOpen(!isOpen);
    return (
      /*Movies Container*/
    <Router forceRefresh={true}>
      <div className="navbar-router">
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
            {authToken===undefined && <NavItem>
                <Link to="/login">Log In</Link>
            </NavItem>}
            {authToken===undefined && <NavItem>
                <Link to="/signup">Sign Up</Link>
            </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact  path="/movies">
            <Movies />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
      </Switch>
    </div>
    </Router>
 ); 
    
}

export default NavbarComponent;