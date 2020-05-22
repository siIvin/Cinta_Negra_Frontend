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
import '../app.css'

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
      <div className="main-login-signup">
        <Navbar light expand="md">
          <NavbarBrand href="/">Biblioteca v0.1</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/students"><i class="fa fa-2x fa-users" /> <span> Estudiantes </span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/books"><i class="fa fa-2x fa-book" /> <span> Libros </span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/students-form"><i class="fa fa-2x fa-user-plus" /> <span> Nuevo Estudiante </span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/books-form"><i class="fa fa-2x fa-plus-circle" /> <span> Nuevo Libro </span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} onClick= {logout}><i class="fa fa-2x fa-sign-out" /> <span> Logout </span></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >)
  }

  const publicNavbar = () => {
    return (
   <div className="main-login-signup">
  <Navbar light expand="md">
    <NavbarBrand href="/">Biblioteca v0.1</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/login"><i class="fa fa-2x fa-sign-in" /><span> Login </span></NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/signup"><i class="fa fa-2x fa-plus-square" /><span> Signup </span></NavLink>
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