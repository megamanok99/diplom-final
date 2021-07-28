import { Card } from 'react-bootstrap';

import './ModuleCards.css';
import { Link } from 'react-router-dom';

function ModuleCards({ name, id, text, link,img }) {
  return (
    <div key={id} >
      <Card style={{ width: '18rem' }} className="lettrS">
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
