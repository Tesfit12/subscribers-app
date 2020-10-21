import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import Button from '@material-ui/core/Button';

// notification
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';




export const Question_two = () => {


    const [answerUrl, setAnswerUrl] = useState('')

    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState('')
    const [answer_three, setAnswer_three] = useState('')

    const [color_one, setColor_one] = useState(false)
    const [color_two, setColor_two] = useState(false)
    const [color_three, setColor_three] = useState(false)


    useEffect(() => {
        window.localStorage.setItem("michelAnswersFiveToEight", JSON.stringify([answer_one, answer_two, answer_three, answerUrl]));
    }, [answer_one, answer_two, answer_three, answerUrl]);


    let AllQuestions = [
        { question: ['Vous êtes un business : '], alp: ['A', 'B'], choices: ['B2B ?', 'B2C ?'] }, //5
        { question: ['Combien de personnes composent vos équipes commerciales et marketing au total ?'], alp: ['A', 'B', 'C', 'D', 'E', 'F'], choices: ['0', '1-20', '20-50', '50-100', '100-500', '500 +'] }, // 6
        { question: ['Avez-vous un site web ?  :'], alp: ['A', 'B'], choices: ['Yes', 'No'] }, // 7

    ]




    const OPTION_HANDLER = (e, ix) => {
        let selectedButton = e.target
        var targetedClassName = selectedButton.className;


        if (ix === 0 && targetedClassName === 'span') {

            setColor_one(!color_one)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_one === false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

            if (prevSibling.className === 'btn-danger') {
                setAnswer_one(prevSibling.innerText)
            }
        }



        // =================================================================================================
        // =================================================================================================


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


        // =================================================================================================
        // =================================================================================================


        if (ix === 2 && targetedClassName === 'span') {

            setColor_three(!color_three)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling

            // add a color
            color_three === false ? prevSibling.classList.add("btn-danger") : prevSibling.classList.remove("btn-danger")

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
        backgroundColor: 'rgb(80, 0, 135)',

    }


    const circleEmail = {
        width: '40px',
        height: '40px',
        borderRadius: '35px',
        borderColor: 'rgb(12, 93, 161)',
        color: 'white',
        backgroundColor: 'rgb(80, 0, 135)',
        position: 'absolute',
        top: '-2px',
        left: '1px'

    }

    let InputHandlerUrl = (e) => {
        let value = e.target.value
        setAnswerUrl(value)
    }


    return (
        <MuiThemeProvider >

            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='md'
                    style={{ marginTop: "6rem" }}>

                    <Container style={{ fontFamily: 'Palatino', paddingLeft: '40px', paddingBottom: '20px' }}>

                        <div>



                            <Row>
                                <Col>
                                    <a href="/welcomeQuestionsPage">

                                        <button type="button" class="btn btn-outline-dark btn-sm pl-2 mt-3 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                                    </a>
                                </Col>
                            </Row>

                            <Row>

                                {AllQuestions.map((obj, ix) =>

                                    <div>
                                        <Row>
                                            <Col>
                                                <span style={{ fontSize: '22px' }} >
                                                    <button style={circle}> {ix + 5} </button>
                                                    <span className='pl-4'>{obj.question}</span>
                                                </span>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '3rem', marginBottom: '20px' }}>
                                                {obj.choices.map((item, i) =>

                                                    <Button variant="outline-primary ml-3" style={{ display: 'flex', justifyContent: 'space-between' }} onClick={(e) => OPTION_HANDLER(e, ix)}>
                                                        <button style={{ borderRadius: '5px', border: '1px solid blue' }} >{obj.alp[i]}</button>
                                                        <span style={{ marginLeft: '10px', padding: '2px', height: '100%' }} className='span'>{item}</span>

                                                    </Button>
                                                )}
                                            </Col>
                                        </Row>

                                        <ReactNotification />


                                    </div>
                                )}

                            </Row>
                        </div>

                        <Row>

                            {/* // ! check if the user presses yes then let him file the name his URL ============  */}

                            {answer_three == 'A' ?
                                <Col>

                                    <span style={{ fontSize: '22px' }}>

                                        <button style={circleEmail}> 8 </button><FaArrowRight size={13} style={{ marginLeft: '2.4%' }} />
                                        <span className='ml-3'>Son URL ? </span>
                                        <TextField size='small' onChange={(e) => InputHandlerUrl(e)} style={{ marginLeft: '4.5%', width: '80%' }} placeholder="URL..." fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />

                                    </span>

                                </Col>

                                : ''}
                        </Row>

                        <center className='mt-3'>
                            <a href="/question_three">
                                <Button variant="contained" color="primary" className='btn-primary'>Continue</Button>
                            </a>
                        </center>



                    </Container>

                </Dialog>
            </>

        </MuiThemeProvider >

    )
}
