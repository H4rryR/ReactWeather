var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  //Rendering in here instead as Foundation renders to the DOM.
  //React does not like this.
  componentDidMount: function () {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal text-center tiny" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <div>
          <button className="button" data-close="">Okay</button>
        </div>
      </div>
    );

    //Returns string version of jsx code.
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    //Modals hidden by default, this opens it when it's rendered.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {

    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
