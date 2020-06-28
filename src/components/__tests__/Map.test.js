import React from 'react';
import {Shallow, shallow } from 'enzyme';
import Map from '../../components/Map';

it('Map should render without crashing' ,  () => {
    let mountedMap = shallow(<Map/>);
});