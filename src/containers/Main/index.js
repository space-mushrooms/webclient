import React, { PureComponent } from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import slidingTransition from '../../connectors/pageTransition/sliding';
import TitledSection from '../../components/TitledSection';
import {
  launchMockRightNow,
  launchMockDate,
  launchMockTimer,
} from '../../mock/launch';

class MainPage extends PureComponent {
  render() {
    return (
      <TitledSection title="Upcoming launches" path="/" linkText="See all">
        <Swipe>
          <LaunchBanner launch={launchMockRightNow} />
          <LaunchBanner launch={launchMockDate} />
          <LaunchBanner launch={launchMockTimer} />
        </Swipe>
      </TitledSection>
    );
  }
}

export default slidingTransition({appear: true})(MainPage);
