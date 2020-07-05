import React from 'react';
import {Shallow, shallow } from 'enzyme';
import Map from '../../components/Map';
describe("Map", function() {

    let mountedMap;
    let props;
    beforeEach(() => {
        props = {
        location : undefined,
        imagename : 'testmap.png'
        };
        mountedMap = shallow(<Map {...props}/>);

    })
    it('renders without crashing' ,  () => {
        let mountedMap = shallow(<Map/>);
    });
    it('contains an image', () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    });

    it('contains a none map when no paremters are given' , () => {
        let mountedMap = shallow(<Map/>);
        const defaultMap = mountedMap.find('img').prop("src");
        expect(defaultMap).toEqual('./images/none.png');
    });
    it('displays the map image name passed to it', ()=> {
        const testmap = mountedMap.find('img').prop("src");
        expect(testmap).toEqual('./images/testmap.png');
    });
});
