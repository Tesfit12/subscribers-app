import React, { Component } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import fire_image from "../images/fire_image.png";
import please_image from "../images/please_image.png";
import eyes_image from "../images/eyes_image.png";
import arrow_image from "../images/arrow_image.png";




export default class User_StrategyPage extends Component {


    state = {
        userOption: ''
    }


    render() {

        let styledImage = {
            height: '220px',
            width: '170px',
        }



        return (
            <Container style={{ fontFamily: 'Arial Black' }}>

                <Row style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Col>
                        <h2>QUELLE APPROCHE SOUHAITEZ VOUS ADEPTOR ?</h2>
                        <h5>PASSEZ VOUTER SOURIS SUR LES ELEMENTS ETE DECOUVREZ LES DIFFERENTES APROCHE</h5>
                    </Col>
                </Row>


                <Row>

                    <Col style={{ border: '8px solid rgb(67, 0, 159)', borderRadius: '12px', textAlign: 'center', padding: '12px', margin: '40px' }}>
                        < h4 > TIMIDE</h4>
                        <img src={eyes_image} alt="" srcset="" style={styledImage} /><br />
                        <img src={arrow_image} alt="" srcset="" style={{ float: 'right' }} />
                    </Col>

                    <Col style={{ border: '8px solid rgb(130, 0, 155)', borderRadius: '12px', textAlign: 'center', padding: '12px', margin: '40px' }}>
                        <h4>MODEREE</h4>
                        <img src={please_image} alt="" srcset="" style={styledImage} /><br />
                        <img src={arrow_image} alt="" srcset="" style={{ float: 'right' }} />
                    </Col>

                    <Col style={{ border: '8px solid rgb(201, 0, 143)', borderRadius: '12px', textAlign: 'center', padding: '12px', margin: '40px' }}>
                        <h4>AGRESSIVE</h4>
                        <img src={fire_image} alt="" srcset="" style={styledImage} /><br />
                        <img src={arrow_image} alt="" srcset="" style={{ float: 'right' }} />
                    </Col>


                </Row>



            </Container >


        )
    }
}