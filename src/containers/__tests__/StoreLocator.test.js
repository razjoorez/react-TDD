import React from 'react';
import StoreLocator from '../../containers/StoreLocator';
import { Shallow, shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';

//smoke test with jest
// it("StoreLocator should render wothout crashing", ()=> {
//     let div = document.createElement('div');
//      ReactDOM.render('<StoreLocator/>', div);
// })


//Isolated test with Enzyme

describe("StoreLocator" , function() {
let mountedStoreLocator;

beforeEach(()=> {
    mountedStoreLocator = shallow(<StoreLocator/>);
});

it("StoreLocator should render wothout crashing", ()=> {
    //let mountedStoreLocator;
    mountedStoreLocator = shallow(<StoreLocator/>);
});

it('render a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
});

it('render two buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
});

it('render a map', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
});

});
describe("chooseMap", function() {

it('updates this.state.currentMap using the location passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator/>);
    let mockEvent = {target: {value: 'testland'}};
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
});

});



