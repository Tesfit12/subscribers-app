import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css'
import { Badge, Form, Row, Col, Container, Card, Button, } from "react-bootstrap";

// import Confirm from './sixBoxForms/Confirm'
import { Box_one, ConfirmPage } from './sixBoxForms'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// notification
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';



export default function EmailPage({ user }) {


    const { userName, address, email } = user
    const [step, setStep] = useState(1)




    const nextHandler = (boxLength) => {

        if (boxLength.length == 0) {
            store.addNotification({
                title: "Warning...!",
                message: "fields can not be empty...",
                type: "danger",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true, // if u have customize notifier you have to comment out this(if not it will; not work)
                    showIcon: true // for the x icon
                }
            });
        } else {

            setStep(step + 1)
        }

    }


    const url = window.location.href

    var colorOne = ''
    var colorTwo = ''
    var colorThree = ''
    var colorFour = ''
    var colorFive = ''
    var colorSix = ''

    if (step == 1 && url == 'http://localhost:3000/emailPage' || step == 1 && url == 'http://localhost:3000/EmailPage/' || step == 1 && url === 'http://localhost:3000/EmailPage/#') {
        colorOne = 'red'
    } else if (step == 2) {
        colorTwo = 'red'
    } else if (step == 3) {
        colorThree = 'red'
    } else if (step == 4) {
        colorFour = 'red'
    } else if (step == 5) {
        colorFive = 'red'
    } else if (step == 6) {
        colorSix = 'red'
    } else {
        colorOne = ''
    }





    return (

        <>
            <div style={{ position: 'absolute', top: '0%', left: '10px' }}>
                <ReactNotification />

            </div>



            {

                step == 7 ? <ConfirmPage num={step} /> :


                    <div className="form-container">

                        <Card className='card'>

                            <Card.Body className='card-body-email'>


                                <Form.Group>
                                    <Form.Row className='all-circles'>
                                        <h4 className='text_before_circle'>WORLD</h4>

                                        <a href="#"><button className='btn_circle' style={{ color: colorOne }}> 1 </button></a>
                                        <span className='span_dash_email' style={{ color: colorOne }}> ------- </span>

                                        <button className='btn_circle' style={{ color: colorTwo }}> 2 </button>
                                        <span className='span_dash_email' style={{ color: colorTwo }}> ------- </span>

                                        <button className='btn_circle' style={{ color: colorThree }}> 3 </button>
                                        <span className='span_dash_email' style={{ color: colorThree }}> ------- </span>

                                        <button className='btn_circle' style={{ color: colorFour }}> 4 </button>
                                        <span className='span_dash_email' style={{ color: colorFour }}> ------- </span>

                                        <button className='btn_circle' style={{ color: colorFive }}> 5 </button>
                                        <span className='span_dash_email' style={{ color: colorFive }}> ------- </span>

                                        <button className='btn_circle' style={{ color: colorSix }}> 6 </button>
                                        <h4 className='text_before_circle'>UNIVERSE</h4>

                                    </Form.Row>
                                </Form.Group>

                                <p className='P_Email_page'>Lorem ipsum dolor accusantium totam facere, pobcaecati corrupti ratione omnis quae?</p>
                                <h6 className='H6_Email_page'>Lorem ipsum dolor accusantium  corrupti ratione omnis quae?</h6>

                                <span style={{ fontWeight: 'bolder', marginLeft: '10%' }}>
                                    {userName}{' '} {email} {' '} {address} {' '}
                                </span>{" --- "}

                                <span style={{ fontWeight: 'bold', color: 'red' }}>something again something</span>

                                <Router>

                                    <Switch>

                                        {step == 1 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}
                                        {step == 2 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}
                                        {step == 3 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}
                                        {step == 4 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}
                                        {step == 5 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}
                                        {step == 6 && <Route exact path="/emailPage" render={props => <Box_one {...props} num={step} nextHandler={nextHandler} />} />}

                                    </Switch>
                                </Router>

                            </Card.Body>

                        </Card>

                    </div>
            }
        </>
    )
}
