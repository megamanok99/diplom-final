import { Modal, Button, Form } from 'react-bootstrap';
import './Header.css';
import React from 'react';

function ModalWindow(props) {
const [name,setName]=React.useState('');
const [surName,setSurName]=React.useState('');
const [addName,setAddName]=React.useState('');
const [directorName,setDirectorName]=React.useState('');
const [controlName,setControlName]=React.useState('');
const [otdel,setOtdel]=React.useState('');

  function getName(e){
    setName(e.target.value);
    console.log(e.target.value)
  }
  function getSurName(e){
    setSurName(e.target.value);
    console.log(e.target.value)
  }
  function getAddName(e){
    setAddName(e.target.value);
    console.log(e.target.value)
  }
  
  function getDirector(e){
    setDirectorName(e.target.value);
    console.log(e.target.value)
  }
  function getControl(e){
    setControlName(e.target.value);
    console.log(e.target.value)
  }
  function getOtdel(e){
    setOtdel(e.target.value);
    console.log(e.target.value)
  }
  
function submitLocal(){
    localStorage.setItem('name',name);
    localStorage.setItem('surName',surName);
    localStorage.setItem('addName',addName);
    localStorage.setItem('directorName',directorName);
    localStorage.setItem('controlName',controlName);
    localStorage.setItem('otdel',otdel);
  }
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Окно идентификации</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
              

              <Form.Row>
                <Form.Group controlId="formGridSurname" onChange={getSurName}>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGrid" onChange={getName}>
                  <Form.Label >Имя</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridName" onChange={getAddName} >
                  <Form.Label>Отчество</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formGridCity" onChange={getDirector}>
                  <Form.Label>Фамилия начальства</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridZip" onChange={getControl}>
                  <Form.Label>Фамилия проверяющего</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridState" onChange={getOtdel}>
                  <Form.Label>Отдел</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit" onClick={submitLocal}>
                Регистрация
              </Button>
            </Form>
        
      </Modal.Body>
    </Modal>
  );
}
export default ModalWindow;
