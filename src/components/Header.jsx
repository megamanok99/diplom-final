import { Navbar, Form, Nav, NavDropdown, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';
import ModalWindow from './ModalWindow';
import {Image} from 'react-bootstrap';
import logotype from '../img/logotype.png';

function Header({ data }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [entrance,setEntrance]=React.useState(localStorage.getItem('surName'));
  
 
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand>
        <Link to="/" className="nav-link ">
        <Image src={logotype}  className="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" role="button">
            Главная
          </Link>
          <Link to="/documentation" className="nav-link" role="button">
            Документация
          </Link>
          <NavDropdown title="Модули" id="basic-nav-dropdown">
            {data.map((obj) => (
              <Link to={`${obj.link}`} className="dropdown-item" role="button" key={obj.id}>
                {obj.name}
              </Link>
            ))}
            <NavDropdown.Divider />
            <Link to="/AskQuestion" className="dropdown-item" role="button">
              Помощь
            </Link>
          </NavDropdown>
        
        </Nav>
        <Form inline>
          <span className="align-middle  field-name">  {entrance}  </span>

          {!localStorage.name ?
            <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Войти
          </Button> :  <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Изменить данные
          </Button>
          }

          <ModalWindow show={modalShow} onHide={() => setModalShow(false)} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
