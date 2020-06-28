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
    it('contins a map image', () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    });
});
