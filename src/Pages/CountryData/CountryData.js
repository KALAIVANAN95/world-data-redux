import React from 'react'
import './CountryData.css'
import {useSelector} from 'react-redux'

import {useNavigate} from 'react-router-dom'

const CountryData = () => {

    const countryData = useSelector((state=>state.country.countryData))
    const weatherData = useSelector((state=>state.country.weatherData))

    console.log(countryData,"countryData");
    
    console.log(weatherData,"weatherData");

    const navigate = useNavigate()

    const goBack = () =>{
        navigate('/')
    }
    

    if(!countryData || !weatherData){
        return <h1>Loading.. ..</h1>
    }
  return (
    <div className='countryData'>
         <h1>{countryData?.continents}</h1>


         <img src={countryData?.flags.png} alt={countryData?.continents} />
        <div className="countryData__body">
          <h2>Details:</h2>
          <h3>Capital:{countryData?.capital}</h3>
          <h3>Region:{countryData?.region}</h3>
          <h3>Latitude:{countryData?.latlng[0]}</h3>
          <h3>Logitude:{countryData?.latlng[1]}</h3>
          <h3>Current Temperature:{weatherData?.main?.temp}</h3>
          <h3>Population:{countryData?.population}</h3>
          <div>
            <span>Borders:</span>
            {
                countryData?.borders?.map((border,index)=>{
                    return <span key={index}>{border},</span>
                })

            }
          </div>
          <div>
          <span>Alternative Names:</span>
          {
            countryData?.altSpellings?.map((altSpelling,index)=>{
                return <span key={index}>{altSpelling}</span>
            })
          }

          </div>
          <button onClick={goBack}>Back</button>
          </div>
    </div>
  )
}

export default CountryData