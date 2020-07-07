import React , {Component} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';


class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap : 'none.png'
        };
        this.shops = [
            {
            "location" : "Portland",
            "address" : "123 Portland"
            },
            {
                "location" : "Astoria",
                "address" : "123 Astoria"
            },
            {
                "location" : "",
                "address" : ""
            }
        ];

        this.chooseMap = this.chooseMap.bind(this);
      
    };
    chooseMap(e) {
        this.setState({currentMap: mapChooser(e.target.value)});
    }
render() {
    
    let storeButtons = this.shops.map((shop,id)=> {
        return(<Button key={id} location={shop.location} handleClick= {this.chooseMap}/>)
    })
    return(
    <div>
     <Header/>
    {storeButtons}
     <Map imagename= {this.state.currentMap} location= {this.props.location}/>
    </div>
    );
} 
}

export default StoreLocator;



