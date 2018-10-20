import React, { PureComponent } from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import Sliding from '../../components/PageTransition/Sliding';
import TitledSection from '../../components/TitledSection';
import {
  launchMockRightNow,
  launchMockDate,
  launchMockTimer,
} from '../../mock/launch';

export default class MainPage extends PureComponent {
  render() {
    return (
      <Sliding>
        <TitledSection title="Upcoming launches" path="/" linkText="See all">
          <Swipe>
            <LaunchBanner launch={launchMockRightNow} />
            <LaunchBanner launch={launchMockDate} />
            <LaunchBanner launch={launchMockTimer} />
          </Swipe>
        </TitledSection>
      </Sliding>
    );
  }
}
