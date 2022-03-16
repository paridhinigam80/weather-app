import Image from '../images/bg.jpg';
import React from "react";
import { makeStyles, Box } from '@material-ui/core';
import Form from './Form';




 export const useStyles = makeStyles({
    component:{
        height:'100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '80%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '70%',
        height: '80%',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)'
        
        
    }
})

const Weather =()=>{
    const classes= useStyles();
    return(
<Box className={classes.component}>
<Box className={classes.leftContainer}>

</Box>
<Box className={classes.rightContainer}>
    <Form/>
</Box>
</Box>

    );
}
export default Weather;
