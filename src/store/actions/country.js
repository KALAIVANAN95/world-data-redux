import axios from "axios"

export const setCountry = (country,weatherData)=>{
    return{
        type:"SET_COUNTRY",
        data:country,
        payload:weatherData,
    }
}

export const removeCountry = () =>{
    return{
        type:"REMOVE_COUNTRY"
    }
}

//Middleware functions... weather data

export const getWeatherData = (lat,lng,country)=>{
    return async (dispatch)=>{
        try {
            const responseData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=998653405411b9b70ba3c68ba75f3b4f&units=metric`)
            console.log(responseData);
            dispatch(setCountry(country,responseData.data))
        } catch (error) {
            console.log(error);
        }
    }
}

