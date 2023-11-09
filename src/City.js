import React, { useState } from "react";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("celsius");

  function convertFarenheiht(event) {
    event.preventDefault();
    let fahrenheitTemperature = Math.round((props.temperature * 9) / 5 + 32);
    setUnit("imperial");
    setTemperature(fahrenheitTemperature);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setTemperature(props.temperature);
  }
  return (
    <div className="City">
      It is {temperature} ({unit})
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" onClick={convertFarenheiht}>
        °F{" "}
      </a>
      in {props.name}
    </div>
  );
}
