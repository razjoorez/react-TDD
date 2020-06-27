import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Shallow, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
//import StoreLocator from '../StoreLocator';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", function () {

  it('renders without crashing', ()=> {
   
    let mountedApp = shallow(<App/>);
  });

  // it('renders a StoreLocator', ()=> {
  //   let mountedApp = shallow(<App/>);
  //   const locators = mountedApp.find('StoreLocator');
  //   expect(locators.length).toBe(1);
  // });


});




