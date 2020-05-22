import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const BookCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Autor:{props.author}</CardTitle>
          <CardSubtitle>Titulo:{props.title}</CardSubtitle>
          <CardSubtitle>Páginas: {props.pages}</CardSubtitle>
          <Button>Nueva Lectura</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookCard;