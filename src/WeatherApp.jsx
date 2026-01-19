import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]=useState({
         city:"Delhi",
        feelslike: 24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
     let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
     };
    return(
        <div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}