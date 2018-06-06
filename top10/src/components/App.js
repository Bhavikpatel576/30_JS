import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Grid from './Grid'
// import {
//   BrowserRouter,
//   Route,
//   Link,
// } from 'react-router-dom'

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Loading",
      isLoaded: true,
    };
  }

  componentDidMount(){
    const stopper = this.state.text + "...";
    this.internal = window.setInterval(() => {
      this.state.text === stopper 
        ? this.setState(() => ({text: "Loading"}))
        : this.setState((prevState) => ({text: prevState.text + '.'}))
    }, 300);
  }

  render() {
    return (
        <div>
          <p>{this.state.text}</p>
        </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "houston",
      isLoaded: false,
      weatherItems: []
    };
  }

  componentDidMount(){
    const encodedURI = encodeURI('http://api.openweathermap.org/data/2.5/forecast?q=houston,us&appid=89eddc9e1a5f735333a450fb4e2a3a4a')
    fetch(encodedURI)
      .then(results => {
        return results.json();
      }).then(data => {
        let weatherItems = data.list.map((weather) => {
          return (
            <div key = {data.results}>
              <p> {data.weather} </p>
            </div>
          )
        })
      this.setState({weatherItems: weatherItems});
      console.log("state", this.state.weatherItems);
      });
  }

  fetchAPI() {

  }

  render() {
    return (
        <div className="App">
          Let's start building!
          {this.state.weatherItems}
          <Nav/>
          <Grid/>
        </div>
    );
  }
}

export default App;
