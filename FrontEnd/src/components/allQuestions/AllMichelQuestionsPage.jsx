import React, { useRef, useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField';

import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



export const AllMichelQuestionsPage = () => {

    const inputRef = useRef();
    const [num, setNum] = useState(1)
    const [error, setError] = useState('')
    const [question, setQuestion] = useState('Quel est votre prénom')
    const [options, setOptions] = useState([])
    const [value, setValue] = useState('')

    const [answerOne, setAnswerOne] = useState('')
    const [answerTwo, setAnswerTwo] = useState('')
    const [answerThree, setAnswerThree] = useState('')
    const [answerFour, setAnswerFour] = useState('')
    const [answerFive, setAnswerFive] = useState('')
    const [answerSix, setAnswerSix] = useState('')
    const [answerSeven, setAnswerSeven] = useState('')


    useEffect(() => {
        window.localStorage.setItem("allAnswers", JSON.stringify([answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix]));
    }, [value]);





    useEffect(() => {

        if (num == 2) {
            setQuestion('Et votre nom')

        } else if (num == 3) {
            setQuestion('Quel est le nom de votre entreprise')

        } else if (num == 4) {

            setQuestion('Quel est votre rôle au sein de celle-ci')

        } else if (num == 5) {
            setOptions([['A', 'B', 'C'], ['Vous êtes un business :'], ['Aaaaa aaaaaaaaaaaaaaa aaaaaaa aaaaaa', 'Bbbbbbbb bbbbb bbbbbbb  bbbbbbbbbbbb', 'Cccc cccccc cccccccc cccccccccc']])

        } else if (num == 6) {
            setOptions([['Y', 'N'], ['Avez-vous un site web'], ['YES', 'NO']])

        } else if (num == 7) {
            setOptions([['7', '7'], ['Mission incomplete....'], ['SEVEN', 'SEVEN']])
        }
    }, [num])


    // will let u get the value of the input
    const handelUserText = (e) => {

        let inputValue = e.target.value
        setValue(inputValue)

        if (num == 1) {
            setAnswerOne(inputValue)
        } else if (num == 2) {
            setAnswerTwo(inputValue)
        } else if (num == 3) {
            setAnswerThree(inputValue)
        } else if (num == 4) {
            setAnswerFour(inputValue)

        } else {
            return ''
        }

    }



    // when u press the Enter key it will take you to the next question till number 5 Only
    const EnterHandler = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            e.preventDefault()
            setValue('')
            setNum(num + 1)
            setError('')

        } else if (e.keyCode === 13 && e.target.value == '') {
            e.preventDefault()
            setError('please fil the field....... ^')
        }
    }


    // will take u to the next question
    let nextHandler = () => {
        if (!value) return;
        setNum(num + 1)
        setValue('')
        setError('')
    }


    // will get the value of the dropdown list
    let optionHandler = (e) => {
        setValue(e.target.innerText)
        let selectedValue = e.target.innerText
        if (num == 5) {
            setAnswerFive(selectedValue)
            setNum(num + 1)
        } else if (num == 6) {
            setAnswerSix(selectedValue)
            setNum(num + 1)
        } else if (num == 7) {
            setAnswerSeven(selectedValue)
            setNum(num + 1)
        } else {
            return ''
        }

    }

    const styledDiv = {

        marginTop: '5px',
        minWidth: '18%',
        marginLeft: '7%'

    }







    return (
        <div style={{ backgroundColor: 'rgb(236, 236, 236)', height: '75vh' }}>
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>


                    <div style={{ margin: '12%' }}>

                        {num >= 5 ?
                            <Col> {/* ==============================  the options ==================================== */}

                                <span style={{ fontSize: '28px' }}>{num} <FaArrowRight size={13} /> {" "}{options[1]}</span>


                                {
                                    options[2] !== undefined ? options[2].map((item, ix) =>

                                        <div style={styledDiv}>

                                            <Button style={{ minWidth: '18%', display: 'flex' }} key={item} variant="outline-primary">
                                                <button style={{ borderRadius: '5px', padding: '0 8px' }} onClick={(e) => optionHandler(e)}>{options[0][ix]}</button>
                                                <span disabled={true} style={{ marginLeft: '15px' }}>{item}</span>
                                            </Button>

                                        </div>


                                    ) :
                                        ''
                                }

                                {error ? <li>{error}</li> : ''}

                            </Col>

                            :

                            <Col> {/* ============================== The TestField ==================================== */}

                                <p style={{ fontSize: '25px' }}>{num} <FaArrowRight size={12} /> {question} ? * </p>
                                <form noValidate style={{ marginLeft: '48px' }}>
                                    <TextField
                                        id="fixInputSize"
                                        autoFocus={true} value={value}
                                        onKeyDown={(e) => EnterHandler(e)}
                                        ref={inputRef}
                                        onChange={(e) => handelUserText(e)}
                                        placeholder="Repondez ici..."
                                    />
                                    {error ? <li style={{ color: 'red' }}>{error}</li> : ''}
                                </form>
                            </Col>

                        }



                        {/* ==============================  OK ! ==================================== */}

                        {
                            value && num < 5 ?
                                <Col className="m-5" onClick={nextHandler} >
                                    <button className="btn btn-dark">
                                        <span><b> OK {" "} </b> </span>
                                        <span><FaCheck size={14} /> </span>
                                    </button>

                                    <span style={{ fontSize: '12px', marginLeft: '12px' }}>
                                        appuyez sur <b>Enter ↵ </b>
                                    </span>
                                </Col>
                                :
                                null
                        }

                    </div>

                </Row>

            </Container>
        </div>
    )
}
