var React = require("react");

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">The temperature in<br/>{location} is:</h3>
      <h4 className="text-center"><b>{temp}</b></h4>
    </div>
  )
};

module.exports = WeatherMessage;
