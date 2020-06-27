import React from 'react';
import { Shallow , shallow} from 'enzyme';
import Button from '../../components/Button';


it("Should render without crashing", () => {
    let mountedButton;
    mountedButton = shallow(<Button/>);
});