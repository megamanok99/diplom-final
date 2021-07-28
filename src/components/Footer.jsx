import './Footer.css'
import logo from '../img/logotype.png';
import {Image} from 'react-bootstrap';
import { Button,Row, Col, InputGroup, FormControl,DropdownButton,Dropdown } from 'react-bootstrap';
function Footer(){



    return(
        <div className="footer">
      
   
      <Row>
      <Col sm={4} md="auto" >
      <Image src={logo} fluid />
      </Col>
      <Col sm={8} className="TextFooter" >
      <div className="TextFooter">
        ОКД- Оформление конструкторской документации.программная среда была разработана в качестве выпускной квалификацинонной работы магистра совместо с к.н. Аветисовым А.Г.
      </div>
      </Col>
      </Row>
  </div>
    )
}
export default Footer;