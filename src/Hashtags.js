import React, { Component } from 'react'
import Hashtag from './Hashtag'

class Hashtags extends Component {

  render() {

    return (
      <section id="trends-container">
      <h3>Trends</h3>
      <ul>
        {this.props.hashtags.map((hashtag,index) => {
          return <Hashtag hashtag={hashtag} key={index}/>})
        }
      </ul>
    </section>
    )
  }
}

export default Hashtags;
