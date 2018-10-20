import React, { PureComponent } from 'react';
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
<<<<<<< HEAD
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
              launchTime={Date.now() - 1000 * 60 * 10}
              live
            />
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
              launchTime={Date.now() + 1000 * 60 * 60 * 24}
            />
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
              launchTime={Date.now() + 1000 * 60 * 60 * 24 * 10}
            />
=======
            <LaunchBanner launch={launchMock} />
            <LaunchBanner launch={launchMock} />
            <LaunchBanner launch={launchMock} />
>>>>>>> fe1a0641fd317f39015fd9d1c1b6bc5d600121b8
          </Swipe>
        </TitledSection>
      </Sliding>
    );
  }
}
