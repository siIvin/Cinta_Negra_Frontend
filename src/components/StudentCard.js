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
    console.log('push de botton9')
    console.log(props)
   history.push('/new-reading-form', {id: props._id, firstName: props.first_name, lastName: props.last_name, dateOfBirth: props.dateOfBirth, readBooks: props.readBooks})
  }

 /*  const studentId = () => {
    const { axiosInstance } = useContext(AuthContext);
    const [id, setid] = useState("")
   // const getId = () => axiosInstance.get('/api/v1/students/:id', _id);
  } */



  return (
    <div className="card-wrapper-student">
      <Card>
        <CardImg top className="cardImage" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle><span className="label">Nombre:</span>{props.first_name}</CardTitle>
          <CardSubtitle><span className="label">Apellido:</span>{props.last_name}</CardSubtitle>
          <CardText><span className="label">Edad:</span>{studentAge(props.dateOfBirth)} años</CardText>
          <Button size="sm" onClick = {newReading}>Nueva Lectura</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentCard;