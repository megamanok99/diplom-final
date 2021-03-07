import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import img from '../img/module.png';
import './ModuleCards.css';
import { Link } from 'react-router-dom';

function ModuleCards({ name, id, text, link }) {
  return (
    <div key={id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={`${link}`} className="btn btn-primary">
            перейти
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ModuleCards;
