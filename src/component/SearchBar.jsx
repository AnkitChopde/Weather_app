import React, { useContext, useState } from 'react'
import { weatherContext } from '../context/WeatherContext';

const SearchBar = () => {
    const { handleSearch,addToFavorites,weatherData } = useContext(weatherContext)
    const [city,setCity] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(city);
    };
  return (
    <div style={{marginTop:"2rem"}}>
        <form onSubmit={handleSubmit} >
            <input type="text" name="city" placeholder="Search by city" value={city} onChange={(e)=>setCity(e.target.value)} />
            <button type={"submit"}>Search</button>
        </form>
         {weatherData && <button style={{padding:"5px 10px",marginTop:"5px",color:"white",backgroundColor:"purple"}} onClick={() => addToFavorites(city)}>
          Add to Favorites
        </button>}
      
    </div>
  )
}

export default SearchBar
