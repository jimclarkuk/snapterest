var React = require("react");
var ReactDom = require("react-dom");
var Header = require("./Header.react");
var Tweet = require("./Tweet.react");

var StreamTweet = React.createClass({

	getInitialState: function() {
		console.log('[Snapterest] StreamTweet:render()');
		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function() {
		console.log('[Snapterest] StreamTweet:componentWillMount()');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'latest photo from twitter'
		});
		window.snapterest = {
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		}
	},

	componentDidMount: function() {
		console.log('[Snapterest] StreamTweet:componentDidMount()');
		var componentDOMRepresentation = React.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHtml;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHtml;
	},

	componentWillUnmount: function() {
		console.log('[Snapterest] StreamTweet:componentWillUnmount()');
		delete window.snapterest;
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('[Snapterest] StreamTweet:componentWillReceiveProps()');
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = this.nextProps.tweet.text.length;

		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
		var headerText;

		this.setState({
			numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
		});

		if (isNumberOfCharactersIncreasing){
			headerText = 'Number of characters increasing';
		} else {
			headerText = 'Latest photos from twitter';
		}
		this.setState({
			headerText: headerText
		});

		window.snapterest.numberOfReceivedTweets++;
	},

	shouldComponentUpdate: function(nextProps, nextStates) {
		console.log('[Snapterest] StreamTweet:shouldComponentUpdate()');

		return nextProps.tweet.text.length > 1;
	},

	componentWillUpdate: function(nextProps, nextStates) {
		console.log('[Snapterest] StreamTweet:componentWillUpdate()');
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log('[Snapterest] StreamTweet:componentDidUpdate()');
		window.snapterest.numberOfDisplayedTweets++;
	},

	render: function() {
		console.log('[Snapterest] StreamTweet:render()');
		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet text={this.props.tweet} onImageClick={this.props.onAddTweetToCollection}/>
			</section>
		);
	}
});

module.exports = StreamTweet;