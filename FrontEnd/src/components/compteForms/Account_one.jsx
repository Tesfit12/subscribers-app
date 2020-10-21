import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container, FormControl } from 'react-bootstrap'
// import { ImCross } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { ImCross } from "react-icons/fa";


import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";







export const Account_one = () => {

    const [userName, setUserName] = useState([])
    const [userEmail, setUserEmail] = useState([])
    const [status, setStatus] = useState('')

    useEffect(() => {
        updateAccount()
    }, [])


    const updateAccount = async () => {

        let userAccount = await fetch(`http://localhost:5000/user/1`)
        let parseRes = await userAccount.json()

        setUserName(parseRes[0].michel_name)
        setUserEmail(parseRes[0].query_position)
        setStatus(parseRes[0].status)

    }

    // ================================================================


    const userAccountUpdater = async () => {

        // create an OBJ TO SEND TO THE server
        const body = {
            newUserName: userName,
            newUserEmail: userEmail
        }

        const send_and_getUpdatedUser = await fetch(`http://localhost:5000/updateUser/2`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        })

        let parseRes = await send_and_getUpdatedUser.json()
        setUserName(parseRes[0].michel_name)
        setUserEmail(parseRes[0].query_position)

    }


    const styleForm = {
        margin: '40px'

    }
    const styleDiv = {
        borderLeft: '3px solid black',
        height: '357px',

    }

    const styleSpan = {
        marginRight: '40px',
        fontSize: '20px'
    }






    return (
        <div style={styleForm}>
            <Container>
                <Row className="justify-content-center">

                    <Col>

                        <Form>

                            <Form.Group controlId="formBasicEmail">
                                Nom <Form.Control type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                Address e-mail <Form.Control type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                Nouveau mot de passe <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                Conform Nouveau mot de passe <Form.Control type="password" />
                            </Form.Group>


                            <center>
                                <Button variant="primary" type="submit" style={{ marginTop: '15px', marginBottom: '35px' }} onClick={() => userAccountUpdater()}>
                                    Update account
                                        </Button>
                            </center>

                        </Form>

                    </Col>


                    {/* =================================================== */}

                    <Col md="auto"><div style={styleDiv}></div></Col>


                    {/* ================================================= */}


                    <Col>
                        <p style={{ fontWeight: 'bolder' }}>Service Lorem, ipsum dolor sit iste dolorem doloribus cum eum.</p>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>

                            <span style={styleSpan}>
                                {!status ? <GoX size={38} style={{ color: 'red', borderRadius: '3px' }} /> : <GoCheck size={38} style={{ color: 'green', borderRadius: '3px' }} />}
                            </span>

                            <span style={styleSpan}><GrLinkedin size={38} style={{ color: 'rgb(17, 86, 170)', borderRadius: '3px' }} /></span>
                            <span style={styleSpan}>LinkedIn</span>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}
