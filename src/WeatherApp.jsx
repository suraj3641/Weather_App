import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./weather.css";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Wounderland",
      temp: 24.69,
      tempMin: 24.69,
      tempmax: 24.69,
      feelsLike: 24.13,
      humidity: 35,
      weather: "clear sky",
    });

let updateInfo=(newinfo)=>{
    setweatherInfo(newinfo);
};

    return(
        <div className="weather1">
            <div style={{textAlign:"center"}}>
            <h2>Weather app by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
        </div>
    );
}
