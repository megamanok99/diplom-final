import './Footer.css'
import logo from '../img/logo.png';
import {Image} from 'react-bootstrap';
function Footer(){



    return(
        <div className="footer">
      
      <Image src={logo} fluid />
  </div>
    )
}
export default Footer;