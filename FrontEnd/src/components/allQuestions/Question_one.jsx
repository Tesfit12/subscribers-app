import React, { Component, useRef, useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Badge, Form, Row, Col, Container } from "react-bootstrap";
import Button from '@material-ui/core/Button';

import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";




export const Question_one = () => {



    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState('')
    const [answer_three, setAnswer_three] = useState('')
    const [answer_four, setAnswer_four] = useState('')


    useEffect(() => {
        window.localStorage.setItem("michelAnswersOneToFour", JSON.stringify([answer_one, answer_two, answer_three, answer_four]));
    }, [answer_one, answer_two, answer_three, answer_four]);


    let InputHandlerOne = (e) => {
        let value = e.target.value
        setAnswer_one(value)
    }

    let InputHandlerTwo = (e) => {
        let value = e.target.value
        setAnswer_two(value)
    }

    let InputHandlerThree = (e) => {
        let value = e.target.value
        setAnswer_three(value)
    }

    let InputHandlerFour = (e) => {
        let value = e.target.value
        setAnswer_four(value)
    }




    const circle = {
        width: '40px',
        height: '40px',
        borderRadius: '35px',
        borderColor: 'rgb(12, 93, 161)',
        color: 'white',
        backgroundColor: 'rgb(80, 0, 135)'

    }


    return (

        <MuiThemeProvider >
            <>

                {/* this Dialog will cover the whole page  */}
                <Dialog
                    open
                    fullWidth
                    maxWidth='md'
                    style={{ marginTop: "6rem" }}>


                    <Container style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', fontFamily: 'Palatino', paddingLeft: '25px' }}>

                        <Row>
                            <Col>
                                <a href="/welcomeQuestionsPage" >

                                    <button type="button" class="btn btn-outline-dark btn-sm pl-2 mr-1 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                                </a>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 1 </button>
                                    <span className='pl-3'>Quel est votre prénom  ? *</span>
                                </p>
                                <TextField size='small' onChange={(e) => InputHandlerOne(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Repondez ici..." fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 2 </button>
                                    <span className='pl-3'>Et votre nom  ? * </span>
                                </p>
                                <TextField size='small' onChange={(e) => InputHandlerTwo(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Repondez ici..." fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 3 </button>
                                    <span className='pl-3'>Quel est le nom de votre entreprise ? * </span>
                                </p>
                                <TextField size='small' onChange={(e) => InputHandlerThree(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Repondez ici..." fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 4 </button>
                                    <span className='pl-3'> Quel est votre rôle au sein de celle-ci ? *  </span>
                                </p>
                                <TextField size='small' onChange={(e) => InputHandlerFour(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Repondez ici..." fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>



                        <center className='mt-3 mb-3'>
                            <a href="/question_two">
                                <Button variant="contained" color="primary">Continue</Button>
                            </a>
                        </center>
                    </Container>

                </Dialog>
            </>
        </MuiThemeProvider>

    )
}


