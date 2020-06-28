import React from 'react';
import { Shallow , shallow} from 'enzyme';
import Button from '../../components/Button';


describe("Button", function(){

    it("Should render without crashing", () => {
        let mountedButton;
        mountedButton = shallow(<Button/>);
    });
    it("Should have a button tag ", () => {
        let mountedButton;
        mountedButton = shallow(<Button/>);
        let expected = mountedButton.find('button');
        expect(expected.length).toBe(1);
    });

});

