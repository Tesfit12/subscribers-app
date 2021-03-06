import React from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import askMichel_logo from '../images/askMichel_logo.png'




export default function AskMichelPage() {


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

                        <Col style={{ marginTop: '22px' }} >
                            <a href="/AllMichelQuestionsPage">
                                <button className="btn btn-dark"><h4>C'est parti !</h4></button>
                            </a>

                            <span style={{ fontSize: '12px', marginLeft: '12px' }}>
                                appuyez sur <b>Enter ↵ </b>
                            </span>
                        </Col>


                    </Row>

                </div>
            </Container>
        </div>
    )
}
