import React, { useState, useEffect } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import styled from '@emotion/styled'
import askMichel_logo from '../../images/askMichel_logo.png'

export const SubmitAllAnswers = ({ nextHandler }) => {


    const [ansPage1, setAnsPage1] = useState(JSON.parse(localStorage.getItem('michelAnswersOneToFour')))
    const [ansPage2, setAnsPage2] = useState(JSON.parse(localStorage.getItem('michelAnswersFiveToEight')))
    const [ansPage3, setAnsPage3] = useState(JSON.parse(localStorage.getItem('michelAnswersNineToEleven')))
    const [ansPage4, setAnsPage4] = useState(JSON.parse(localStorage.getItem('michelAnswersTwelveToThirteen')))
    const [ansPage5, setAnsPage5] = useState(JSON.parse(localStorage.getItem('michelAnswersFourteenToFifteen')))
    const [ansPage6, setAnsPage6] = useState(JSON.parse(localStorage.getItem('michelAnswersSixteenToEnd')))


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


    const addAllAnswersToDB = async () => {

        let body = {

            // ALL YOUR DATAS HERE

        };

        let response = await fetch(`http://localhost:5000/addAllAnswersToDB`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const result = await response.json();
        console.log(result, " <-==== Added Successfully to DB");
    };



    return (
        <div style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
            <Container style={{ height: '76vh' }}>

                <div style={{ paddingTop: '1%' }}>

                    <Row style={styledRow}>

                        <Col>
                            <img src={askMichel_logo} alt="" srcset="" style={{ width: '550px', height: '300px', borderRadius: '10px' }} />
                        </Col>

                        <Col>C'est bien reçu, merci pour vos réponses ! </Col>

                        <Col>Ne bougez pas, nos recommandations arrivent d'une seconde à</Col>

                        <Col>l'autre dans votre boîte mail !</Col>

                        <Col style={{ marginTop: '22px', marginLeft: '11%' }}>
                            <a href="/welcomeQuestionsPage">
                                <button className="btn btn-dark"><h4>repeter!</h4></button>
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
