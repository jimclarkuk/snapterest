var React = require('react');
var ReactDOM = require('react-dom');
var h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'this is react');
var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");
var reactFragment = [h1, p];
var section = React.createElement('section', { className: 'container' }, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));