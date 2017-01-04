var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="location">Enter Location: </label>
            <input id="location" type="text" ref="location" placeholder="Enter location here..." />
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
