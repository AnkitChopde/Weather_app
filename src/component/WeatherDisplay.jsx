import React, { useContext } from 'react'
import { weatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
    const { weatherData, error,favorites,removeFromFavorites } = useContext(weatherContext);

    return (
      <div>
        {error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <>{weatherData && (
            <div style={{padding:"10px",border:"1px solid purple",margin:"auto",marginTop:"20px",width:"40%"}}>
                <h1 style={{color:"orangered"}}>Current Weather Data</h1>
                <h2>City: {weatherData[0].city_name}</h2>
              <h3>Description: {weatherData[0].weather.description}</h3>
              <p>Temperature: {weatherData[0].temp}</p>
            </div>
          )}
         {weatherData &&  <div className="favorites-list">
      <h2>Favorites</h2>
      <ul type="number">
        {favorites.map((city,index) => (
          <li key={city} style={{gap:"20px",listStyle:"none"}}>
            {index + 1}. {city}{' '}
            <button type="button" style={{padding:"2px 5px",marginTop:"5px",color:"white",backgroundColor:"purple"}} onClick={() => removeFromFavorites(city)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>}
    </>
        )}
      </div>
    );
}

export default WeatherDisplay
