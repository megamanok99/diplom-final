import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Table, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './ModuleParseWord.css';
import php from '../word.php';

function CreateUD() {
  return (
    <div>
      <Card>
        <Card.Header as="h5">Модуль формирования Удостоверяющего Листа</Card.Header>
        <Card.Body>
          <Card.Title>Начало работы</Card.Title>
          <Card.Text className="paddingBot">
            Заполните поля названия спецификации, инвентарный номер и фамилию разработчика.
          </Card.Text>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <Form action={php} method="POST" enctype="multipart/form-data">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Наименование спецификации</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="АКЖИ.ХХХХХХ.ХХХ" />
                  <InputGroup.Text>-УД</InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Инвентарный номер</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="ХХХХХХ" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Фамилия разработчика</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров" name="name" type="text" />
                </InputGroup>
                <Button variant="primary" type="submit" size="lg" block>
                  Скачать
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CreateUD;
