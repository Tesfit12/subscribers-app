import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background_pink.png'
import { FcGoogle } from "react-icons/fc";
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    textTransform: 'capitalize',
    color: 'white'
  },
}));


export default function RealFireCone() {


  const classes = useStyles();


  const CardBody = styled.div`
          // background-image: url(${backgroundImage});
          // background-repeat: no-repeat;
          // background-size: cover;
          background-image: linear-gradient(to right, rgb(70, 0, 159),  rgb(158, 0, 146));
          height: 100vh;
          color: white;

          `

  const styleCenter = {
    position: 'relative',
    top: '40%',
    width: '40%',
    left: '19%',
    padding: '20px'


  }
  // <center className="form-container" style={{ position: 'absolute', top: '17%', left: '19%', width: '40%' }}>



  return (
    <CardBody>
      <center style={styleCenter} className="form-container">
        <a href="/WelcomePage">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<FcGoogle />}> Sign In with google
                        </Button>
        </a>
      </center>
    </CardBody>
  )
}


