import React, { Component } from 'react';
import TextEnter from './text-enter';
import TextResult from './text-result';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-group">
            <h3>Enter text</h3>
            <TextEnter />
          </div>
          <div className="col-md-6">
            <h3>Result</h3>
            <TextResult />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
