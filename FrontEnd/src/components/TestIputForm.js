import React, { useState, useEffect } from 'react'
import '../App.css'
import { Card, Button, Form, InputGroup } from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import 'react-autocomplete-input/dist/bundle.css';
import ReactChipInput from "react-chip-input";
import 'react-autocomplete-input/dist/bundle.css';
import ZoneChips from './allInputForms/ZoneChips';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";



export default function TestInputForm({ nextHandler }) {

    const [poste, setPoste] = useState([])
    const [effecti, setEffecti] = useState([])
    const [industry, setIndustry] = useState([])




    // poste=========
    const removeChipPoste = ix => {
        const allPoste = poste.slice() // getting all the values every time u add an item            
        allPoste.splice(ix, 1);
        setPoste(allPoste);
    };


    const addChipPoste = item => {
        setPoste([...poste, item])
        console.log(item);
    };

    // post e=========


    const removeChipIndustry = ix => {
        const allIndustry = industry.slice() // getting all the values every time u add an item            
        allIndustry.splice(ix, 1);
        setIndustry(allIndustry);
    };


    const addChipIndustry = item => {
        // const allPoste = poste.slice();
        setIndustry([...industry, item])
        console.log(item);
    };

    // effecti =============

    const handleDropdownChange = (v) => {
        // check if it already exists
        if (!effecti.includes(v)) {
            setEffecti([...effecti, v])
        }
    }


    const removeChipEffecti = ix => {
        const allEffecti = effecti.slice() // getting all the values every time u add an item            
        allEffecti.splice(ix, 1);
        setEffecti(allEffecti);
    };


    const addChipEffecti = item => {
        const allEffecti = effecti.slice();
        allEffecti.push(item);
        setEffecti(allEffecti);
    };

    // effecti========



    const submitHandler = (e) => {
        e.preventDefault()

        // return <QuestionsPage/>
    }




    return (


        <div className="form-container">

            <Card className='card'>
                <Card.Body>


                    <h2 className='h2Form'>Dummy Hello text of the one typesetting ?</h2>
                    <p className='pForm'>  when an  printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <Form.Group>
                        {/* ====================================== */}
                        <div style={{ display: 'flex', marginBottom: '16px' }}>

                            <InputGroup.Text>Poste</InputGroup.Text>

                            <span style={{ color: 'blue', width: '100%' }}>

                                <ReactChipInput
                                    classes="class1"
                                    chips={poste}
                                    onRemove={(ix) => removeChipPoste(ix)}
                                    onSubmit={(item) => addChipPoste(item)}
                                />
                            </span>
                        </div>
                        {/* ====================================== */}

                        {/* ====================================== */}
                        {/* ============================================================== */}

                        <div style={{ display: 'flex', marginBottom: '16px' }}>

                            <InputGroup.Text>Effectif</InputGroup.Text>
                            <span style={{ color: 'blue', width: '100%' }}>
                                <ReactChipInput
                                    classes="class1"
                                    chips={effecti}
                                    onRemove={(ix) => removeChipEffecti(ix)}
                                    onSubmit={(item) => addChipEffecti(item)}
                                    placeholder='Effectif here....'
                                />
                            </span>

                            <select id="dropdown" onChange={(e) => handleDropdownChange(e.target.value)}>
                                <option value="one">one</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                                <option value="Four">Four</option>
                            </select>

                        </div>


                        {/* ====================================== */}
                        {/* ====================================== */}


                        <div style={{ display: 'flex', marginBottom: '16px' }}>

                            <InputGroup.Text id="inputGroup-sizing-sm">Industrie</InputGroup.Text>

                            <span style={{ color: 'blue', width: '100%' }}>
                                <ReactChipInput
                                    classes="class1"
                                    chips={industry}
                                    onRemove={(ix) => removeChipIndustry(ix)}
                                    onSubmit={(item) => addChipIndustry(item)}
                                />
                            </span>
                        </div>

                        {/* ====================================== */}
                        {/* ====================================== */}



                        <div style={{ display: 'flex', marginBottom: '19px' }}>

                            <InputGroup.Text id="inputGroup-sizing-md">Zone Geographique</InputGroup.Text>

                            <ZoneChips />


                        </div>
                        {/* ====================================== */}




                    </Form.Group>


                    <p>* Lorem ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <Button variant="outline-primary" style={{ float: "right" }} onClick={() => nextHandler(poste, industry)} >Next
                    <Link
                            to={{
                                pathname: "/",
                                state: { poste: true }
                            }}
                        />
                        <TiArrowRightThick size={25} />
                    </Button>


                </Card.Body>
            </Card>

        </div>



    )
}
