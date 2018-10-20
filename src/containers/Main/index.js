import React, {PureComponent} from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import Sliding from '../../components/PageTransition/Sliding';
import TitledSection from '../../components/TitledSection';
import launchMock from '../../mock/launch';

export default class MainPage extends PureComponent {
  render() {
    return (
      <Sliding>
        <TitledSection title="Upcoming launches" path="/" linkText="See all">
          <Swipe>
            <LaunchBanner launch={launchMock} />
            <LaunchBanner launch={launchMock} />
            <LaunchBanner launch={launchMock} />
          </Swipe>
        </TitledSection>
      </Sliding>
    );
  }
}
