import React,  { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'
/* 
const ReadForm = () => {
    const { isAuth, axiosInstance } = useContext(AuthContext)

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profileImg, setprofileImg] = useState('');
    const [readBooks, setReadBooks] = useState[''];

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
            await axiosInstance.patch('/api/v1/students/:id', jsonSend);
            alert('lectura correctamente')
            console.log("respuesta")
        } catch (error) {
            alert('Error en registro')
        }
    }
 */


const ReadForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Escoge un libro </Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default ReadForm;