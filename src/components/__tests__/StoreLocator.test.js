import react, { Component } from 'react';
import StoreLocator from '../../components/StoreLocator';
import { Shallow, shallow } from 'enzyme';
import ReactDOM from 'react-dom';

//smoke test with jest
// it("StoreLocator should render wothout crashing", ()=> {
//     let div = document.createElement('div');
//      ReactDOM.render('<StoreLocator/>', div);
// })


//Isolated test with Enzyme
it("StoreLocator should render wothout crashing", ()=> {
    let mountedStorLocator;
    mountedStorLocator = shallow(<StoreLocator/>);
})