import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'

const ReadForm = (props) => {
    const propsState = props.location.state;
    const { axiosInstance } = useContext(AuthContext);
    const [books, setBooks] = useState([])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
 //       const readBook = [{book:}]
        const jsonSend = {
            first_name: propsState.firstName,
            last_name: propsState.lastName,
            dateOfBirth: propsState.dateOfBirth,
            readBooks: []
        }
        try {
            console.log(jsonSend)
            await axiosInstance.patch('/api/v1/students/' + propsState.id, jsonSend);
            alert('Lectura agregada')
            console.log("respuesta")
        } catch (error) {
            alert('Error en registro')
        }
    }

    const changeBook = (e) =>{
        console.log(e)
    }

    


       
        const getBooks = () => axiosInstance.get('/api/v1/books');

        useEffect(() => {
            getBooks()
                .then((response) => {
                    const books = response.data;

                    setBooks(books);
                    console.log(books)
                    console.log('Hola')

                    //  setText (`Hay ${books.length} libros disponibles`)
                })
                .catch((error) => (error))
        }, [])
    

//TODO - onSave do a Patch with data and id propsState.id
return (
    <React.Fragment>
            <div className="dashboard">
            <div className="title">¡Libro leído!</div>
            <div className="form">
        <Form onSubmit= {handleSubmit}>
            <FormGroup>
                <Label>Nombre</Label>
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    disabled="true"
                    value={propsState.firstName} />
            </FormGroup>
            <FormGroup>
                <Label>Apellido</Label>
                <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    disabled="true"
                    value={propsState.lastName} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Escoge un libro </Label>
                <Input type="select" name="select" id="exampleSelect" onChange={changeBook}>
                {books.map((book) => {
                    return <option key={book._id}
                    value= {book._id}> {book.title} </option> })}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <Button>Guardar</Button>
        </Form>
        </div>
        </div>
        </React.Fragment>
    );

}

export default ReadForm;