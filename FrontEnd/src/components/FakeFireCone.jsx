import React from 'react'

import { FcGoogle } from "react-icons/fc";
import { GrCube } from "react-icons/gr";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background_pink.png'
import styled from '@emotion/styled'







const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        textTransform: 'capitalize'
    },
}));



export default function FakeFireCone() {

    const CardBody = styled.div`
        // background-image: url(${backgroundImage});
        // background-repeat: no-repeat;
        // background-size: cover;
        background-image: linear-gradient(to right, rgb(70, 0, 159),  rgb(158, 0, 146));

        height: 100vh;
        


 `


    const classes = useStyles();
    // const styleCenter = {marginTop: '17%', fontFamily: 'Decorative'}


    return (
        <CardBody>
            <center className="form-container" style={{ position: 'absolute', top: '15%', left: '19%', width: '40%' }}>

                <div>

                    <h3 style={{ marginTop: '9%', marginBottom: '12%' }}>The Platform.</h3>


                    <a href="/RealFireCone">
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<FcGoogle />}> Sign In with google
                        </Button>
                    </a><br />


                    <a href="/Register">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<GrCube size={25} value={{ color: 'red' }} />}> SalseByTech
                        </Button>
                    </a><br />


                    <div style={{ marginTop: '8rem' }}>

                        Something ............. ?

                        <span>
                            <a href="#" style={{ color: 'black' }}> Join Now</a>
                        </span>

                    </div>


                </div>

            </center>
        </CardBody>
    )
}

