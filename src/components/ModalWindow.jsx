import { Modal, Button, Tab, Tabs, Form, Row, Col } from 'react-bootstrap';
import './Header.css';
function ModalWindow(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Окно идентификации</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example ">
          <Tab eventKey="login" title="Вход">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  При утере данных просьба обращаться в тех. поддержку
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Запомнить" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Войти
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="profile" title="Регистрация">
            <Form>
              <Form.Row>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Почта</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formGridSurname">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGrid">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridName">
                  <Form.Label>Отчество</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formGridCity">
                  <Form.Label>Фамилия начальства</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                  <Form.Label>Фамилия проверяющего</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Отдел</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>О.34</option>
                    <option>0.24</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Регистрация
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}
export default ModalWindow;
