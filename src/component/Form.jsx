import { TextField ,Box, Button,makeStyles} from "@material-ui/core"
import { useEffect, useState } from "react";
import { getData } from "../service/api";
import Information from "./Information";

const  useStyles= makeStyles({


    component:{
        padding:'10px',
        display: 'flex',
        background: '#445A6F'
    },
    input: {
        color: '#fff',
        marginRight: 15
    },
    labelRoot: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        background: '#e67e22',
        color: '#fff',
        width: 150,
        height: 40,
        marginTop: 5
    }

}

)


const Form =()=>{
    const classes = useStyles();

     const [data, getWeatherData]= useState();
     const [city, setCity]= useState('');
     const [country, setCountry]= useState('');
     const [click, handleClick]= useState('false');


    useEffect(()=>{
        const getWeather = async ()=>{
    city && await  getData(city, country).then(response =>{
           getWeatherData(response.data)
        })}
        getWeather();
        handleCityChange(false)
    },[click]);


    const handleCityChange=(value)=>{
        setCity (value);
    }

     const handleCountryChange=(value)=>{
        setCountry (value);
     }

    return(
        <>
        <Box className={classes.component}>
            <TextField 
             InputProps={{className: classes.input}} 
             onChange={(e)=> handleCityChange(e.target.value)}
             className={classes.input} 
            label ="city"
            />
            <TextField 

             InputProps={{className: classes.input}} 
             onChange={(e)=> handleCountryChange(e.target.value)}
             className={classes.input} 
             label ="country"
            />
            <Button variant="contained"
            className={classes.button} 
            onClick={()=>handleClick(true)}

            >Get Weather</Button>
        </Box>
        <Information data={data}/>
        </>
    )
}
export default Form;