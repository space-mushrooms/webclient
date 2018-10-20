import React from 'react';
import ReactDOM from 'react-dom';
import Swipe from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Swipe><div /></Swipe>, div);
  ReactDOM.unmountComponentAtNode(div);
});
