import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Clock.js';
import Clock from './Clock.js';
import MyComponent from './mycomponent.js';
import ColoredBlock from './ColoredBlock.js';
//let time =new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.props.someName} !
          </p>
          <Clock>
           
          </Clock>
          <MyComponent/>
          <ColoredBlock/>
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