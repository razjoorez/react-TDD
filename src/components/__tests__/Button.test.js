import React from 'react';
import { Shallow } from 'Enzyme';
import Button from '../../components/Button';


it("Should render without crashing", () => {
    let mountedButton;
    mountedButton = shallow(<Button/>);
} )