import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userConnected: false
    }
  }
  render() {
    return (
      <div className="App">
        <header className="">
          <nav className="navbar navbar-inverse bg-inverse">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home</a>
            </div>
          </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
