import React from 'react';
import data from '../parsePcb.json'
import { Card, Button } from 'react-bootstrap';

function SelectFootprint() {
  let ComponentArray={};
 




  function parseResponse(data){
   
    for(var i=0;i<data.length;i++){
      let attributes={};
      if(ComponentArray[data[i].patterngraphicsnameref]){
        attributes.refdesref=data[i].refdesref;
        for(var k=0;k<data[i].patterngraphicsref[0].attr.length;k++)
          attributes[data[i].patterngraphicsref[0].attr[k].attributenamedef]=data[i].patterngraphicsref[0].attr[k].attributestringvalue;
        ComponentArray[data[i].patterngraphicsnameref].push(attributes); 
      
      
      }
      else {
        
        ComponentArray[data[i].patterngraphicsnameref]=[];
        attributes.refdesref=data[i].refdesref;
        for(var k=0;k<data[i].patterngraphicsref[0].attr.length;k++)
          attributes[data[i].patterngraphicsref[0].attr[k].attributenamedef]=data[i].patterngraphicsref[0].attr[k].attributestringvalue;
        ComponentArray[data[i].patterngraphicsnameref].push(attributes);
      }
    }
    //console.log(attributes);
    //console.log(Object.entries(ComponentArray));
    
    }
  return (
    <Card>
      <Card.Header as="h5">Подбор посадочных мест</Card.Header>
      <Card.Body>
        <Card.Title>Начало работы</Card.Title>
        <Card.Text className="paddingBot">Тут описание будет</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default SelectFootprint;
