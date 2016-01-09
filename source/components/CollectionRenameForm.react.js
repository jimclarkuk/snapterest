var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./header.react');
var Button = require('./Button.react');

var inputStyle = {
	marginRight: '5px'
};

var CollectionRenameForm = React.createClass({

	getInitialState: function() {
		return {
			inputValue: this.props.name
		};
	},

	setInputValue: function(inputValue) {
		this.setState({
			inputValue: inputValue
		});
	},

	handleInputValueChange: function(event) {
		var inputValue = event.target.value;
		this.setState({
			inputValue: inputValue
		});
	},

	handleFormSubmit: function(event) {
		event.preventDefault();

		var collectionName = this.state.inputValue;
		this.props.onChangeCollectionName(collectionName);
	},

	handleFormCancel: function() {
		event.preventDefault();
		var collectionName = this.props.name;
		this.setInputValue(collectionName);

		this.props.onCancelCollectionNameChange();
	},

	componentDidMount: function() {
		this.refs.collectionName.focus();
	},

	render: function() {
		return (
			<form className="form-inline" onSubmit={this.handleFormSubmit}>
				<Header text="Collection name:" />
				<div className="form-group">
					<input className="form-control" style={inputStyle} onChange={this.handleInputValueChange} value={this.state.inputValue} ref="collectionName" />
				</div>
				<Button label="Change" handleClick={this.handleFormSubmit}/>
				<Button label="Cancel" handleClick={this.handleFormCancel}/>
			</form>
			);
	}


});

module.exports = CollectionRenameForm;