import React , { Component } from 'react';
import '../components/Button.css';

class Button extends Component {

    render() {
    return (<button className="location-button">{this.props.location}</button>);
    }
}

export default Button;