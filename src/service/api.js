import axios from 'axios';

const URL= 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='37814335bdb7ec64a41433a3cb5bf62c';

export const getData= async(city, country)=>{
    return  await axios.get(`${URL}?q=${city},${country}india&appid=${API_KEY}&units=metric`)
}
