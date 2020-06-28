import React from 'react';
import { Shallow , shallow} from 'enzyme';
import Button from '../../components/Button';


describe("Button", function(){

    it("renders without crashing", () => {
        let mountedButton;
        mountedButton = shallow(<Button/>);
    });
    it("renders a button", () => {
        let mountedButton;
        mountedButton = shallow(<Button/>);
        let expected = mountedButton.find('button');
        expect(expected.length).toBe(1);
    });

});

