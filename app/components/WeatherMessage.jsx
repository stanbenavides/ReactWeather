var React = require("react");

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <h3>The temperature in {location} is:</h3>
//         <p>{temp}</p>
//       </div>
//       )
//     }
//   });

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>The temperature in {location} is:</h3>
      <p>{temp}</p>
    </div>
  )
};

module.exports = WeatherMessage;
