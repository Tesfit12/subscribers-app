import React, {useState, useEffect} from 'react'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import validateImage from '../images/validate_img.png'
import styled from '@emotion/styled'



export default function ValidatePage({ data, nextHandler, inputFormsData, questionsPageData, allCampaigns }) {
    
    if (!allCampaigns) return []
    const { query_position, query_location, query_volum, query_industry} = allCampaigns;
    

    

  
    
    const H3 = styled.h3`
        text-align: center;
        margin-top: 5px;
        text-transform: uppercase;
        font-family: Arial Black;
        font-weight: bolder;
    
    `


    const styleCol = {
        paddingTop: '35px',
        marginBottom: '8%',
        marginRight: '6%'
}
     


    const styleH3= {
        fontSize: '30px',
        fontFamily: 'Decorative',
        marginTop: '70px',
        fontWeight: 'bold',
        paddingLeft: '6%',
        color: 'rgb(66, 0, 200)'
        }
   

  
    return (
        <div className="form-container">
            
          <Card className='card'>
                <Card.Body className='card-body-email'>

                    <H3> C'EST ENORME !! MICHEL PEUT CONTACTER:</H3>

                    <Container>
                                <Row>
                                        <Col style={styleCol}>
                                            <img src={validateImage} alt="" style={{ width: '150px', height: '130px' }}/>

                                        </Col>

                                        <Col style={{ textAlign: 'center'}} md="9" >
                                            {/* U can added {if statement} if there is no prospective matches */}
                                            <h3 style={styleH3}> 27, 000 FRIENDS HAVE THE SAME POSITION LIKE YOURS -> 
                                                    {query_location }{' '}
                                                    {query_position }{' '}
                                                    {query_volum }{' '}
                                                    {query_industry }
                                            </h3>
                                            
                                        </Col>


                                        <Col style={styleCol}>
                                            <img src={validateImage} alt="" style={{ width: '150px', height: '130px' }}/>

                                        </Col>

                                </Row>

                                    <strong>
                                            <span style={{ textTransform: 'uppercase', width: '60%', marginLeft: '17%', marginRight: '12%'}}>Lorem repudiandae quia odit porro dignissimos ullam sequi nihil, iusto</span>
                                            <span style={{ textTransform: 'uppercase', width: '80%', marginLeft: '13%', marginRight: '12px' }}> <strong style={{ color: 'rgb(66, 0, 200)'}}>DIRECTEURS COMMERCIAUX</strong> reiciendis repudiandae quia dignissimos dignissimos </span>
                                    </strong>
                    
                     </Container>



                    
                    <a onClick={()=> nextHandler(inputFormsData, questionsPageData)}>
                        <Button variant="outline-primary" style={{ float: "right"}} >Next
                            <TiArrowRightThick size={25} />
                        </Button>
                        
                    </a>                    
                </Card.Body>
        </Card>
        </div>
    )
}
