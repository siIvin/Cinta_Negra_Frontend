import React from 'react' 
import {Route} from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';
import student from './views/students'
import book from './views/books';
import BooksForm from './views/bookForm';
import StudentForm from './views/studentForm';
import ReadForm from './views/readForm'

//mport Example from './views/students';


export default[
    <React.Fragment>        
        
        <Route exact path ="/" component = {Home}></Route>
        <Route exact path ="/login" component = {Login}></Route>
        <Route exact path = "/signup" component = {Signup}></Route>
        <Route exact path = "/books" component = {book}></Route>
        <Route exact path = "/students" component = {student}></Route>
        <Route exact path="/books-form" component ={BooksForm}></Route>
        <Route exact path="/students-form" component ={StudentForm}></Route>
        <Route exact path="/new-reading-form" component ={ReadForm}></Route>

        
    </React.Fragment>
]