import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Header';
import { Shallow , shallow } from 'enzyme';
//import logoImage from './public/images/wired-brain-coffee-logo.png';


describe("Header", function(){

    let mountedHeader;

    beforeEach(()=> {
        mountedHeader = shallow(<Header/>);
    });


    it('renders without crashing', ()=> {
        let mountedHeader;
        mountedHeader = shallow(<Header/>);
     });

     it('renders a logo', () => {
    //const logoImg = mountedHeader.find(logoImage);
    expect(mountedHeader.find("img").prop("src")).toEqual('./images/wired-brain-coffee-logo.png');


    
     });

    });
