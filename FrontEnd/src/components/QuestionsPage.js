import React, { useState, useEffect } from 'react'
import '../App.css'
import { Navbar, Nav, Card, FormControl, Button, Form, Badge, Row, Col } from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





const QuestionsPage = ({ nextHandler, inputData }) => {

    const [choseTop, setChoseTop] = useState([])
    const [choseBottom, setChoseBottom] = useState([])

    const [borderColorTopYes, setBorderColorTopYes] = useState('')
    const [borderColorTopNo, setBorderColorTopNo] = useState('')
    const [borderColorBottomYes, setBorderColorBottomYes] = useState('')
    const [borderColorBottomNo, setBorderColorBottomNo] = useState('')



    useEffect(() => {
        localStorage.setItem('questionsPage', JSON.stringify({ choseTop, choseBottom }))
    }, [choseTop, choseBottom])



    let TopYes = () => {
        setBorderColorTopNo('')
        setBorderColorTopYes('red')
        setChoseTop(true)
    }

    let TopNo = () => {
        setBorderColorTopYes('')
        setBorderColorTopNo('red')
        setChoseTop(false)
    }


    let BottomYes = () => {
        setBorderColorBottomNo('')
        setBorderColorBottomYes('red')
        setChoseBottom(true)
    }

    let BottomNo = () => {
        setBorderColorBottomYes('')
        setBorderColorBottomNo('red')
        setChoseBottom(false)
    }


    const styleDivInner = {
        width: '189.2px',
        height: '37px',
        backgroundColor: '#0073b1',
        borderRadius: '30px',
        position: 'relative',
        top: '2.5px',
        left: '2.9px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white'
    }


    return (

        <div className='form-container'>
            <Card className='card'>
                <Card.Body className='card-body-email'>


                    <h2 className='h2Questions'>Questions dummy printing ?</h2>
                    <h4 className='h4Questions'> printer galley it to printer took  make printer a galley of hello from type.</h4>

                    {/* ========================================== First QUESTION PAGE ==========================================  */}

                    <Form.Group>
                        <Form.Row>

                            <Col></Col>

                            <Col>
                                <div style={{ width: '200px', height: '47px', backgroundColor: `${!borderColorTopYes ? 'white' : 'red'}`, border: '2.6px solid rgb(17, 84, 169)', borderRadius: '30px', cursor: 'pointer' }} onClick={TopYes} >
                                    <a>
                                        <div style={styleDivInner}>
                                            <AiOutlineDoubleRight size={25} />
                                            <span>Yes</span>
                                            <span>{" "}</span>
                                        </div>
                                    </a>
                                </div>
                            </Col>


                            <Col></Col>

                            <Col>
                                <div style={{ width: '200px', height: '47px', backgroundColor: `${!borderColorTopNo ? 'white' : 'red'}`, border: '2.6px solid rgb(17, 84, 169)', borderRadius: '30px', cursor: 'pointer' }} onClick={TopNo} >
                                    <a>
                                        <div style={styleDivInner}>
                                            <AiOutlineDoubleRight size={25} />
                                            <span>NO</span>
                                            <span>{" "}</span>
                                        </div>
                                    </a>
                                </div>
                            </Col>

                            <Col></Col>

                        </Form.Row>


                    </Form.Group>

                    <br />

                    {/*  =================================== SECOND QUESTION PAGE ================================================== */}

                    <h4 className='h4Questions'> printer galley it to  printer make printer   took a galley of hello from type.</h4>

                    <Form.Group>
                        <Form.Row>

                            <Col></Col>

                            <Col>
                                <div style={{ width: '200px', height: '47px', backgroundColor: `${!borderColorBottomYes ? 'white' : 'red'}`, border: '2.6px solid rgb(17, 84, 169)', borderRadius: '30px', cursor: 'pointer' }} onClick={BottomYes}>
                                    <a>
                                        <div style={styleDivInner}>
                                            <AiOutlineDoubleRight size={25} />
                                            <span>Yes</span>
                                            <span>{" "}</span>
                                        </div>
                                    </a>
                                </div>
                            </Col>


                            <Col></Col>

                            <Col>
                                <div style={{ width: '200px', height: '47px', backgroundColor: `${!borderColorBottomNo ? 'white' : 'red'}`, border: '2.6px solid rgb(17, 84, 169)', borderRadius: '30px', cursor: 'pointer' }} onClick={BottomNo} >
                                    <a>
                                        <div style={styleDivInner}>
                                            <AiOutlineDoubleRight size={25} />
                                            <span>NO</span>
                                            <span>{" "}</span>
                                        </div>
                                    </a>
                                </div>
                            </Col>

                            <Col></Col>

                        </Form.Row>


                    </Form.Group>


                    <a onClick={() => nextHandler(choseTop, choseBottom)}>
                        <Button variant="outline-primary" style={{ float: "right" }} >Next
                                <TiArrowRightThick size={25} />
                        </Button>

                    </a>


                </Card.Body>
            </Card>
        </div >


    )
}

export default QuestionsPage