import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';



const Navigation = () => {
  console.log(AuthContext)
  const { isAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


const renderNavigation = () => {

  return isAuth
    
    ? (<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Biblioteca</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/students">Estudiantes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/books">Libros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>)

    : (<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Biblioteca</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login">login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signup">signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

return(
  <React.Fragment>
    {renderNavigation()}
  </React.Fragment>
)
}


export default Navigation;