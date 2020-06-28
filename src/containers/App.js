import React, { Component } from 'react';
import StoreLocator from '../containers/StoreLocator';
//import '../../src/App.css';
import Header from '../components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <StoreLocator/>
      </div>
    );
  }
}


export default App;
