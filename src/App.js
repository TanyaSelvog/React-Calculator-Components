import React, { Component } from 'react';
import './App.css';
import Keys from '/Keys';
import Box from '/Box';
import Display from '/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
          <Box />
          <Display />
          < Keys />
        </div>

    )
  }
}

export default App;
