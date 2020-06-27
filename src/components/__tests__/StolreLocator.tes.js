import react, { Component } from 'react';
import StoreLocator from '../../components/StoreLocator';


it("StoreLocator should render wothout crashing", ()=> {
    let div = document.createElement('div');

     ReactDOM.render('<StoreLocator/>', div);
})