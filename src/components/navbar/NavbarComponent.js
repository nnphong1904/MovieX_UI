import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './NavbarComponent.css';
function NavbarComponent(props){
    const [isOpen,setIsOpen]  = useState(false);

    const toggle= ()=> setIsOpen(!isOpen);
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">MovieX</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >Movies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Sign Up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      ); 
    
}

export default NavbarComponent;