import React from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import askMichel_logo from '../../images/askMichel_logo.png'

import Linkify from 'react-linkify';


export const WelcomeQuestionsPage = ({ nextHandler }) => {

    // function findUrl(text) {
    //     var regex = /(https?:\/\/[^\s]+)/g;
    //     return text.replace(regex, '<a href="$1">$1</a>')
    // }

    // var text = 'Hello this is my facebook http://www.facebook.com and this is my google http://google.com';
    // let result = findUrl(text)
    // console.log(typeof result);



    const Col = styled.div`
            text-align: center;
            font-size: 26px;
    `

    const styledRow = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '5px solid rgb(188, 213, 255)',
        borderRadius: '10px',
        paddingBottom: '2.5%'
    }


    localStorage.clear();
    return (
        <div style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
            <Container style={{ height: '76vh' }}>

                <div style={{ paddingTop: '1%' }}>

                    <Row style={styledRow}>

                        <Col>
                            <img src={askMichel_logo} alt="" srcset="" style={{ width: '550px', height: '300px', borderRadius: '10px' }} />
                        </Col>

                        <Col>Bienvenue chez Salesbytech !</Col>

                        <Col>Ce questionnaire a pour but de faire entrer vos commerciaux dans le futur de la vente.</Col>

                        <Col>Ça vous tente ?</Col>

                        <Col style={{ marginTop: '22px', marginLeft: '11%' }}>
                            <a href="/question_one">
                                <button className="btn btn-dark"><h4>C'est parti !</h4></button>
                            </a>

                            <span style={{ fontSize: '12px', marginLeft: '12px' }}>
                                appuyez sur <b>Enter ↵ </b>
                            </span>
                        </Col>
                        {/* <Linkify>{result}</Linkify> */}


                    </Row>

                </div>
            </Container>
        </div>
    )
}
