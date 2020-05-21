import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useHistory} from 'react-router-dom'
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
  const {removeTokenAndLogout}= useContext(AuthContext);
  const history = useHistory()


  const toggle = () => setIsOpen(!isOpen);
  const logout= ()=>{
    removeTokenAndLogout()
    history.push('/login')
    
  }
  const authNavbar = () => {

    return (
      <div>
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
              <NavItem>
                <NavLink tag={Link} to="/books-form">Nuevo Libro</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/students-form">Nuevo Estudiante</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} onClick= {logout}>Logout</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >)
  }

  const publicNavbar = () => {
    return (
   <div>
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
</div>)
}


const renderNavigation =()=>{
  return isAuth
  ? authNavbar()
  : publicNavbar()
}

return (
  <React.Fragment>
    {renderNavigation()}
  </React.Fragment>
)
}


export default Navigation;