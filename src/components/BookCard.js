import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const BookCard = (props) => {
  return (
    <div className="card-wrapper-book">
      <Card>
        <CardBody>
          <CardSubtitle><span className="label">Titulo:</span>{props.title}</CardSubtitle>
          <CardTitle><span className="label">Autor:</span>{props.author}</CardTitle>
          <CardText><span className="label">Páginas:</span>{props.pages}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookCard;