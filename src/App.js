import React, { Component } from 'react';
import TextResult from './text-result';
import TextEnter from './text-enter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textInput: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[BlazingRockStorm](https://www.freecodecamp.com/blazingrockstorm)*'
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
            <TextEnter change={this.handleInputChange.bind(this)} defaultContent={this.state.textInput}/>
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
