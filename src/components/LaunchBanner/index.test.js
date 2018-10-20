import React from 'react';
import ReactDOM from 'react-dom';
import LaunchBanner from './index';
import launch from '../../mock/launch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LaunchBanner launch={launch} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
