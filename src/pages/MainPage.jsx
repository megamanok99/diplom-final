import ModuleCards from '../components/ModuleCards';
import React from 'react';
import Row from 'react-bootstrap/Row';
function MainPage(props) {
  return (
    <Row className="justify-content-md-center">
      {props.data.map((obj) => (
        <ModuleCards
          name={obj.name}
          id={obj.id}
          key={obj.id}
          text={obj.text}
          link={obj.link}
          img={obj.img}
        />
      ))}
    </Row>
  );
}
export default MainPage;
