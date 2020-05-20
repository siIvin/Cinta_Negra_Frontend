import React from 'react' 
import {Route} from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';
//mport Example from './views/students';


export default[
    <React.Fragment>        
        <Route exact path ="/" component = {Home}></Route>
        <Route exact path ="/login" component = {Login}></Route>
        <Route exact path = "/signup" component = {Signup}></Route>

        
    </React.Fragment>
]