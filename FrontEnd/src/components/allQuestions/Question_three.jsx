import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import Button from '@material-ui/core/Button';


export const Question_three = () => {



    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState('')
    const [answer_three, setAnswer_three] = useState('')

    const [color_one, setColor_one] = useState(false)
    const [color_two, setColor_two] = useState(false)
    const [color_three, setColor_three] = useState(false)



    useEffect(() => {
        window.localStorage.setItem("michelAnswersNineToEleven", JSON.stringify([answer_one, answer_two, answer_three]));
    }, [answer_one, answer_two, answer_three]);






    let QuestionEleven = [['A', 'B', 'C', 'D', 'E'], ['Combien de contacts avez-vous dans votre CRM/Base de donnés ?'], ['0 - 1000', '1000 - 5000', '5000 - 10000', '10000 - 50000', '50000+']]

    let AllQuestions = [
        { question: ['Utilisez-vous un CRM ?'], alp: ['A', 'B'], choices: ['Yes', 'No'] },
        { question: ['Pouvez-vous préciser lequel ?'], alp: ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K'], choices: ['Salesforce', 'Microsoft Dynamics', 'SAP S/4HANA', 'SAP Business ByDesign', 'SAP Business One', 'Hubspot', 'Pipedrive', 'ActiveCampaign', 'Zoho', 'Sellsy', 'Bitrix24'] }, // 10
    ]






    const OPTION_HANDLER = (e, ix) => {

        // select the targeted button
        let selectedButton = e.target
        var targetedClassName = selectedButton.className;

        if (ix === 0 && targetedClassName === 'span') {
            setColor_one(!color_one)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_one == false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

            if (prevSibling.className === 'btn-danger') {
                setAnswer_one(prevSibling.innerText)
            }
        }

        // ================================================================================================================
        if (ix === 1 && targetedClassName === 'span') {
            setColor_two(!color_two)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_two == false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

            if (prevSibling.className === 'btn-danger') {
                setAnswer_two(prevSibling.innerText)
            }
        }

        // ================================================================================================================
        if (ix === 2 && targetedClassName === 'span') {
            setColor_three(!color_three)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_three == false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

            if (prevSibling.className === 'btn-danger') {
                setAnswer_three(prevSibling.innerText)
            }
        }



    }


    const OPTION_HANDLER_ELEVEN = (e) => {
        // select the targeted button
        let selectedButton = e.target
        var targetedClassName = selectedButton.className;

        if (targetedClassName === 'span') {
            setColor_three(!color_three)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_three == false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

            if (prevSibling.className === 'btn-danger') {
                setAnswer_three(prevSibling.innerText)
            }
        }

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
                    maxWidth='lg'
                    style={{ marginTop: "4rem" }}
                >

                    <Container style={{ padding: '20px', fontFamily: 'Palatino' }}>



                        <Row>
                            <Col>
                                <a href="/welcomeQuestionsPage" >

                                    <button type="button" class="btn btn-outline-dark btn-sm pl-2 mr-1 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                                </a>
                            </Col>
                        </Row>

                        {answer_one === 'A' ?


                            <Col>

                                <div>

                                    <Row>
                                        <Col>
                                            <span style={{ fontSize: '22px' }} >
                                                <button style={circle}> 11 </button>
                                                <span className='pl-4'>Combien de contacts avez-vous dans votre CRM/Base de donnés ?</span>
                                            </span>
                                        </Col>
                                    </Row>

                                    <Row>

                                        <Col style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '67px' }} >
                                            {QuestionEleven[0].map((item, ix) =>

                                                <Button variant="outline-primary mb-2 mr-1" onClick={(e) => OPTION_HANDLER_ELEVEN(e)}>
                                                    <button style={{ borderRadius: '5px', border: '1px solid blue' }}> {QuestionEleven[0][ix]} </button>
                                                    <span style={{ marginLeft: '10px', padding: '2px', height: '100%', width: '100%' }} className='span'> {QuestionEleven[2][ix]} </span>
                                                </Button>
                                            )}

                                        </Col>
                                    </Row>


                                </div>

                            </Col>


                            : // Else ===============


                            < Row >

                                {
                                    AllQuestions.map((obj, ix) =>

                                        <div>

                                            <Row>
                                                <Col>
                                                    <span style={{ fontSize: '22px' }} >
                                                        <button style={circle}> {ix + 9} </button>
                                                        <span className='pl-4'>{obj.question}</span>
                                                    </span>
                                                </Col>
                                            </Row>


                                            <div>
                                                <Row>

                                                    <Col style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '67px' }} >
                                                        {obj.choices.map((item, i) =>

                                                            <Button variant="outline-primary mb-2 mr-1" onClick={(e) => OPTION_HANDLER(e, ix)}>
                                                                <button style={{ borderRadius: '5px', border: '1px solid blue' }} >{obj.alp[i]}</button>
                                                                <span style={{ marginLeft: '10px', padding: '2px', height: '100%', width: '100%' }} className='span'>{item}</span>
                                                            </Button>
                                                        )}
                                                    </Col>
                                                </Row>

                                            </div>

                                        </div>
                                    )
                                }

                            </Row>


                        }


                        <center className='mt-3'>
                            <a href="/question_four">
                                <Button variant="contained" color="primary" style={{ backgroundColor: 'rgb(80, 0, 135)', color: 'white' }}>Continue</Button>
                            </a>
                        </center>

                    </Container>

                </Dialog>
            </>
        </MuiThemeProvider >

    )
}
