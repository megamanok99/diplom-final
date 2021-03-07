
import {Form,Row,Button} from 'react-bootstrap';
function AskQuestion(props){


    return(
        <Row className="justify-content-sm-center"  >
                              <Form className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Укажите почту</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Проблема с модулем</Form.Label>
                  <Form.Control as="select">
                   {
                       props.data.map((obj)=>
                       
                       <option>{obj.name}</option>
                       )
                   }
                  </Form.Control>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Опишите проблему</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="info">Отправить</Button>
              </Form>
        </Row>
    )
}
export default AskQuestion;