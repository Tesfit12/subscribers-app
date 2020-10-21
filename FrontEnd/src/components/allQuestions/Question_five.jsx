import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import Button from '@material-ui/core/Button';


export const Question_five = () => {



    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState('')

    const [color_one, setColor_one] = useState(false)
    const [color_two, setColor_two] = useState(false)


    useEffect(() => {
        window.localStorage.setItem("michelAnswersFourteenToFifteen", JSON.stringify([answer_one, answer_two]));
    }, [answer_one, answer_two]);


    let AllQuestions = [
        { question: ["Quel est le degré d'urgence de ce projet ?"], alp: ['A', 'B', 'C', 'D'], choices: ["Oh, aucune urgence, je me renseigne simplement.", "Disons qu'on commence à y songer sérieusement.", "C'est assez critique, il nous le faudrait avant la fin du trimestre.", "C'est très très très urgent !"] }, // 14
        { question: ["Seriez-vous prêt à payer un accompagnement pour répondre à ces problématiques ?"], alp: ['A', 'B'], choices: ["Yes", "No"] }, // 16

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

                <Dialog
                    open
                    fullWidth
                    maxWidth='lg'
                    style={{ marginTop: "6rem" }}>

                    <Container style={{ display: 'flex', flexDirection: 'column', padding: '10px', fontFamily: 'Palatino' }}>


                        <span>
                            <a href="/welcomeQuestionsPage" >
                                <button type="button" class="btn btn-outline-dark btn-sm pl-2 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                            </a>
                        </span>

                        <Row>
                            {AllQuestions.map((obj, ix) =>

                                <div>
                                    <Row>
                                        <Col>
                                            <span style={{ fontSize: '22px' }} >

                                                <button style={circle}> {ix + 14} </button>
                                                <span className='pl-4'>{obj.question}</span>

                                            </span>
                                        </Col>
                                    </Row>


                                    <Row style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Col style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '3rem', marginBottom: '20px' }}>
                                            {obj.choices.map((item, i) =>


                                                <Button variant="outline-primary ml-3 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }} onClick={(e) => OPTION_HANDLER(e, ix)}  >
                                                    <button style={{ borderRadius: '5px', border: '1px solid blue' }} >{obj.alp[i]}</button>
                                                    <span style={{ marginLeft: '10px', padding: '2px', height: '100%' }} className='span'>{item}</span>

                                                </Button>
                                            )}
                                        </Col>
                                    </Row>

                                </div>
                            )}

                        </Row>
                        <center className='mt-3'>
                            <a href="/question_six">
                                <Button variant="contained" color="primary" className='btn-primary'>Continue</Button>
                            </a>
                        </center>

                    </Container>
                </Dialog>
            </>
        </MuiThemeProvider>

    )
}
