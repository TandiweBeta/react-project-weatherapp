import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"; 


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
   
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();

  }


  function changeCity(event){
    setCity(event.target.value);

  }

  function search(){
  const apiKey = "00c99d472fbddtac3e3b2d017a4afdbo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              autoFocus
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data= {weatherData}/>
      <WeatherForecast coordinates = {weatherData.coordinates}/>
    </div>
  );

}   else {
  search();
  return "Loading..."
}
}
