import {Box,Typography } from '@material-ui/core';





const Information =({data})=>{
    return (
        data ?
        <Box>
<Typography>
Location : {data.name}, {data.sys.country}
</Typography>
<Typography>
Temperature {data.main.temp}
</Typography>
<Typography>
Humidity : {data.main.humidity}
</Typography>
<Typography>
Sunrise : {new Date(data.sys.sunrise*1000).toLocaleTimeString()}
</Typography>
<Typography>
Sunset : {new Date(data.sys.sunset*1000).toLocaleTimeString()}
</Typography>
<Typography>
Condition : {data.weather[0].main}
</Typography>
<Typography>
Clouds : {data.clouds.all}
</Typography>
        </Box> : ''



    )
}
export default Information;