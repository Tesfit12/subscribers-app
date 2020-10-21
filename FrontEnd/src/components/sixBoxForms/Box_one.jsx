import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import "react-autocomplete-input/dist/bundle.css";
import { TiArrowRightThick } from "react-icons/ti";
import { Badge, Form, Row, Col, Container, Card, Button, } from "react-bootstrap";
import Dialog from '@material-ui/core/Dialog';

import styled from "@emotion/styled";
import { ConfirmPage } from './Confirm'








export const Box_one = ({ nextHandler, num }) => {

  const inputRef = useRef()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valueOfTextArea, setValueOfTextArea] = useState(''); // grab the content of textArea
  const [test, setTest] = useState(['aaa', 'bbb', 'ccc'])
  const [openModal, setOpenModal] = useState(false)
  const [userText, setUserText] = useState([])
  const [dataOfSixBoxes, setDataOfSixBoxes] = useState([])


  const [valueOfLS, setValueOfLS] = useState([])
  const [valueOfBoxOne, setValueOFBoxOne] = useState([]);
  const [valueOfBoxTwo, setValueOFBoxTwo] = useState([]);
  const [valueOfBoxThree, setValueOFBoxThree] = useState([]);
  const [valueOfBoxFour, setValueOFBoxFour] = useState([]);
  const [valueOfBoxFive, setValueOFBoxFive] = useState([]);
  const [valueOfBoxSix, setValueOFBoxSix] = useState([]);



  useEffect(() => {
    window.localStorage.setItem("valueOfAllBoxes", JSON.stringify([valueOfBoxOne, valueOfBoxTwo, valueOfBoxThree, valueOfBoxFour, valueOfBoxFive, valueOfBoxSix]));
  }, [valueOfTextArea]);





  // get all the data of user of the six boxes

  useEffect(() => {
    const getUserAccount = async () => {
      const response = await fetch('http://localhost:5000/dataOfSixBoxes/1')
      const parseRes = await response.json()
      setDataOfSixBoxes(parseRes)
    }
    getUserAccount()
  }, [])

  console.log(dataOfSixBoxes);



  const handleName = () => {

    setName("[First-Name]")

  }
  const handleEmail = () => {
    setEmail("[E-mail]")

  }


  const handelUserText = () => {

    let inputValue = inputRef.current.value
    setValueOfTextArea(inputValue)

    if (num == 1) {
      setValueOFBoxOne(inputValue)
    } else if (num == 2) {
      setValueOFBoxTwo(inputValue)
    } else if (num == 3) {
      setValueOFBoxThree(inputValue)
    } else if (num == 4) {
      setValueOFBoxFour(inputValue)
    } else if (num == 5) {
      setValueOFBoxFive(inputValue)
    } else if (num == 6) {
      setValueOFBoxSix(inputValue)
    } else {
      alert('ops....')
    }
    setName('')
    setEmail('')
    setUserText('')


  };




  const handleNext = () => {

    inputRef.current.focus()
    setValueOfTextArea([])
    nextHandler(valueOfTextArea)


  };

  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const userOldTextHandler = (item) => {
    setUserText(item)
  }



  // const styleName = styled.div`
  //         background-color: ${(name) => name ? "red" : "green"};
  //         `;

  return (
    <>


      <div>

        <button type="button" className="btn btn-info btn-md float-right m-3" data-toggle="modal" onClick={handleModal}>old messages</button>

        {
          openModal ? <Dialog
            open
            fullWidth
            maxWidth='md'

          >


            <Container>

              <Row onClick={handleModal}>
                <Col>
                  <a>
                    <button type="button" class="btn btn-outline-dark btn-sm pl-2 mr-1 mt-1 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                  </a>
                </Col>
              </Row>


              {dataOfSixBoxes.map(data => (
                <Row>

                  <Col onClick={() => userOldTextHandler(data.template_body)} style={{ border: '1px solid grey', backgroundColor: '#f5f5f5', padding: '5px', margin: '5px', borderRadius: '5px' }}> {data.template_body} </Col>

                </Row>
              ))}

            </Container>



          </Dialog> :

            ''
        }

      </div>

      <div>

        <h6 style={{ fontWeight: "bold", marginTop: "10px", marginLeft: "5%" }}>{" "}Welcome !

         <span style={{ padding: "15px", fontSize: "20px", cursor: "pointer" }}>
            <Badge variant="primary" onClick={handleName}>Firs-Name</Badge>{" "}
          </span>

          <span style={{ padding: "15px", fontSize: "20px", cursor: "pointer" }}>
            <Badge variant="primary" onClick={handleEmail}>Email </Badge>{" "}
          </span>
          please send a message below...
          </h6>

        <Form>
          <Form.Group style={{ height: "100%" }}>
            <Form.Control ref={inputRef} as="textarea" style={{ padding: "20px" }} onChange={handelUserText} value={`${valueOfTextArea}${name}${email}${userText}`} />
            {/* ======== there is no way that i can embed and html tag to the textarea value =================*/}
          </Form.Group>
        </Form>

        <Button onClick={handleNext} variant="outline-primary" style={{ float: "right" }}>
          <a>
            Next <TiArrowRightThick size={25} />
          </a>
        </Button>
      </div>
    </>

  );
};
