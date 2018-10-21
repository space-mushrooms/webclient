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
import FactCard from '../../components/FactCard';
import Reducer from '../../components/Reducer';

const DEFAULT_IMAGE = 'https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg';
const ROCKETS_ARE_COOL = 'Ракеты это очень клево, прочитайте про клевые ракеты здесб';
const MISSIONS_ARE_COOL = 'Миссии это очень клево, прочитайте про клевые миссии здесб';
const EXPLORATIONS_ARE_COOL = 'Исследования это очень клево, прочитайте про клевые исследования...';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <TitledSection marginTop title="Upcoming launches" path="/" linkText="See all">
          <Swipe>
            <LaunchBanner launch={launchMockRightNow} />
            <LaunchBanner launch={launchMockDate} />
            <LaunchBanner launch={launchMockTimer} />
          </Swipe>
        </TitledSection>
        <TitledSection title="Rockets">
          <Reducer>
            <FactCard image={DEFAULT_IMAGE} fact={ROCKETS_ARE_COOL} to="/" />
          </Reducer>
        </TitledSection>
        <TitledSection marginTop title="Missions" path="/" linkText="See all">
          <Swipe>
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
          </Swipe>
        </TitledSection>
        <TitledSection marginTop title="Explore" path="/" linkText="See all">
          <Swipe>
            <FactCard image={DEFAULT_IMAGE} fact={EXPLORATIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={EXPLORATIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={EXPLORATIONS_ARE_COOL} to="/" />
          </Swipe>
        </TitledSection>
      </React.Fragment>
    );
  }
}

export default slidingTransition({appear: true})(MainPage);
