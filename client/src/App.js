import React, { Component } from "react";
import Fetched from './Components/Fetched'
import Date from "./Components/Date";

class App extends Component {
  state = {
    date: "",
    PhotoFromapi: "",
    photo: []
  }

  changeDate = e => {
    e.preventDefault()
    let dateFromInput = e.target[0].value;
    this.newRequest(dateFromInput)
  }

  newRequest = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  }

  render() {
    return (
      <div>
        <header>Astronomy Picture of the Day</header>
        <br />
        <Date date={this.changeDate}/>
        <Fetched photo={this.state.photo}/>
      </div>
    )
  }
}

export default App;
