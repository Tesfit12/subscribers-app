import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function LinearProgressWithLabel(props) {
  return (

    <Box display="flex" alignItems="center">
   
      <Box width="100%" mr={5}>
        <LinearProgress variant="determinate" {...props} />
      </Box>

      <Box minWidth={35} >
        <Typography variant="body2" color="textSecondary"> {`${Math.round(props.value)}%`} </Typography>
      </Box>

    </Box>
  );
}

LinearProgressWithLabel.propTypes = {value: PropTypes.number.isRequired};


export default function LinearWithValueLabel() {

        const [progress, setProgress] = React.useState(10);

        useEffect(() => {
            const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
            clearInterval(timer);
            };
        }, []);

        return (
            <div style={{ width: '50%'}}>
              <LinearProgressWithLabel value={progress} />
            </div>
        );
}