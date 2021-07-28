import React from 'react';
import { Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Button,Row, Col, InputGroup, FormControl,DropdownButton,Dropdown } from 'react-bootstrap';
import './ModuleParseWord.css';
import { saveAs } from 'file-saver';
import dataTest from '../parsePcb.json';
var FileSaver = require('file-saver');



function PcbParse() {
  let i="Вариант установки\u0000";
 let test=[];
  const [name,setName]=React.useState('');
  const form = React.useRef(null);
  const [components,setComponents]=React.useState([]);
  const [element,setElement]=React.useState([]);
  const [value,setValue]=React.useState('');
  let ComponentArray={};
  React.useEffect(()=>{
   
    createDataBase(components);
  },[])

  function btnTest(){
    parseResponse(dataTest.multilayer.pattern);
   createDataBase(Object.entries(ComponentArray));
   setElement(test)
  }
  console.log(element)


  function clickHandler(e) {
    
    e.preventDefault();
    
    const data1 = new FormData(form.current)
    data1.append('file',name);

    fetch('http://test.ru/TT/tt.php', {
      method: 'POST',
      headers: {
        
      },
      body:data1,
    })
      .then((response) => response.json())
      .then((response) => {
    
    let file = new File([JSON.stringify(response)], "hello world.json", {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(file);
      });
  }

  
  function getValue(e){
    /// file=FileSaver.saveAs(e.target.value,`${name}Д33-УД.docx`);
    setName(e.target.files[0]);
    
  }
  function filter(e){
      setValue(e.target.value)
  }

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
  console.log(ComponentArray);
  
  
  }
  

  function createDataBase(components){
  
    components.map((obj)=>{
     
      obj[1].map((el) => {
        console.log(el)
       if(el.refdesref && el.Type){
        if(el.refdesref.search(/([A-Z]+)/g) !== -1){
          test.push(el)
        }
       }
       
        
      
      }
     
     )
      }
 
      )
    
  }


  
  return (
    <div>
     
      <Card>
        <Card.Header as="h5">Модуль вывода информации из Pcb</Card.Header>
        <Card.Body>
         
          <Card.Title>Начало работы</Card.Title>
          <Card.Text className="paddingBot">
            Загрузите файл в нижераспоположенном окне. Далее серая кнопка сменится на кнопку 'Обработать файл',нажмите её. На следующем этапе вы можете фильтровать названия компонентов по номенклатурному номеру.
          </Card.Text>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
            
              <Form id='FormElem' ref={form}>
              
              <Form.Group>
                      <Form.File
                      
                        id="exampleFormControlFile1"
                        label="Место загрузки файла"
                        className="center"
                      
                        onChange={getValue}
                      />
                    </Form.Group>
                
                
              
              </Form>
             
             {
               name!='' ?  <Button onClick={btnTest} variant="primary" type="submit" size="lg" block>
               Обработать файл
             </Button> : <Button onClick={btnTest} variant="secondary" type="submit" size="lg" block disabled>
               Файл не загружен
             </Button>
             }
              
       
     
            </Col>


            
          </Row>
         
        </Card.Body>
        
      </Card>
      
      <Col>
      
      <Row className="justify-content-md-center">

      <InputGroup className="mb-3" >
    
    <FormControl aria-describedby="basic-addon1" placeholder='фильтр по названию'  onChange={(e)=>setValue(e.target.value)}/>
  </InputGroup>
        
            {
                element.length>5 ? element.filter(obj=>obj.refdesref.toLowerCase().includes(value.toLowerCase())).map((obj)=>

                    <Card style={{ width: '15rem' }}>

                           <Card.Body>
                         <Card.Title>{obj.refdesref}</Card.Title>
                         <Card.Text><strong>Тип:</strong></Card.Text>
                        <Card.Text>{obj.Type}</Card.Text>
                        <Card.Text><strong>Значение:</strong></Card.Text>
                        <Card.Text>{obj.Value}</Card.Text>
                        <Card.Text><strong>Технические условия:</strong></Card.Text>
                          <Card.Text>{obj.ТУ}</Card.Text>
                          <Card.Text><strong>Высота:</strong></Card.Text>
                        <Card.Text>{obj.ComponentHeight}</Card.Text>
                        
                        
                        
                         
                      
                       
                    </Card.Body>
                   </Card>
                   
                  
                
                
                
                ) : null
              }
              </Row>
            </Col>
    </div>
  );
}
export default PcbParse;
