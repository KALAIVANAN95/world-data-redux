import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Card.css";
import { getWeatherData } from "../store/actions/country";
const Card = ({ countryee }) => {

    const dispatch = useDispatch()
    const getCountryData = ()=>{
        dispatch(getWeatherData(countryee.latlng[0],countryee.latlng[1],countryee))
    }
  return (
    <Link to="/country-data" onClick={getCountryData}>
      <div className="card">
        <h3 className="card__title">{countryee.continents}</h3>
        <img src={countryee.flags.png} alt={countryee.continents} />
        <div className="card__body">
          <h4>Details:</h4>
          <p>Capital:{countryee.capital}</p>
          <p>Region:{countryee.region}</p>
          <p>Latitude:{countryee.latlng[0]}</p>
          <p>Logitude:{countryee.latlng[1]}</p>
          
        </div>
      </div>
    </Link>
  );
};

export default Card;
