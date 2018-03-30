import React, { Component } from 'react';

class TextResult extends React.Component {
    render(){
        return(
            <div>{this.props.textInput}</div>
        );
    };
}

export default TextResult;