import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Table, Row, Col } from 'react-bootstrap';
import './ModuleParseWord.css';
function ModuleParseWord() {
  const [value, setValue] = React.useState('');
  const testThis = 'its work';
  React.useEffect(() => {
    console.log('this work');
  }, []);
  function getValue(e) {
    setValue(e.target.value);
  }
  console.log(value);

  return (
    <div>
      <Card>
        <Card.Header as="h5">
          Модуль проверки соотвествия элементной базы спецификации с Тех. Требованиями
        </Card.Header>
        <Card.Body>
          <Card.Title>Начало работы</Card.Title>
          <Card.Text className="paddingBot">
            По нажатию кнопки приложите файл спецификации расширения .docx и вставтье текст
            технических требований в пустое поле
          </Card.Text>
          <Row className="justify-content-md-center">
            <Col>
              <Form>
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Загрузите файл"
                    className="center"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Область вставки технических требований</Form.Label>
                <Form.Control as="textarea" rows={3} id="textArea-parse-word" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center paddingBot">
            <Col>
              <div id="btn-parse-word">
                <Button variant="primary" size="lg" block>
                  Проверить
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Обозначение</th>
                    <th>Используемые элементы</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R</td>
                    <td>1-12</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>1-14</td>
                  </tr>
                  <tr>
                    <td>VD</td>
                    <td>1-14</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ModuleParseWord;
