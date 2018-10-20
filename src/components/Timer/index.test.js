import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timer timestamp={(Date.now() + 10000)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
