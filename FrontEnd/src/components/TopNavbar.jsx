import React from 'react'
import styled from '@emotion/styled'
import backgroundImage from '../images/background_pink.png'
import michelLogo from '../images/michel_logo.png'
import salseByTechLogo from '../images/SALESBYTECH_logo_white.png'




export default function TopNavbar() {


    const Card = styled.div`

            // background-image: url(${backgroundImage});
            // background-repeat: no-repeat;
            // background-size: cover;
            
            background-image: linear-gradient(to right, rgb(70, 0, 159),  rgb(158, 0, 146));
            display: flex;
            justify-content: space-between;
            
             `

    const styleH1 = {
        marginTop: '10px',
        color: '#fff',
        fontFamily: 'Decorative'
    }


    return (

        <Card>
            <img src={salseByTechLogo} alt="" className='salesByTechLogo' />
            <h1 style={styleH1}>CAMPAGNE AWTOMATISEE</h1>
            <img src={michelLogo} alt="" className='michelLogo' />
        </Card>
    )
}
