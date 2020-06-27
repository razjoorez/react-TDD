import react, { Component } from 'react';
import StoreLocator from '../../components/StoreLocator';
import ReactDOM from 'react-dom';


it("StoreLocator should render wothout crashing", ()=> {
    let div = document.createElement('div');

     ReactDOM.render('<StoreLocator/>', div);
})