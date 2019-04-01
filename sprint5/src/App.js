import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'counter': 0,
    }
  }

  updateCounter = (e) => {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  render() {
    let i = 25
    let j = 10
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world {this.props.name} {i+j}</h1>
          <h2>Counter is {this.state.counter}</h2>
          <h2><button onClick={this.updateCounter}>Increment the Counter</button></h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
