import React , { Component } from 'react';
import '../components/Map.css'

class Map extends Component {

    render() {
        return(
            <div className="MapBox">
                 <img src="./images/none.png" alt="no store selected"/>
            </div>
       );
    }
}

export default Map;