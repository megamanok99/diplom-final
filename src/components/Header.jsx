import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';
import ModalWindow from './ModalWindow';
import { Row, Col } from 'react-bootstrap';

function Header({ data }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand>
        <Link to="/" className="nav-link ">
          Оформление КД
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
          <span className="align-middle  field-name">Войдите в систему</span>

          <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Войти
          </Button>

          <ModalWindow show={modalShow} onHide={() => setModalShow(false)} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
