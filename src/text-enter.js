import React, { Component } from 'react';

class TextEnter extends React.Component{
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

    render(){
        return(
            <textarea className="form-control writing" onChange={this.handleInputChange.bind(this)} value={this.state.textInput} />
        );
    }
}

export default TextEnter;