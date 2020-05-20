
import React, { useState } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        switch (e.target.name) {
            case "firstName":
                setFirstName(e.target.value)
                break;
            case "lastName":
                setLastName(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const jsonSend = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,

        }
        try {
            const res = await axios.post('https://biblioteca-backend-cinta-negra.herokuapp.com/api/v1/users/signup', jsonSend);
            alert('Te has registrado correctamente')
        } catch (error) {
            alert('Error en registro')
        }
    }
    return (
        <React.Fragment>
            <h3>Registrate a la biblioteca</h3>
            <Form onSubmit={handleSubmit}>
                    <Col md ={8}>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Nombre"
                                value={firstName}
                                onChange={handleInput} />
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="lastName">Apellido</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="inputLastName"
                                placeholder="Apellido"
                                value={lastName}
                                onChange={handleInput} />
                        </FormGroup>
                    </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="correo electrónico"
                            value={email}
                            onChange={handleInput} />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="contraseña"
                            value={password}
                            onChange={handleInput} />
                    </FormGroup>
                </Col>
                <Button>Enviar</Button>
            </Form>
        </React.Fragment>
    )
}

export default Signup; 