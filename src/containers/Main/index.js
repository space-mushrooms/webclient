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
const MISSIONS_ARE_COOL = 'Миссии это очень клево, прочитайте про клевые миссии здесб';
const EXPLORATIONS_ARE_COOL = 'Исследования это очень клево, прочитайте про клевые исследования...';
const LAUNCH_VEHICLES_IMAGE = 'https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Ffd65b8542f16f963bd555c8623ad52f4%2F205045607%2Fnasa-sls-rocket-tests-2017-03-13-01-ed.jpg&client=amp-blogside-v2&signature=e8774c377907d8ad5ecf547d7c63a17fca10ce2f';
const LAUNCH_VEHICLES_DESCRIPTION = 'From a sounding rocket to a super-heavy lift vehicle';
const HAGUE_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tyler_N._Hague_official_portrait.jpg/360px-Tyler_N._Hague_official_portrait.jpg';
const OVCHININ_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Aleksey_Ovchinin.jpg/320px-Aleksey_Ovchinin.jpg';

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
        <TitledSection marginTop title="Launch vehicles">
          <Reducer>
            <FactCard image={LAUNCH_VEHICLES_IMAGE} fact={LAUNCH_VEHICLES_DESCRIPTION} to="/vehicles" />
          </Reducer>
        </TitledSection>
        <TitledSection marginTop title="Missions" path="/" linkText="See all">
          <Swipe>
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
            <FactCard image={DEFAULT_IMAGE} fact={MISSIONS_ARE_COOL} to="/" />
          </Swipe>
        </TitledSection>
        <TitledSection marginTop title="Astronauts" path="/" linkText="See all">
          <Swipe>
            <FactCard image={HAGUE_IMAGE} height="250px" fact="Nick Hague" to="/"  />
            <FactCard image={OVCHININ_IMAGE} height="250px" fact="Aleksey Ovchinin" to="/" />
          </Swipe>
        </TitledSection>
      </React.Fragment>
    );
  }
}

export default slidingTransition({appear: true})(MainPage);
