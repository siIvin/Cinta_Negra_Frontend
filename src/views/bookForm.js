import React, { useState, useContext } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'

const BookForms = () => {
    const {isAuth, axiosInstance}= useContext(AuthContext)
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        const jsonSend = { title, author, pages }
        try {
            console.log(jsonSend)
            await axiosInstance.post('/api/v1/books', jsonSend);
            alert('Libro agregado')
            console.log("respuesta")
        } catch (error) {
            alert('Error en registro')
        }
    }
    return (
        <React.Fragment>
            <div className="dashboard">
            <div className="title">Nuevo Libro</div>
            <div className="form">
            <Form onSubmit={handleSubmit}>
                <Col md={8}>
                    <FormGroup>
                        <Label>Titulo</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Titulo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label>Autor</Label>
                        <Input
                            type="text"
                            name="author"
                            id="author"
                            placeholder="autor"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label>Páginas</Label>
                        <Input
                            type="number"
                            name="pages"
                            id="pages"
                            placeholder="paginas"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)} />
                    </FormGroup>
                </Col>
                <Button>Enviar </Button>
            </Form>
            </div>
            </div>
        </React.Fragment>
    )
}

export default BookForms;


