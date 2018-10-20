import React from 'react';
import ReactDOM from 'react-dom';
import LaunchBanner from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LaunchBanner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
