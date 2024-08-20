import React from "react";
import "./Weather.css";

export default function Weather(){
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
          <input type="search"
              placeholder="Enter a City..."
              className="form-contol"
            />
          </div>
          <div className="col-3">
            <input type="submit" 
            value="search" 
            className="btn btn-primary " />
          </div>
        </div>
      </form>
      
      <h1> Johannesburg</h1>
      <ul>
        <li> Wednesday 19:00</li>
        <li> Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          10°c
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind:20km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
