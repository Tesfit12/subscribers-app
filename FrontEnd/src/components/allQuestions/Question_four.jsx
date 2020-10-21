import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import Button from '@material-ui/core/Button';


export const Question_four = () => {



    const [answer_one, setAnswer_one] = useState('')
    const [answer_two, setAnswer_two] = useState([])

    const [color_one, setColor_one] = useState(false)
    const [color_two, setColor_two] = useState(false)


    useEffect(() => {
        window.localStorage.setItem("michelAnswersTwelveToThirteen", JSON.stringify([answer_one, answer_two]));
    }, [answer_one, answer_two]);


    let AllQuestions = [
        { question: ['Quel budget mensuel souhaitez-vous investir pour aller au bout de vos ambitions ?'], alp: ['A', 'B', 'C', 'D', 'E', 'F'], choices: ['A0 - 50€', '50 - 100€', '100 - 250€', '250 - 500€', '500 - 1000€', '1000+€'] }, // 10
        { question: ['Quelles sont vos problématiques du moment ?'], alp: ['A', 'B', 'C', 'D'], choices: ['Je souhaite identifier (très) facilement de nouveaux prospects et leurs coordonnées (email/tel direct)', 'Je souhaite engager mes prospects rapidement, de façon personnalisée et automatique', 'Je souhaite aller plus loin et optimiser mon cycle de vente', 'Je souhaite mettre en place des worfklows du futur au sein de mon entreprise pour décupler la productivité de mes équipes'] }, // 12

    ]


    //###################################################################################################
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

        // ###################################################################################################
        if (ix === 1 && targetedClassName === 'span') {
            setColor_two(!color_two)
            // get its previous sibling
            let prevSibling = selectedButton.previousElementSibling
            if (prevSibling.className === 'btn-danger') {
                let newAnswer_two = [...answer_two]
                let selected = prevSibling.innerText

                if (newAnswer_two.includes(selected)) {
                    let newFilteredAns = newAnswer_two.filter(item => item !== selected)
                    // newAnswer_two.splice(selected, 1)
                    prevSibling.classList.remove("btn-danger")
                    setAnswer_two(newFilteredAns)
                } else {
                    prevSibling.classList.add('btn-danger')
                    setAnswer_two(selected)
                }

            } else {
                let selected = prevSibling.innerText
                prevSibling.classList.add('btn-danger')
                setAnswer_two([...answer_two, selected])

            }
        }


    }

    // ###################################################################################################


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

                    <Container style={{ display: 'flex', flexDirection: 'column', paddingLeft: '40px', fontFamily: 'Palatino' }}>


                        <Row>
                            <Col>
                                <a href="/welcomeQuestionsPage" >

                                    <button type="button" class="btn btn-outline-dark btn-sm pl-2  mt-3 float-right" data-toggle="tooltip" data-placement="top" title="Close">x</button>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            {AllQuestions.map((obj, ix) =>

                                <div>
                                    <Row>
                                        <Col>
                                            <span style={{ fontSize: '22px' }} >
                                                <button style={circle}> {ix + 12} </button>
                                                <span className='pl-4'>{obj.question}</span>

                                            </span>
                                        </Col>
                                    </Row>


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

                        </Row>



                        <center className='mt-3 pb-2'>
                            <a href="/question_five">
                                <Button variant="contained" color="primary" className='btn-primary'>Continue</Button>
                            </a>
                        </center>

                    </Container>

                </Dialog>
            </>
        </MuiThemeProvider>

    )
}
