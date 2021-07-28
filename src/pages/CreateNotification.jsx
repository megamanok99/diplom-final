import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './ModuleParseWord.css';
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');


function CreateNotification() {
 
  const [name,setName]=React.useState('man');
  const [t1,setT1]=React.useState('');
  const [user, setUser] = React.useState('');
  const form = React.useRef(null);
  function clickHandler(e) {
    e.preventDefault();
    const data = new FormData(form.current)
    fetch('http://test.ru/UD.php', {
      method: 'POST',
      header: { 
      "Content-Type": "application/octet-stream"
                

    },
      body: data,
    })
      .then((response) => response.blob())
      .then((response) => {
    console.log(response)
    FileSaver.saveAs(response,`${name}Д33-УД.docx`);
      });
  }
  function getValue(e){
    setName(e.target.value);
  }
  return (
    <div>
      <Card>
        <Card.Header as="h5">Модуль формирования извещения</Card.Header>
        <Card.Body>
          <div>{t1}</div>
          <Card.Title>Начало работы</Card.Title>
          <Card.Text className="paddingBot">
            Заполните поля названия спецификации, инвентарный номер и фамилию разработчика.
          </Card.Text>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <Form id='FormElem' ref={form}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Наименование спецификации</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl  name="name" type="text"   placeholder="АКЖИ.ХХХХХХ.ХХХ"  onChange={getValue}/>
                  <InputGroup.Text>.Д33-УД</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Разработал</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров" value={localStorage.getItem('surName')}   name="razrabotal" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Проверил</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров" value={localStorage.getItem('controlName')}  name="prov" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Утвердил</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров" value={localStorage.getItem('directorName')}   name="utv" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Н.контр.</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров" value="Терехова"  name="norm" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Инвентарный номер</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="ХХХХХХ" name="inv-nomer" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Фамилия разработчика</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Сидоров"  name="razrab" type="text"  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Отдел разработчика</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="О.34"  name="otdel" type="text"  />
                </InputGroup>
                
                <Button onClick={clickHandler} variant="primary" type="submit" size="lg" block>
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
export default CreateNotification;
