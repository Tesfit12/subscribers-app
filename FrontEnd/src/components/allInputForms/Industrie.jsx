import React, { useState, useEffect } from 'react'
import '../../App.css'
import {InputGroup } from 'react-bootstrap'

import ReactChipInput from "react-chip-input";

import 'react-autocomplete-input/dist/bundle.css';


export const Industrie = ()=> {


    const [industry, setIndustry] = useState([])


       const removeChipI = ix => {              
                const allIndustry = industry.slice() // getting all the values every time u add an item            
                allIndustry.splice(ix, 1);
                setIndustry(allIndustry);
                };


            const addChipI = item => {
                // const allPoste = poste.slice();
                setIndustry([... industry, item])
                console.log(item);
                };


    return (
        <>
             
            <div style={{ display: 'flex', marginBottom: '16px'}}>

                            <InputGroup.Text id="inputGroup-sizing-sm">Industrie</InputGroup.Text>
                        
                            <span style={{ color: 'blue', width: '100%' }}>
                                <ReactChipInput
                                    classes="class1"
                                    chips={industry}
                                    onRemove={(ix)=> removeChipI(ix)}
                                    onSubmit={(item)=> addChipI(item)}
                                    />      
                            </span>  
            </div>    
                                        

        </>
    )
}
