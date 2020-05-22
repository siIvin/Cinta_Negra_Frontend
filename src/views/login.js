
import React, { useState, useContext } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../app.css'

import {AuthContext} from '../context/AuthContext'

const Login = (props) => {
   const {setToken}= useContext(AuthContext);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        const jsonSend = {email, password}
        try {
            console.log(jsonSend);
            const res = await axios.post('https://biblioteca-backend-cinta-negra.herokuapp.com/api/v1/users/login', jsonSend);
            setToken(res.data.token)
            alert('Hola ')
            console.log("respuesta")
            console.log(res.data)
        } catch (error) {
            alert('Error en registro')
        }
    }
    return (
        <React.Fragment>
            <div className="main-login-signup">
            <div className="inner-banner">
                <Form onSubmit={handleSubmit}>
                    <Col md={8}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="correo electrónico"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="contraseña"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <Button>Iniciar Sesión</Button>
                    </Col>
                    
                </Form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login; 


