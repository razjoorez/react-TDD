import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../StoreLocator';

// describe("", function() {
   
// })

it('renders without carashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StoreLocator />, div);
});