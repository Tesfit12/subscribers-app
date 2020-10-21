import React from 'react'
import '../App.css'
import styled from '@emotion/styled'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import {Button, Card} from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import wine_left from '../images/wine_left.png'
import wine_right from '../images/wine_right.png'


export default function CampaignPage() {


        const styleCol = {
              paddingTop: '55px',
              marginBottom: '10%'
        }
               
        const styleH1 = {
            fontSize: '50px',
            fontFamily: 'Decorative',
            textAlign: 'center',
            marginTop: '6%',
            fontWeight: 'bold'
        }

        const styleH2 = {
            fontSize: '30px',
            fontFamily: 'Decorative',
            textAlign: 'center',
            fontWeight: 'bold'

        }
 
        const styleH3= {
            fontSize: '30px',
            fontFamily: 'Decorative',
            marginTop: '60px',
            fontWeight: 'bold'

        }
        const styleInput = {
            width: '50%',
            marginTop: '5%',
            backgroundColor: '#87CEEB',
            padding: '7px'
        }
            



    return (

                    <Container>

                        <h1 style={styleH1}>FELICITATION !!!! </h1>
                        <h2 style={styleH2}> VOUS VENEZ DE FINIR DE CREER LA CAMPAGNE NUMERO 3</h2>


                           <Row>
                                <Col style={styleCol}>
                                    <img src={wine_left} alt="" style={{ width: '120px', height: '130px' }}/>

                                </Col>

                                <Col style={{ textAlign: 'center'}} md="9">

                                        <h3 style={styleH3}>COMMENT SOUHAITEZ VOUS LA NOMMER ?</h3>
                                        <input type="text" style={styleInput}/>
                                    
                                </Col>


                                <Col style={styleCol}>
                                    <img src={wine_right} alt="" style={{ width: '120px', height: '130px' }}/>

                                </Col>

                           </Row>


                        <h3 style={{ marginLeft: '85%', marginBottom: '8%'}}>
                            <a href='#'>
                                <Button variant="outline-primary">Next
                                    <TiArrowRightThick size={25} />
                               </Button>
                            </a>
                        </h3>
                    
            </Container>

                    
        

     )
}

