import React from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap'
import {Layout} from './Layout'
import { Link } from 'react-router-dom'





export default function Not_found() {
    return (
        <div>
            <Layout>
            <Jumbotron style={{ margin: 'auto', marginTop: '3%', width: '80%'}}>
                <Container>
                    <h1>Error: </h1>
                    <div style={{ margin: '3%' }}>
                        <h4> Page not found. Incorrect request</h4><br/>
                        <Link to="/WelcomePage">
                            <Button variant="danger">Back to Welcome page</Button>
                        </Link>
                    </div>
                </Container>
            </Jumbotron>
            </Layout>
        </div>
    )
}

{/* */}