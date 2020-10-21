import React, { useState, useEffect } from 'react'
import '../../App.css'
import {InputGroup } from 'react-bootstrap'
import ReactChipInput from "react-chip-input";
import 'react-autocomplete-input/dist/bundle.css';

 


export const Poste = ()=> {

    
    const [poste, setPoste] = useState([])


        const removeChipP = ix => {              
                const allPoste = poste.slice() // getting all the values every time u add an item            
                allPoste.splice(ix, 1);
                setPoste(allPoste);
                };
    
    
        const addChipP = item => {
                setPoste([... poste, item])
                console.log(item);
                };






    return (
        <>

            <div style={{ display: 'flex', marginBottom: '16px'}}>

                    <InputGroup.Text>Poste</InputGroup.Text>
                        
                   <span style={{ color: 'blue', width: '100%' }}>
                        <ReactChipInput
                                classes="class1"
                                chips={poste}
                                onRemove={(ix)=> removeChipP(ix)}
                                onSubmit={(item)=> addChipP(item)}
                                />  
                       </span>  
            </div>      

        </>
    )
}
