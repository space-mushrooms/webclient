import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reducer>Hello</Reducer>, div);
  ReactDOM.unmountComponentAtNode(div);
});
