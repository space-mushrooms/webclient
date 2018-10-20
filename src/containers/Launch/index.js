import React, {PureComponent} from 'react';
import {Link} from 'react-router';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import Sliding from '../../components/PageTransition/Sliding';
import TitledSection from '../../components/TitledSection';
import launch from '../../mock/launch';

export default class LaunchPage extends PureComponent {
  render() {
    return (
      <Sliding>
        <TitledSection title="Launch Page">
          Launch Page
        </TitledSection>
      </Sliding>
    );
  }
}
