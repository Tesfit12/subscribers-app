import React, { useState, useEffect } from 'react'
import '../../App.css'
import {InputGroup } from 'react-bootstrap'
import ReactChipInput from "react-chip-input";
import 'react-autocomplete-input/dist/bundle.css';


export const Effectif = ()=> {

    const [value, setValue] = useState([])

        const handleDropdownChange = (v)=> {
                // check if it already exists
                if (!value.includes(v)) {               
                    setValue([... value, v])                    
                }
            }


        const removeChip = ix => {              
                const allValues = value.slice() // getting all the values every time u add an item            
                allValues.splice(ix, 1);
                setValue(allValues);
                };


        const addChip = item => {
                const allValues = value.slice();
                allValues.push(item);
                setValue(allValues);
                };


    return (
        <>

        {/* ============================================================== */}

            <div style={{ display: 'flex', marginBottom: '16px'}}>

                <InputGroup.Text>Effectif</InputGroup.Text>
                <span style={{ color: 'blue', width: '100%' }}>
                    <ReactChipInput
                            classes="class1"
                            chips={value}
                            onRemove={(ix)=> removeChip(ix)}
                            onSubmit={(item)=> addChip(item)}
                            placeholder='Effectif here....'
                        />
                </span>

                <select id="dropdown"  onChange={(e)=> handleDropdownChange(e.target.value)}>
                        <option value="one">one</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                        <option value="Four">Four</option>
                    </select>
                
            </div>

        
        </>
    )
}
