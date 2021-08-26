import React, { Component } from "react";
import Fetched from './Fetched'

class App extends Component {
  state = {
    date: "2020-09-2",
    PhotoFromapi: "",
    photo: []
  }

  componentDidMount() {
    console.log("asd")
    fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  }

  render() {
    return (
      <div>
        <header>Astronomy Picture of the Day</header>
        <Fetched photo={this.state.photo}/>
      </div>
    )
  }
}

export default App;
