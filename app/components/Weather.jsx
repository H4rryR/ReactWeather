var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
        that.setState({
          isLoading: false,
          temp: null,
          location: null,
          errorMessage: e.message
        });
    });
  },

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state; //Pulling data from the state with ES6 Restructuring.

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp != null && location != null) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Weather Search</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
