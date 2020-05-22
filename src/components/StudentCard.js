import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { useHistory } from 'react-router-dom'

const StudentCard = (props) => {

  const studentAge = (dateOfBirth) => {
    console.log(props)
    const dateNow = Date.now()
    const age = dateNow - new Date(dateOfBirth)
    return Math.floor(age / 31536000000)
  }

  const history = useHistory()

  const newReading = () => {
    console.log('push de botton')
    console.log(props._id)
   history.push('/new-reading-form', {id: props._id, firstName: props.first_name, lastName: props.last_name})
  }

 /*  const studentId = () => {
    const { axiosInstance } = useContext(AuthContext);
    const [id, setid] = useState("")
   // const getId = () => axiosInstance.get('/api/v1/students/:id', _id);
  } */



  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image_profile} alt="Card image cap" />
        <CardBody>
          <CardTitle>Nombre: {props.first_name}</CardTitle>
          <CardSubtitle>Apellido: {props.last_name}</CardSubtitle>
          <CardText>Edad: {studentAge(props.dateOfBirth)} años</CardText>
          <Button onClick={newReading}>Nueva Lectura</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentCard;