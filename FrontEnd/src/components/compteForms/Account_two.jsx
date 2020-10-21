import React, {useState, useEffect} from 'react'
import {Table, Container} from 'react-bootstrap'



export const Account_two = () => {

    const [accounts, setAccounts] = useState([])
    
    
    useEffect(() => {
        getUserAccount()
    }, [])

    const getUserAccount = async ()=> {
        const response = await fetch('http://localhost:5000/allCampaigns')
        const parseRes = await response.json()
        setAccounts(parseRes)
        console.log(parseRes);
    }

    const styleTable = {
        backgroundColor: 'rgb(206, 222, 247)',
        color: 'black'
    }

    return (
        <div className="container mt-5" style={{ marginBottom: '20%' }}>
            <Table striped bordered hover>
                <thead style={{ backgroundColor: 'rgb(30, 100, 150)', color: 'white' }}>
                    <tr>
                        <th>#</th>
                        <th>Date de fraction</th>
                        <th>Numero de facture</th>
                        <th>price</th>
                        <th>Status</th>
                        <th>Detail de la facture</th>
                    </tr>
                </thead>
                <tbody style={styleTable}>

                {accounts.map(userAccount => 
                                    
                                                        
                            <tr>
                                <td>1</td>
                                <td>{userAccount.michel_id}</td>
                                <td>{userAccount.michel_name}</td>
                                <td>{userAccount.max_prospect}$</td>
                                <td>{userAccount.status}</td>
                                <td>{userAccount.query_position}</td>
                         </tr>
                                )}
                </tbody>
            </Table>
        </div>
    )
}



