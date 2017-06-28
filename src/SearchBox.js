import React, { Component } from 'react'
import axios from 'axios'

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event)
    axios.get(`http://localhost:8080/tweets/search/${event.target.value}`)
    .then(response => {
      console.log(response)
        this.props.filterByHashtag(response.data)
    })
  }

  render() {
    return (
      <header id="top-nav">
        <div id="brand">Lil' Twitter API</div>
        <form id="search-form" onChange={this.handleChange}>
          <input id="search" type="text" name="query" />
        </form>
      <i className="fa fa-search"></i>
      </header>
    )
  }
}

export default SearchBox;
