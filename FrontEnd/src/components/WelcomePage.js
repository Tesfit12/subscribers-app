import React from 'react'
import '../App.css'
import styled from '@emotion/styled'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import {Button, Card} from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";

import CompanyImage from '../images/company.png'


export default function TimePage() {

        const Ul = styled.div`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            list-style-type: none;
            margin-top: 50px
            
    
                        `

        const Title = styled.div`
            text-align: center;
            font-size: 26px;
            font-family: Arial Black;
            position: relative;
            top: 25px;
            color: rgb(237, 9, 218)

                            `

        const P = styled.div`
        
            margin-top: 40px;
            margin-left: 20px;
            margin-right: 20px

       `

    return (

             
             <Container>
                 <Title> MICHELE , NOTRE MACHINE DE VENIREMEN AUTOMATISM </Title>

                    <Ul>
                           <Col style={{ textAlign: 'center'}}>
                                <img src={ CompanyImage } alt="" srcset="" className='imgWelcome' /><br/>
                                <Title>HYPER <br/>PRODUCTIVE</Title>
                                <P>
                                    Web designers generally have nothing to do with creating content for their projects.
                                    Even so, the look of a site can be incomplete if no words are included. 
                                    Web designers need to find ways.
                                </P>
                            </Col>


                            <Col style={{ textAlign: 'center'}}>
                                <img src={ CompanyImage } alt="" srcset="" className='imgWelcome' /><br/>
                                <Title>HYPER <br/>PRODUCTIVE</Title>
                                <P>
                                    Web designers generally have nothing to do with creating content for their projects.
                                    Even so, the look of a site can be incomplete if no words are included. 
                                    Web designers need to find ways.                           
                                </P>
                            </Col>


                            <Col style={{ textAlign: 'center'}}>
                                <img src={ CompanyImage } alt="" srcset="" className='imgWelcome' /><br/>
                                <Title> HYPER <br/> PRODUCTIVE </Title>
                                <P>
                                    Web designers generally have nothing to do with creating content for their projects.
                                    Even so, the look of a site can be incomplete if no words are included. 
                                    Web designers need to find ways.
                                </P>
                            </Col>
                    </Ul>


                    <P>
                        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Allons-y !! 
                            <a href='#'>
                                <Button variant="outline-primary" style={{ marginLeft: '55px'}}>Next
                                    <TiArrowRightThick size={25} />
                               </Button>
                            </a>
                        </h3>
                    </P>
                    
            </Container>

     )
}
