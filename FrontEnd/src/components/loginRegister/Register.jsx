import React from 'react'
import styled from '@emotion/styled'

import { Form, Button, Card } from 'react-bootstrap'
import { IoIosLock } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { MdLocalPostOffice } from 'react-icons/md';
import backgroundImage from '../../images/background_pink.png'
import salseByTechLogo from '../../images/SALESBYTECH_logo_white.png'




export default function Register() {

    const styleH2 = {
        fontWeight: 'bolder',
        textAlign: 'center',
        fontStyle: 'italic',
        fontFamily: 'Arial',
        marginTop: '20px',


    }

    const CardBody = styled.div`
        // background-image: url(${backgroundImage});
        // background-repeat: no-repeat;
        // background-size: cover;
        background-image: linear-gradient(to right, rgb(70, 0, 159),  rgb(158, 0, 146));
        height: 100vh;

    
     `


    return (
        <CardBody>
            <center>
                <img src={salseByTechLogo} alt="" className='salesByTechLogo' style={{ marginTop: '3%' }} />

            </center>
            <div className="form-container" style={{ width: '38%', marginLeft: '32%' }}>
                <Card style={{ backgroundColor: 'rgb(207, 222, 247)' }}>
                    <h3 style={styleH2}>COMPTE SALSEBYTECH</h3>
                    <Card.Body>
                        <Form>

                            <Form.Group style={{ display: 'flex' }}>
                                <FaUserTie size={33} style={{ position: 'relative', top: '1px', left: '3px', marginRight: '22px' }} />
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group style={{ display: 'flex' }}>
                                <MdLocalPostOffice size={38} style={{ position: 'relative', top: '4px', marginRight: '17px' }} />
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>


                            <Form.Group style={{ display: 'flex' }}>
                                <IoIosLock size={45} style={{ position: 'relative', top: '-1px', marginRight: '12px' }} />
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group style={{ display: 'flex' }}>
                                <IoIosLock size={45} style={{ position: 'relative', top: '-1px', marginRight: '12px' }} />
                                <Form.Control type="password" placeholder="Re-password" />
                            </Form.Group>


                            <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '10px' }}>

                                <Button variant="primary" type="submit">
                                    <a href="/Login" style={{ color: 'white' }}>Sign-In</a>
                                </Button>

                                <h4 style={{ fontStyle: 'italic' }}>OR</h4>

                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>

            </div>

            <h4 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Arial', fontWeight: 'bold', marginTop: '40px', color: 'white' }}>
                Mot de passe oublie ?
        </h4>

        </CardBody>

    )
}
