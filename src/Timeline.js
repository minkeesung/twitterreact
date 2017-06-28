import React, { Component } from 'react';
import Tweet from './Tweet'



class Timeline extends Component {



  render() {
    return(
      <div id="tweets-container">
         <h3>Tweets</h3>
        {this.props.tweets.map((tweet,index) => {
          return <Tweet tweet={tweet} key={index}/>})
        }
      </div>
    )
  }
}
export default Timeline;
