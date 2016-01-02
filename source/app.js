var React = require('react');
var ReactDOM = require('react-dom');

var reactClass = React.createClass({
	getInitialState: function() {
		return {
			isHeaderHidden: false,
			title: 'Stateful React Component'
		};
	},

	handleClick: function() {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function() {
		var headerElement = React.createElement('h1', { className: 'header' }, this.state.title);
		var buttonElement = React.createElement('button', {className: 'btn btn-default', onClick: this.handleClick, key: 'button'}, 'toggleHeader');
		if(this.state.isHeaderHidden){
			return React.createElement('div', null, [buttonElement]);
		}
		return React.createElement('div', null, [headerElement, buttonElement]);
	}
});

var reactComponentElement = React.createElement(reactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));