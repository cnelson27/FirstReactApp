import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iApple from './images/apple.jpg'
import iBag from './images/bag.jpg'
import iBalloon from './images/balloon.jpg'
import iBananas from './images/bananas.jpg'

const IMAGES = [
  iApple,
  iBag,
  iBalloon,
  iBananas
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'counter': 0,
      'backCounter': 100,
      'doubleCounter': 1,
      current: iApple,
    }
  }

  incrementCounter = (e) => {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
        backCounter: state.backCounter - 1,
        doubleCounter: state.doubleCounter * 2,
      }
    })
  }

  decrementCounter = (e) => {
    this.setState((state, props) => {
      return {
        counter: state.counter - 1,
        backCounter: state.backCounter + 1,
        doubleCounter: state.doubleCounter / 2,
      }
    })
  }

  changeImage = (img) => {
    this.setState((state, props) => {
      return {
        current: img,
      }
    })
  }

  render() {
    let i = 25
    let j = 10
    return (
      <div className="App">
        <div className="product-image-container">
          {IMAGES.map((img, idx) => {
            return (
              <img 
              key={idx}
              className={this.state.current === img ? 'product-image active': 'product-image'}
              src={img} 
              alt="product-image" 
              onClick={(e) => {
                this.changeImage(img)
              }}
            />
            )
          })}
        </div>
        
        <img className="main-image" src={this.state.current} alt="apple" />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1>Hello world {this.props.name} {i+j}</h1>
      //     <span>
      //       {/* Counter is {this.state.counter}<br />
      //       Countdown is {this.state.backCounter}<br />
      //       Double Counter is {this.state.doubleCounter}<br />
      //       <button onClick={this.incrementCounter}>Increase the Counter</button>
      //       <button onClick={this.decrementCounter}>Reverse</button> */}
      //     </span>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
