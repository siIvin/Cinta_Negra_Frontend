import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const StudentCard = (props) => {
  
  const studentAge=(dateOfBirth)=>{
    console.log(props)
    const dateNow = Date.now()
    const age = dateNow - new Date(dateOfBirth)
    return Math.floor(age/31536000000)
  }

  

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image_profile} alt="Card image cap" />
        <CardBody>
          <CardTitle>Nombre: {props.first_name}</CardTitle>
          <CardSubtitle>Apellido: {props.last_name}</CardSubtitle>
          <CardText>Edad: {studentAge(props.dateOfBirth)} años</CardText>
          <Button>Nueva Lectura</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentCard;