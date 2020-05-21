import React from 'react' 
import {Route} from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';
import student from './views/students'
import BooksForm from './views/bookForm'
import StudentForm from './views/studentForm'
//mport Example from './views/students';


export default[
    <React.Fragment>        
        
        <Route exact path ="/" component = {Home}></Route>
        <Route exact path ="/login" component = {Login}></Route>
        <Route exact path = "/signup" component = {Signup}></Route>
        <Route exact path = "/students" component = {student}></Route>
        <Route exact path="/books-form" component ={BooksForm}></Route>
        <Route exact path="/students-form" component ={StudentForm}></Route>

        
    </React.Fragment>
]