import React, {PureComponent} from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import Sliding from '../../components/PageTransition/Sliding';
import TitledSection from '../../components/TitledSection';

export default class MainPage extends PureComponent {
  render() {
    return (
      <Sliding>
        <TitledSection title="Upcoming launches" path="/" linkText="See all">
          <Swipe>
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
            />
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
            />
            <LaunchBanner
              backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
              mission="Commercial Crew SpaceX"
              rocket="SpaceX Falcon Heavy"
            />
          </Swipe>
        </TitledSection>
      </Sliding>
    );
  }
}
