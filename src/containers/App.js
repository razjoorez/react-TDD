import React, { Component } from 'react';
import StoreLocator from '../containers/StoreLocator';
//import Map from '../components/Map';
import '../../src/App.css';
//import Header from '../components/Header';
class App extends Component {
  render() {
    return (
      <div>
          <div className="App">
          <StoreLocator/>
          </div>
         
        
      </div>
    );
  }
}


export default App;
