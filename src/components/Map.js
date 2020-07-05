import React , { Component } from 'react';
import '../components/Map.css';

class Map extends Component {

    render() {
        let imagepath;
        if(this.props.imagename) {
            imagepath ="./images/" + this.props.imagename; 
        }else {
            imagepath = "./images/none.png";
        }
        return(
           
            <div className="MapBox">
                 <img  src={imagepath} alt={this.props.location}/>
            </div>
       );
    }
}

export default Map;