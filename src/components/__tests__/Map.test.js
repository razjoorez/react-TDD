import React from 'react';
import {Shallow, shallow } from 'enzyme';
import Map from '../../components/Map';
describe("Map", function() {

    let mountedMap;
    beforeEach(() => {
        mountedMap = shallow(<Map/>);
    })
    it('renders without crashing' ,  () => {
        let mountedMap = shallow(<Map/>);
    });
    it('contains an image', () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    });

    it('contains a none map when no paremters are given' , () => {
        const defaultMap = mountedMap.find('img').prop("src");
        expect(defaultMap).toEqual('./images/none.png');
    });
});
