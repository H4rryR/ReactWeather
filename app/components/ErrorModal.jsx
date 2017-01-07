var React = require('react');

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

  componentDidMount: function () {
    //Modals hidden by default, this opens it when it's rendered.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal text-center tiny" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <div>
          <button className="button" data-close="">Okay</button>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;
