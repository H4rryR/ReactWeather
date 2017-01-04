var React = require('react');

//Using ES6 Destructuring to destructure the props in the attribute parameter.
var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h4>It's {temp} degrees celcius in {location}!</h4>
    </div>
  );
}

module.exports = WeatherMessage;
