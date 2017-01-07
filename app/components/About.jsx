var React = require('react');

//Stateless Functional Components can be used for Presentational Components.
//ES6 Arrow Functions can be used here to make it even simpler.
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is an application that retreives the weather from a secific
        location using the Open Weather Map API.
      </p>
      <p>
        I built this app using The Complete React Web App Course at Udemy
        to learn how to make web applications with React.
      </p>
      <ul>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">The Complete React Web App Course</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
