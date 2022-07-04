import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const CardsInflu = ({
  imagen,
  nombre,
  username,
  seguidores,
  sector,
  ubicacion,
}) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imagen} width="320" />
        <Card.Body>
          <Card.Title>
            <h5>
              <b>{username}</b>
            </h5>
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Seguidores:</b> {seguidores}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Categoria:</b> {sector}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Ciudad:</b> {ubicacion}
            </ListGroup.Item>
          </ListGroup>
          <br></br>
          <Link to={"/vistainfluPb/" + username}>
            <button href="#" class="btn btn-primary rounded-pill">
              VER MÁS
            </button>
          </Link>
          <button type="button" className="btn btn-danger likeBtn">
            &#9825;
          </button>
        </Card.Body>
      </Card>
      <br></br>
    </Col>
  );
};
