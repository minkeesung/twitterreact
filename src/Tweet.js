import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (

      <li className="tweet">
        <img className="avatar" src={this.props.tweet.avatar_url} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.tweet.username}</span>
            <span className="username">{this.props.tweet.handle}</span>
            <span className="timestamp">- 6m</span>
          </p>
          <p>{this.props.tweet.content}</p>
        </div>
      </li>

    )
}
}

export default Tweet;
