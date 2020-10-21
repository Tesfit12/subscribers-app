import React, {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import { TiArrowRightThick } from "react-icons/ti";
import styled from '@emotion/styled'



export default function TemplatePage() {

    const H3 = styled.h3`
        text-align: center;
        margin-top: 5px;
        text-transform: uppercase;
        font-family: Arial Black;
        font-weight: bolder;
    `
    const P = styled.p`
        text-align: center;
        text-transform: uppercase;
        padding: 10px;
    `

    const Input = styled.input`
        transform: scale(2);
        margin-right: 26px;
    `
    const Ul = styled.ul`
        display: flex;
        justify-content: space between;
        flex-direction: column;
        flex-wrap: wrap;
        list-style-type: none;
        margin-left: 12%;
        
    `
    const Li = styled.li`
         margin-bottom: 14px;
         
    `
    const Span = styled.span`
            font-weight: bold;
            position: relative;
            top: 3px;
            left: 0;
        
         
    `


// ================================================================================


    const [allCampaigns, setAllCampaigns] = useState([])


    // get all campaign
    const getAllCampaigns = async () => {
        const response = await fetch('http://localhost:5000/allCampaigns')
        const parseRes = await response.json()
        setAllCampaigns(parseRes)
        console.log(parseRes[0].michel_name);
        
    }

    useEffect(() => { 
        getAllCampaigns()
    }, []) 



    // TODO ======================= TOGGLER ================================

    const toggleFunc = (id) => {
            const findCmp = allCampaigns.find(cmp => cmp.user_id === id)
            findCmp.status = !findCmp.status
            setAllCampaigns([...allCampaigns])   
            console.log('id of the campaign-->', id)

      }



    return (
        <div className="form-container">
            
          <Card className='card'>
                <Card.Body className='card-body-email'>

                    <H3>quand, ipsum dolor sit amet dolore animi?</H3>
                    <P>ipsum dolor sit amet nisi dolore psum dolor sit amet nisi dolore this is me</P>

                    <Ul>
                            {allCampaigns.map(campaign => 
                                    
                                <Li>
                                    <label>
                                        <Input type="checkbox" name="" checked={campaign.status} onChange={()=> toggleFunc(campaign.user_id)}/>
                                        <Span>{campaign.michel_name}</Span>
                                    </label>
                                </Li>
                            )}
                    </Ul>

                    
                    <a href="/emailPage"><Button variant="outline-primary" style={{ float: "right", marginTop: '19px'}}>Next<TiArrowRightThick size={25} /></Button></a>{' '}
                    
                </Card.Body>
        </Card>
        </div>
    )
}
