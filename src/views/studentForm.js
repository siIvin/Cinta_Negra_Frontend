import React, { useState, useContext } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

const StudentForms = () => {
    const { isAuth, axiosInstance } = useContext(AuthContext)

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profileImg, setprofileImg] = useState('');
    const [readBooks, setreadBooks] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        const jsonSend = {
            first_name: firstName,
            last_name: lastName,
            dateOfBirth,
            profile_img: profileImg,
            readBooks: []
        }
        try {
            console.log(jsonSend)
            await axiosInstance.post('/api/v1/students', jsonSend);
            alert('Estudiante agregado correctamente')
            console.log("respuesta")
        } catch (error) {
            alert('Error en registro')
        }
    }

    return (
        <React.Fragment>
            <h3>Nuevo estudiante</h3>
            <Form onSubmit={handleSubmit}>
                <Col md={8}>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label>Fecha de namiento</Label>
                        <Input
                            type="date"
                            name="dateOfBirth"
                            id="dateofBirth"
                            placeholder="Fecha de nacimiento"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)} />
                    </FormGroup>
                </Col>
                <FormGroup>
                    <Label>Imagen de Perfil</Label>
                    <Input
                        type="file"
                        id="profileImg"
                        name="profileImg"
                        placeholder="Imagen"
                        onChange={(e)=>setprofileImg(e.target.file)}/>
                </FormGroup>
                <Button>Enviar</Button>
            </Form>
        </React.Fragment>
    )
}

export default StudentForms;


