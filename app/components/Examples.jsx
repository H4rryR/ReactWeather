var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some example locations to try:</p>
      <ul>
        <li>
          <Link to="/?location=Namibia">Namibia</Link>
        </li>
        <li>
          <Link to="/?location=London">London</Link>
        </li>
        <li>
          <Link to="/?location=California">California</Link>
        </li>
      </ul>
    </div>
  );
}

module.exports = Examples;
