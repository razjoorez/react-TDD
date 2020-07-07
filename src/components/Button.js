import React , { Component } from 'react';
import '../components/Button.css';

class Button extends Component {

    render() {
    return (<button className="location-button" onClick={this.props.handleClick}>{this.props.location ? this.props.location : 'All Locations'}</button>);
    }
}

export default Button;