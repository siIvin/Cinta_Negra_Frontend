import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const StudentCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Nombre: {props.first_name}</CardTitle>
          <CardSubtitle>Apellido: {props.last_name}</CardSubtitle>
          <CardText>Edad: {props.dateOfBirth}</CardText>
          <Button>Nueva Lectura</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentCard;