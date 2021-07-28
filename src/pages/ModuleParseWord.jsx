import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Table, Row, Col } from 'react-bootstrap';
import './ModuleParseWord.css';
const Doc = require('docx4js');
function ModuleParseWord() {
  const [value, setValue] = React.useState('');
  const [componentBase, setComponentBase] = React.useState({});
  const [componentWordBase, setComponentWordBase] = React.useState({});
  const [compAll, setCompAll] = React.useState('');
  const [compWordAll, setWordCompAll] = React.useState('');
  const [wordVisible, setWordVisible] = React.useState(false);
  const [valueVisible, setValueVisible] = React.useState(false);
  const [wordValue, setWordValue] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  function getValue(e) {
  
     let test=e.target.value.replace(/,/g,' ') ;
    setValue(test.split(/\s/g));
    setValueVisible(true);
  }

  ///////обработка ворда///
  const readFile = (e) => {
    const file = e.target.files[0];
    Doc.docx.load(file).then((docx) => {
      docx.render(function createElement(type, props, children) {
        if (type === 't') {
         
          if(children[0].search(/([A-Z]+)([0-9])/g) !== -1){
         
            if(children[0].search(/([A-Z]+)(\d+)([-])([A-Z]+)(\d+)/g)){
                if(children[0].match(/([A-Z]+)([0-9])/g).length>1){
                    console.log(children[0]);
                    let drobe=children[0].split(/\s/g);
                    drobe.map((el)=>{ wordValue.push(el)})
                    children[0]='replaced';
                    
                }
            }
          }
          wordValue.push(children[0]);
        }
        console.log(wordValue);
        return { type, props, children };
      });
    // console.log('OUT', wordValue);
    });
    setWordVisible(true);
  };
  ////////////////////////////
  ///console.log('OUT HERE', wordValue);
  ///////action на кнопку///
  function compareComp() {
    

    clickSend2(wordValue, componentWordBase);

    setWordCompAll(componentWordBase);
    clickSend2(value, componentBase);

    setCompAll(componentBase);
    setShowResult(true);
  }
  //////////////
  ///////
  function clickSend2(arrNew, componentBase) {
    console.log(arrNew);
    replaceMark(arrNew);
    console.log(arrNew);
    divineComponent(arrNew, componentBase);
    createTableComp(componentBase);
  }
  function replaceMark(array){
    let newArr=[];
    array.map((el)=>{
      newArr.push(el.replace(/,/g,' '))
    })
    array=newArr;

  }

  function divineComponent(aray, el) {
   /// console.log(aray);
   
    //вырезаем парные компоненты//
    aray.forEach(function (item, i, aray) {
      if (aray[i].search(/([A-Z]+)(\d+)([-])([A-Z]+)(\d+)/g) !== -1) {
        let dualComp = String(aray[i].match(/([A-Z]+)(\d+)([-])([A-Z]+)(\d+)/g));

        let bukva = dualComp.match(/([A-Z]+)/g)[0];

        let cifra = dualComp.match(/(\d+)/gi);

        rangeDualComp(+cifra[0], +cifra[1], bukva, el);

        delete aray[i];
      }
    });

    //вырезаем одинарные компоненты//
    aray.forEach(function (item, i, aray) {
      if (aray[i].search(/([A-Z]+)([0-9])/g) !== -1) {
        trimComp(String(aray[i].match(/([A-Z]+)(\d+)/g)), el);
      }
    });
  }

  //функция по добавлению элемента в глобальный обьект//
  function trimComp(comp, el) {
    let bukva = String(comp.match(/[A-Z]+/gi));
    let cifra = +parseInt(comp.match(/(\d+)/gi));
    if (!el[bukva]) {
      el[bukva] = [];
      el[bukva].push(cifra);
    } else {
      el[bukva].push(cifra);
    }

    //  console.log(componentBase)
  }

  function rangeDualComp(num1, num2, bukva, el) {
    for (let ba = num1; ba <= num2; ba++) {
      trimComp(bukva + ba, el);
    }
  }

  function createTableComp(obj) {
    for (let key in obj) {
      obj[key].sort(function (a, b) {
        return a - b;
      });
    }
  }
  var user1 = { R: [1, 2, 3], C: [1, 4, 3] };
  var user2 = { R: [1, 2, 3], C: [1, 2, 3] };
 // console.log(user2.R);

  function compareBase(a1, a2) {
 //   console.log('a1:', a1);
  ////  console.log('a2:', a2);
    if (a1[0][0] == a2[0][0]) {
      if (compare(a1[0][1], a2[0][1])) {
  ///      console.log('everything same');
      } else {
        let difference = diff(a1[0][1], a2[0][1]);
     ////   console.log(difference);
      }
    }
  }
 
  function diff(a1, a2) {
    return a1.filter((i) => !a2.includes(i)).concat(a2.filter((i) => !a1.includes(i)));
  }
  function compare(a1, a2) {
    return a1.length === a2.length && a1.every((v, i) => v === a2[i]);
  }
  compareBase(Object.entries(user1), Object.entries(user2));
  /// diff(Object.keys(user1), Object.keys(user2));

  function resetForm() {
    setValueVisible(false);
    setWordVisible(false);
    setShowResult(false);
    setComponentBase({});
    setComponentWordBase({});
    setCompAll('');
    setWordCompAll('');
    setWordValue([]);
  }

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
          {!showResult ? (
            <div>
              <Row className="justify-content-md-center">
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.File
                        onChange={readFile}
                        id="exampleFormControlFile1"
                        label="Загрузите файл"
                        className="center"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Область вставки технических требований</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="textArea-parse-word"
                      onChange={getValue}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="justify-content-md-center paddingBot">
                <Col>
                  {wordVisible && valueVisible ? (
                    <div id="btn-parse-word">
                      <Button variant="primary" size="lg" onClick={compareComp} block>
                        Проверить
                      </Button>
                    </div>
                  ) : (
                    <Button variant="primary" size="lg" disabled block>
                      Перед запуском загрузите файлы
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          ) : (
            <Button onClick={resetForm}>Попробовать еще раз</Button>
          )}

          {showResult ? (
            <Row className="justify-content-md-center">
              <Col md={7}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Обозначение</th>
                      <th>Используемые элементы в технических требованиях</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(compAll).map((obj) => {
                      return (
                        <tr>
                          <td>{obj[0]}</td>
                          <td>{String(obj[1])}</td>
                        </tr>
                      );
                    })}
                  </tbody>

                  <thead>
                    <tr>
                      <th>Обозначение</th>
                      <th>Используемые элементы в спецификации</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(compWordAll).map((obj) => {
                      return (
                        <tr>
                          <td>{obj[0]}</td>
                          <td className='td_output'>{String(obj[1])}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          ) : (
            <div></div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default ModuleParseWord;
