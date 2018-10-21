import React, {PureComponent} from 'react';
import LaunchCard from '../../components/LaunchCard';
import {launchMockRightNow} from '../../mock/launch';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';

class LaunchPage extends PureComponent {
  render() {
    return (
      <LaunchCard launch={launchMockRightNow} />
    );
  }
}

export default launchExpandTransition()(LaunchPage);
