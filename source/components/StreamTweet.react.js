var React = require("react");
var ReactDom = require("react-dom");
var Header = require("./Header.react");
var Tweet = require("./Tweet.react");

var StreamTweet = React.createClass({

	getInitialState: function() {
		console.log('[Snapterest] StreamTweet1:getInitialState()');
		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function() {
		console.log('[Snapterest] StreamTweet2:componentWillMount()');
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
		console.log('[Snapterest] StreamTweet3:componentDidMount()');
		var componentDOMRepresentation = ReactDom.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHtml;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHtml;
	},

	componentWillUnmount: function() {
		console.log('[Snapterest] StreamTweet8:componentWillUnmount()');
		delete window.snapterest;
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('[Snapterest] StreamTweet4:componentWillReceiveProps()');
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;

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
		console.log('[Snapterest] StreamTweet5:shouldComponentUpdate()');

		return nextProps.tweet.text.length > 1;
	},

	componentWillUpdate: function(nextProps, nextStates) {
		console.log('[Snapterest] StreamTweet6:componentWillUpdate()');
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log('[Snapterest] StreamTweet7:componentDidUpdate()');
		window.snapterest.numberOfDisplayedTweets++;
	},

	render: function() {
		console.log('[Snapterest] StreamTweet:render()');
		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection}/>
			</section>
		);
	}
});

module.exports = StreamTweet;