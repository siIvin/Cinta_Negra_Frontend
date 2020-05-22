import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'

const ReadForm = (props) => {

    const propsState = props.location.state;
    // id is in propsState.id;
    // const {axiosInstance}= useContext(AuthContext)
    // axiosInstance.get('/api/v1/books').then(response => {
    //     books =response.data
    //     console.log(books)
    // })


        const { axiosInstance } = useContext(AuthContext);
        const [books, setBooks] = useState([])
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
    

    


        // books.map(book => {
        //     return book.title
        // }

//render

//TODO - create method to get all books, api and fill dropdown.}
//TODO - onSave do a Patch with data and id propsState.id

// const { isAuth, axiosInstance } = useContext(AuthContext)

// const [readBooks, setReadBooks] = useState[''];

/*  const handleSubmit = async (e) => {
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
         await axiosInstance.patch('/api/v1/students/' + id, jsonSend);
         alert('lectura correctamente')
         console.log("respuesta")
     } catch (error) {
         alert('Error en registro')
     }
 } */


/*  const BookList = () => {
     const { axiosInstance } = useContext(AuthContext);
     const [books, setBooks] = useState([])
     const getBooks = () => axiosInstance.get('/api/v1/books');
 
 } */

// const ReadForm = (props) => {
return (
        <Form>
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
                <Input type="select" name="select" id="exampleSelect">
                {books.map((book) => {
                    return <option
                    value= {book._id}> {book.title} </option> })}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    );

}

export default ReadForm;