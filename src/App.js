import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import MainPage from './pages/MainPage';
import SelectFootprint from './pages/SelectFootprint';

import {Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleParseWord from './pages/ModuleParseWord';
import AskQuestion from "./pages/AskQuestion";
import CreateUD from "./pages/CreateUD";
import './App.css';
import data from './data.json';


function App() {
  return (
    
    <div className="background-image">
      <Container>
    <Row className="justify-content-md-center row-center" >
      <Col>
      
      <Container className="module-container">
      <Header data={data}/>
      <Route exact path='/'>
        <MainPage data={data}/>
      </Route>
      <Route  path='/ModuleParseWord'>
        <ModuleParseWord/>
      </Route>
      <Route  path='/SelectFootprint'>
      <SelectFootprint/>
      </Route>
      <Route  path='/CreateUD'>
        <CreateUD/>
      </Route>

      <Route  path='/askQuestion'>
        <AskQuestion data={data}/>
      </Route>
      </Container>
    </Col>
    <Footer/>
    </Row>
  </Container>
    </div>
  );
}

export default App;
