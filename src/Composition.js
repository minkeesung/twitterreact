import React, { Component } from 'react'
import axios from 'axios'
import querystring from 'querystring'

class Composition extends Component {
  constructor(props) {
    super(props);
    this.state = {tweet: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({tweet: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let tweet = this.refs.input.value
    axios.post('http://localhost:8080/tweets', querystring.stringify({content: tweet}))
    .then(response => {
      this.props.addTweet(response.data)
    })
  }




  render() {
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>

        <form id="tweet-form" onSubmit={this.handleSubmit}>
          <textarea ref='input' value={this.state.tweet} onChange={this.handleChange} id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet" />
        </form>
      </section>

    )
  }
}

export default Composition;
