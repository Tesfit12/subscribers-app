import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import Button from '@material-ui/core/Button';


export const Question_six = () => {



    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState('')
    const [answer_three, setAnswer_three] = useState('')

    const [color_one, setColor_one] = useState(false)

    // ['AnswerOneToFour', 'michelAnswersFiveToSeven', 'michelAnswersEight', 'michelAnswersNineToEleven', 'michelAnswersTwelveToFifteen', 'michelAnswersSixteenToEnd']

    useEffect(() => {
        window.localStorage.setItem("michelAnswersSixteenToEnd", JSON.stringify([answer_one, answer_two, answer_three]));
    }, [answer_one, answer_two, answer_three]);


    let AllQuestions = [
        { question: ["Acceptez-vous d'être contacté par nos partenaires pour bénéficier d'une démonstration personnalisée des outils que nous aurons soigneusement sélectionnés pour vous ?"], alp: ['Y', 'N'], choices: ["Bien sûr !", "Non ! A quoi bon bénéficier d'une démo gratuite et de surcroît personnalisée ?"] }, // 18

    ]



    // ==================================================================================
    let InputHandlerTwo = (e) => {
        let value = e.target.value
        setAnswer_two(value)
    }
    let InputHandlerThree = (e) => {
        let value = e.target.value
        setAnswer_three(value)
    }



    // ==================================================================================

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
                    style={{ marginTop: "6rem" }}
                >

                    <Container style={{ display: 'flex', flexDirection: 'column', padding: '10px', fontFamily: 'Palatino' }}>

                        <Row>
                            <Col>
                                <a href="/welcomeQuestionsPage" >
                                    <button type="button" class="btn btn-outline-dark btn-sm pl-2 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                                </a>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 16 </button>
                                    <span className='pl-3'>Enter your email was one yes is ? * </span>
                                </p>
                                <TextField size='small' onChange={(e) => InputHandlerTwo(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Email...example@gmail.com" fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>

                        <Row>

                            <Col>
                                <p style={{ fontSize: '20px' }}>
                                    <button style={circle}> 17 </button>
                                    <span className='pl-3'>Enter your phone : * </span>
                                </p>
                                <TextField name='phone' size='small' onChange={(e) => InputHandlerThree(e)} style={{ marginLeft: '6%', marginTop: -12, marginBottom: 20, width: '93%' }} placeholder="Phone...80-89-67-56-34" fullWidth margin="normal" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {AllQuestions.map((obj, ix) =>

                                    <div>

                                        <span style={{ fontSize: '22px' }}>
                                            <Row>
                                                <Col style={{ display: 'flex' }}>
                                                    <button style={circle}> {ix + 18} </button>
                                                    <span className='pl-3'>{obj.question}</span>
                                                </Col>
                                            </Row>
                                        </span>

                                        <Row>
                                            <Col style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '3rem', marginBottom: '20px' }}>
                                                {obj.choices.map((item, i) =>


                                                    <Button variant="outline-primary ml-3 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }} onClick={(e) => OPTION_HANDLER(e, ix)}  >
                                                        <button style={{ borderRadius: '5px', border: '1px solid blue' }} >{obj.alp[i]}</button>
                                                        <span style={{ marginLeft: '15px', padding: '2px', height: '100%' }} className='span'>{item}</span>

                                                    </Button>
                                                )}
                                            </Col>
                                        </Row>


                                    </div>

                                )}

                            </Col>
                        </Row>


                        <center className='mt-3'>
                            <a href="/submitAllAnswers">
                                <Button variant="contained" color="primary" className='btn-primary'>Continue</Button>
                            </a>
                        </center>

                    </Container>

                </Dialog>
            </>
        </MuiThemeProvider>

    )
}
