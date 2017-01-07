var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  onSearch: function (e) {
    e.preventDefault();
    alert('Searched');
  },

  render: function () {
    return (
      //Call html classes className as it class is a jsx keyword.
      //Jsx converts className to class before showing it in browser.
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text site-title">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Search Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
