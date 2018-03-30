import React, { Component } from 'react';
import TextResult from './text-result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textInput: ''
    };
  }

  handleInputChange(event){
      this.setState({
          textInput: event.target.value
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-group">
            <h3>Enter text</h3>
            <textarea className="form-control writing" onChange={this.handleInputChange.bind(this)} value={this.state.textInput} />
          </div>
          <div className="col-md-6">
            <h3>Result</h3>
            <TextResult textInput={this.state.textInput}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
