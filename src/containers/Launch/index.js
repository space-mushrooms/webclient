import React, {PureComponent} from 'react';
import LaunchCard from '../../components/LaunchCard';
import {launchMockRightNow} from '../../mock/launch';
import slidingTransition from '../../connectors/pageTransition/sliding';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';

class LaunchPage extends PureComponent {
  render() {
    return (
      <LaunchCard launch={launchMockRightNow} />
    );
  }
}

export default slidingTransition()(LaunchPage);
export const LaunchExpanding = launchExpandTransition()(LaunchPage);
