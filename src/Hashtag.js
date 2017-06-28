import React, { Component } from 'react'
import styles from './style.css'

class Hashtag extends Component {
  render() {

    return (
      <li>{this.props.hashtag.name}</li>
    )
  }
}

export default Hashtag;
