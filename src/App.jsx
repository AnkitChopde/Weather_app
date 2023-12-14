import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './component/SearchBar'
import WeatherDisplay from './component/WeatherDisplay'
import axios from 'axios'
import WeatherContext from './context/WeatherContext'

function App() {
 
  

  return (
    <>
    <WeatherContext>
    <div style={{textAlign:"center"}}>
    <header style={{height:"4rem",textAlign:"center",backgroundColor:"grey",color:"whitesmoke"}}>
      <h1 style={{marginTop:"10px"}}>Weather app</h1>
    </header>
    <SearchBar />
      <WeatherDisplay/>
    </div>

    </WeatherContext>
    </>
  )
}

export default App
