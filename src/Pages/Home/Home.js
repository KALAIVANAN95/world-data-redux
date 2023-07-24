import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { setCountries } from "../../store/actions/countries";
import "./Home.css";

import { removeCountry } from "../../store/actions/country";
const Home = () => {
  //https://restcountries.eu/rest/v2/

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    dispatch(removeCountry())
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    dispatch(setCountries(response.data));
  };

  //const countries = useSelector((state)=>state.countries) or ==only one reducer below one multible reducer
  const countries = useSelector((state)=>{
    return state.countriesData.countries
  })
  console.log(countries,"countries");
  return (
    <div className="home">
        
      {
        countries.map((countryee,index)=>{
            console.log(countryee,"country");
            return <Card key={index} countryee={countryee}/>
             
           
        })
      }
    </div>
  );
};

export default Home;
