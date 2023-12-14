import axios from 'axios';
import React, { createContext, useState } from 'react'

export const weatherContext = createContext()

const WeatherContext = ({children}) => {
    const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleSearch=async(city)=>{
    if(!city){
        alert("please enter valid city name!")
        return;
    }
    try{
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?key=0ccae38f55684d5f8b7e70f8d8b5d214&city=${city}`)
    console.log(response.data.data)
    setWeatherData(response.data.data)
    setError("")
    }
    catch(err){
        
        
        setError('Error fetching weather data. Please try again.');
        setWeatherData(null);
    }
      }
      const addToFavorites = (city) => {
        if(!city){
            alert("Enter something!")
            return;
        }
        if (!favorites.includes(city)) {
            setFavorites((prevFavorites) => [...prevFavorites, city]);
            alert("city added to favorites!")
          } else {
            alert('City is already in favorites!');
            return;
          }
        
      };
      const removeFromFavorites = (city) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== city));
      };
  const contextValue={weatherData,error,handleSearch,favorites,addToFavorites, removeFromFavorites}
  return ( <>
  <weatherContext.Provider value={contextValue}>
    {children}
  </weatherContext.Provider>
    </>
  )
}

export default WeatherContext
