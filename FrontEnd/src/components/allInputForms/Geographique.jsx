import React, { useState, useEffect } from 'react'
import '../../App.css'
import {InputGroup, FormControl } from 'react-bootstrap'
import 'react-autocomplete-input/dist/bundle.css';
import ZoneChips from './ZoneChips';
import DropdownPage from './DropdownPage'
import ReactChipInput from "react-chip-input";


export const Geographique = ()=> {

    // const [filteredItem, setFilteredItem] = useState([])
    // const [zoneValue, setZoneValue] = useState('')
    // const [defaultValue, setDefaultValue] = useState(null)


    // let listOfCities = ["Tel-Aviv", "Jaffa", "Jerusalem", "Haifa"]

    //     const FilterFunction = (inputValue)=> {

    //         let box = []
    //         for (const city of listOfCities) {
                
    //                 if (city.includes(inputValue) && inputValue !== '') {                          
    //                         box.push(city)                                             
    //                     }else if (inputValue.keyCode == 46){
    //                         console.log(46);
                            
    //                     }else{

    //                         setFilteredItem([])
    //                     }
    //             }
    //             setFilteredItem(box)  


    //         }



    return (
            <>
                    {/* <div style={{ display: 'flex', marginBottom: '15px'}}>

                                                
                        {filteredItem.length !== 0 ? 
                                    <ul className='zoneGeographique'>
                                        {filteredItem.map(city => <li key={city}> {city} </li>)} 
                                    </ul> : null}
                

                            <InputGroup.Text id="inputGroup-sizing-sm">Zone Geographique</InputGroup.Text>
                            <FormControl onChange={(e)=> FilterFunction(e.target.value)} value={zoneValue || defaultValue}/>
                    
                    </div> */}

                {/* ================================================ */}
                <div style={{ display: 'flex', marginBottom: '19px'}}>

                    <InputGroup.Text id="inputGroup-sizing-md">Zone Geographique</InputGroup.Text>
                    
                    <ZoneChips/>


                </div>

        </>
    )
}
