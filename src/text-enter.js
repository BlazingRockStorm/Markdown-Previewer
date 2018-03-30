import React, { Component } from 'react';

class TextEnter extends React.Component {
    render() {
      return (
        <textarea className="form-control writing" 
           defaultValue={this.props.defaultContent}
           onChange={this.props.change}  rows="30"
        />
      );
    }
}  

export default TextEnter;