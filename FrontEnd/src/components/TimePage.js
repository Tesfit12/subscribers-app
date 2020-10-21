import React, { useState } from 'react'
import '../App.css'
import SundayImage from '../images/sunday.png'
import MondayImage from '../images/monday.png'
import TuesdayImage from '../images/tuesday.png'
import WednesdayImage from '../images/wednesday.png'
import ThursdayImage from '../images/thursday.png'
import FridayImage from '../images/friday.png'
import SaturdayImage from '../images/saturday.png'

import {Button, Card} from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import { GrSchedule } from "react-icons/gr";




export default function TimePage({ nextHandler }) {

      const [firstButton, setFirstButton] = useState([false])
      const [secondButton, setSecondButton] = useState([true])
      

    return (
        <div className="form-container">
            
          <Card className='card'>
                <Card.Body className='card-body-email'>

                    <h3 className='H3_TimePage'>quand, ipsum dolor sit amet dolore animi?</h3>
                    <p className='P_TimePage'>ipsum dolor sit amet nisi dolore</p>

                    <div className='four_day_icons'>

                        <ul className='Ul_day_icons'>

                           <li>
                                <img src={ SundayImage } alt="" srcset=""  className='imgTimePage' /><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>
                          <li>
                                <img src={ MondayImage } alt="" srcset="" className='imgTimePage' /><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                          <li>
                                <img src={ TuesdayImage } alt="" srcset="" className='imgTimePage' /><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                          <li>
                                <img src={ WednesdayImage } alt="" srcset="" className='imgTimePage' /><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                          <li>
                                <img src={ ThursdayImage } alt="" srcset="" className='imgTimePage' /><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                          <li>
                                <img src={ FridayImage } alt="" srcset="" className='imgTimePage'/><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                          <li>
                                <img src={ SaturdayImage } alt="" srcset="" className='imgTimePage'/><br/>
                                <input type="checkbox" name="" id="" className='checkBox'/>
                          </li>

                        </ul>

                    </div>


                    <span className='Span_Time_Page_bottom'>
                          <label htmlFor="">Enter</label>
                          <input type="datetime" name="" id="" style={ { width: '90px', height: '30px', backgroundColor: 'rgb(138, 211, 249)' }}/>
                          <label htmlFor="">Universe Et</label>
                          <input type="datetime" name="" id="" style={ { width: '90px', height: '30px', backgroundColor: 'rgb(138, 211, 249)' }}/>        
                   </span>



                   <a onClick={()=> nextHandler(firstButton, secondButton)}>
                            <Button variant="outline-primary" style={{ float: "right"}}>Next
                                <TiArrowRightThick size={25} />
                            </Button>
                  </a>{' '}
                    
                </Card.Body>
        </Card>
        </div>
    )
}
