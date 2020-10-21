import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Account_one, Account_two, Account_three  } from './compteForms'




export default function ComptePage() {

    const styleTabs = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    
    return (
        <div style={{ marginTop: '40px' }}>
            <Tabs defaultActiveKey="profile" style={styleTabs}>
                <Tab eventKey="profile" title="Parametres du compte">
                    <Account_one />
                </Tab>
                <Tab eventKey="Facturation" title="Facturation">
                    <Account_two />
                </Tab>
                <Tab eventKey="Mode de paiement" title="Mode de paiement">
                    <Account_three />
                </Tab>
            </Tabs>
        </div>
)
}


