import React, { useState, useEffect, useRef } from 'react'
import { Button, Badge, Form, Row, Col, Container } from "react-bootstrap";
import GridList from '@material-ui/core/GridList';


// notification
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


// =============== // disabled={!templateName ? true : false}





export const ConfirmPage = ({ num }) => {


    const inputRef = useRef()
    const [dataOfSixBoxes, setDataOfSixBoxes] = useState(JSON.parse(localStorage.getItem("valueOfAllBoxes")));
    const [templateName, setTemplateName] = useState('')

    console.log(dataOfSixBoxes);




    // ================================ get input value
    const changeHandler = () => {
        let templateName = inputRef.current.value
        setTemplateName(templateName)

    }


    // ================= ============================================ TODO ADD TO boxestable

    const addSixBoxesData = async () => {

        if (!templateName) {
            store.addNotification({
                title: "Warning...!",
                message: "fields can not be empty...",
                type: "danger",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true, // if u have customize notifier you have to comment out this(if not it will; not work)
                    showIcon: true // for the x icon
                }
            });
        }

        let body = {
            user_id: '1',
            michel_id: "2",
            michel_name: "Moo",
            template_name: templateName,
            template_id: '1',
            template_body: dataOfSixBoxes, // i'll get squence_id from this at the server

        };

        let response = await fetch(`http://localhost:5000/sixBoxesData`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const result = await response.json();
        console.log(result, " <-==== Added Successfully to DB");
    };



    // =========================================  StyleTheInput

    const styledInput = {
        borderRadius: '15px',
        border: '5px solid rgb(188, 213, 255)',
        height: '123px',
        width: '550px',
        shadow: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexWrap: 'wrap',
        // color: 'rgb(24, 146, 242)'

    }



    return (
        <>
            <div style={{ position: 'absolute', top: '0%', left: '10px' }}>
                <ReactNotification />

            </div>

            <div style={{ height: '77vh' }}>


                <Container style={{ padding: '1.5%' }}>

                    {/* <span style={{ display: 'flex', justifyContent: 'center' }}>
                            <div><Form.Control as="textarea" style={{ height: '38px' }} placeholder='Add Template name' ref={inputRef} onChange={changeHandler} /></div>
                            {" "}<button className="btn btn-info ml-2 mb-1">Add</button>
                        </span> */}

                    <GridList style={{ height: '520px', display: 'grid', border: '5px solid rgb(188, 213, 255)', borderRadius: '10px' }}>
                        {/* <GridList style={{ height: '500px', display: 'grid' }}> */}



                        {dataOfSixBoxes.map((box, ix) => {

                            if (box.length == 0) return null;
                            return (
                                <Row style={{ marginTop: '5px' }}>
                                    <Col style={{ display: 'flex', marginLeft: '12%' }}>
                                        <span><button className='btn_circle' style={{ marginTop: '52%' }} >{ix + 1}</button></span>
                                        <span style={{ color: 'rgb(12, 93, 161)', marginTop: '9%', height: '15px' }} >_______________________________________________</span>
                                        <div><Form.Control as="textarea" style={styledInput} value={box} /></div>
                                    </Col>
                                </Row>

                            )
                        })}

                        <Row style={{ display: 'flex', marginLeft: '39%' }}>
                            <span><Form.Control style={{ height: '37px' }} as="textarea" placeholder='Add Template name' ref={inputRef} onChange={changeHandler} /></span>

                            <span><button className="btn btn-info ml-1" onClick={() => addSixBoxesData()} >Confirm</button></span>
                        </Row>



                    </GridList>



                </Container>

            </div >

        </>

    )
}

