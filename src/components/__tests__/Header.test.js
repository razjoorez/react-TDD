import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Header';
import { Shallow , shallow } from 'enzyme';
// it('renders without crashing', ()=> {
//     const div = document.createElement('div');
//     ReactDom.render(<Header/>, div);
// });

describe("Header", function(){

    it('renders without crashing', ()=> {
        let mountedHeader;
        mountedHeader = shallow(<Header/>);
    });

    it('shoud have a header tag', () => {
        let mountedHeader;
        mountedHeader = shallow(<Header/>);
        let expected = mountedHeader.find('header');
        expect(expected.length).toBe(1);

    });
    
});
