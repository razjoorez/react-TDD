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

describe("When a location is passed to it" , function() {
   let props;
   let mountedButton;
   beforeEach(()=> {
       props = {
            location: "Location1"
       };
       mountedButton = shallow(<Button  {...props} />)
   });
   it("displays the location", ()=> {
      const locName = mountedButton.find('.location-button');
       expect(locName.text()).toEqual('Location1');
   });

});

describe("When a no location is passed to it" , function() {
    let props;
    let mountedButton;
    beforeEach(()=> {
        props = {
             location: undefined
        };
        mountedButton = shallow(<Button  {...props} />)
    });
    it("displays the All location", ()=> {
       const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('All Locations');
    });

    it("calls a function passed to it when", ()=> {
        const mockCallBack = jest.fn();
        const mountedButtonWithCallBack = shallow(<Button handleClick ={mockCallBack} />);
        mountedButtonWithCallBack.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });
 
 });


