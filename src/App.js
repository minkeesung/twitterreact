import React, { Component } from 'react';
import Timeline from './Timeline';
import Composition from './Composition'
import Hashtags from './Hashtags'
import SearchBox from './SearchBox'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tweets: [],
      hashtags: []
    }
    this.updateTweet = this.updateTweet.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  getTweets() {
    return axios.get('http://localhost:8080/tweets/recent')
  }

  getHashTags(){
    return axios.get('http://localhost:8080/hashtags/popular')
  }

  updateTweet(tweet){
    this.setState({
      tweets: [tweet].concat(this.state.tweets)
    })
  }

  changeState(tweets){
    this.setState({
      tweets: tweets
    })
  }

  componentDidMount(){
    axios.all([this.getTweets(), this.getHashTags()])
      .then(axios.spread( (tweets, hashtags)=>{
          this.setState({
            tweets: tweets.data,
            hashtags: hashtags.data
          })
      }).bind(this)
      )
    }




  render() {
    return (
      <div>
        <section className="container">
          <Timeline tweets={this.state.tweets} />
          <Composition addTweet={this.updateTweet}/>
          <Hashtags hashtags={this.state.hashtags}/>
        </section>
        <SearchBox filterByHashtag={this.changeState}/>
      </div>
    );
  }
}

export default App;
