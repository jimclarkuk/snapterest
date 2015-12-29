var React = require('react');
var ReactDOM = require('react-dom');

var listOfItems = <ul className="list-of-items">
	<li className="item-1">item 1</li>
	<li className="item-2">item 2</li>
	<li className="item-3">item 3</li>
	</ul>

ReactDOM.render(listOfItems, document.getElementById('react-application'));